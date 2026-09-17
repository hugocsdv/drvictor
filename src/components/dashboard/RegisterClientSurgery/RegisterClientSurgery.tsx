"use client";

import { useState } from "react";
import {
  Card,
  Title,
  Description,
  Form,
  SectionTitle,
  Grid,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./RegisterClientSurgery.styles";

export default function RegisterClientSurgery() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    surgeryType: "",
    surgeryDate: "",
    doctor: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para cadastro unificado
  };

  return (
    <Card>
      <Title>Cadastrar Cliente e Cirurgia</Title>
      <Description>
        Registre os dados do paciente e o procedimento cirúrgico correspondente.
      </Description>

      <Form onSubmit={handleSubmit}>
        <SectionTitle>Dados do Paciente</SectionTitle>
        <Grid>
          <FormGroup>
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Telefone / WhatsApp</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Grid>

        <SectionTitle>Dados da Cirurgia</SectionTitle>
        <Grid>
          <FormGroup>
            <Label htmlFor="surgeryType">Procedimento Cirúrgico</Label>
            <Input
              id="surgeryType"
              name="surgeryType"
              value={formData.surgeryType}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="surgeryDate">Data Prevista</Label>
            <Input
              id="surgeryDate"
              name="surgeryDate"
              type="date"
              value={formData.surgeryDate}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup $fullWidth>
            <Label htmlFor="doctor">Médico Responsável</Label>
            <Input
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup $fullWidth>
            <Label htmlFor="notes">Observações Médicas</Label>
            <TextArea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </FormGroup>
        </Grid>

        <SubmitButton type="submit">Cadastrar Registro</SubmitButton>
      </Form>
    </Card>
  );
}