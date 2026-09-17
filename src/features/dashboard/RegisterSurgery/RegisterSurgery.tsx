"use client";

import { useState } from "react";

import {
  Card,
  Title,
  Description,
  Form,
  Grid,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./RegisterSurgery.styles";
import { surgeriesService } from "./services/surgeries.service";



export default function RegisterSurgery() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await surgeriesService.create({
        name: formData.name,
        category: formData.category,
        description:
          formData.description || undefined,
      });

      setFormData({
        name: "",
        category: "",
        description: "",
      });

      setSuccess(
        "Cirurgia cadastrada com sucesso!",
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível cadastrar a cirurgia.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Title>Cadastrar Nova Cirurgia</Title>

      <Description>
        Cadastre os tipos de cirurgias do catálogo da
        clínica para posterior vinculo de termos em PDF.
      </Description>

      <Form onSubmit={handleSubmit}>
        <Grid>
          <FormGroup>
            <Label htmlFor="name">
              Nome da Cirurgia
            </Label>

            <Input
              id="name"
              name="name"
              placeholder="Ex: Mamoplastia de Aumento"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="category">
              Especialidade / Categoria
            </Label>

            <Input
              id="category"
              name="category"
              placeholder="Ex: Mastologia / Plástica"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Grid>

        <FormGroup $fullWidth>
          <Label htmlFor="description">
            Descrição do Procedimento
          </Label>

          <TextArea
            id="description"
            name="description"
            placeholder="Detalhes adicionais sobre a cirurgia..."
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>

        {error && (
          <p>
            {error}
          </p>
        )}

        {success && (
          <p>
            {success}
          </p>
        )}

        <SubmitButton
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Cadastrando..."
            : "Cadastrar Cirurgia"}
        </SubmitButton>
      </Form>
    </Card>
  );
}