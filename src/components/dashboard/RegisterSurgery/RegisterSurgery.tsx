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

export default function RegisterSurgery() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cirurgia cadastrada:", formData);
  };

  return (
    <Card>
      <Title>Cadastrar Nova Cirurgia</Title>
      <Description>
        Cadastre os tipos de cirurgias do catálogo da clínica para posterior vinculo de termos em PDF.
      </Description>

      <Form onSubmit={handleSubmit}>
        <Grid>
          <FormGroup>
            <Label htmlFor="name">Nome da Cirurgia</Label>
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
            <Label htmlFor="category">Especialidade / Categoria</Label>
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
          <Label htmlFor="description">Descrição do Procedimento</Label>
          <TextArea
            id="description"
            name="description"
            placeholder="Detalhes adicionais sobre a cirurgia..."
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton type="submit">Cadastrar Cirurgia</SubmitButton>
      </Form>
    </Card>
  );
}