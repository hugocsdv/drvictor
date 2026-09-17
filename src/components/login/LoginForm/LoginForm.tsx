"use client";

import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputGroup>

      {/* <OptionsRow>
        <CheckboxLabel>
          <input type="checkbox" /> Lembrar de mim
        </CheckboxLabel>
        <ForgotPassword href="/esqueci-senha">
          Esqueceu a senha?
        </ForgotPassword>
      </OptionsRow> */}

      <SubmitButton type="submit">Entrar na conta</SubmitButton>
    </Form>
  );
}