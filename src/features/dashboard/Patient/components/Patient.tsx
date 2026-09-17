
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
  SubmitButton,
} from "./Patient.styles";
import { patientsService } from "../service/patients.service";


export default function RegisterPatient() {
  const [patientData, setPatientData] = useState({
    name: "",
    cpf: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handlePatientChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPatientData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const patient = await patientsService.create({
        name: patientData.name,
        cpf: patientData.cpf,
        email: patientData.email,
        surgeries: []
      });

      console.log("Paciente cadastrado com sucesso:", patient);

      setPatientData({
        name: "",
        cpf: "",
        email: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Title>Cadastrar Paciente</Title>

      <Description>
        Registre os dados do paciente no sistema.
      </Description>

      <Form onSubmit={handleSubmit}>
        <SectionTitle>Dados do Paciente</SectionTitle>

        <Grid>
          <FormGroup>
            <Label htmlFor="name">Nome Completo</Label>

            <Input
              id="name"
              name="name"
              value={patientData.name}
              onChange={handlePatientChange}
              placeholder="Digite o nome completo"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cpf">CPF</Label>

            <Input
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              value={patientData.cpf}
              onChange={handlePatientChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail</Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="exemplo@email.com"
              value={patientData.email}
              onChange={handlePatientChange}
              required
            />
          </FormGroup>
        </Grid>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar Paciente"}
        </SubmitButton>
      </Form>
    </Card>
  );
}
