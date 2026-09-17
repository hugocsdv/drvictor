"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/features/auth/context/AuthContext";

import {
  Form,
  InputGroup,
  Label,
  Input,
  OptionsRow,
  CheckboxLabel,
  ForgotPassword,
  SubmitButton,
} from "./LoginForm.styles";

export default function LoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await login({
        email,
        password,
      });

      router.push("/dashboard");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "E-mail ou senha inválidos.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">Senha</Label>

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
        />
      </InputGroup>

      {/* <OptionsRow>
        <CheckboxLabel>
          <input type="checkbox" />
          Lembrar de mim
        </CheckboxLabel>

        <ForgotPassword href="/esqueci-senha">
          Esqueceu a senha?
        </ForgotPassword>
      </OptionsRow> */}

      {error && (
        <span
          style={{
            color: "#dc2626",
            fontSize: "14px",
          }}
        >
          {error}
        </span>
      )}

      <SubmitButton
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Entrando..."
          : "Entrar na conta"}
      </SubmitButton>
    </Form>
  );
}