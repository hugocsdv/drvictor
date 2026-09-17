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
  SurgeriesContainer,
  SurgeryCard,
  SurgeryHeader,
  SurgeryTitle,
  RemoveButton,
  AddSurgeryButton,
  SubmitButton,
} from "./RegisterClientSurgery.styles";

interface SurgeryItem {
  id: number;
  surgeryType: string;
  surgeryDate: string;
}

export default function RegisterClientSurgery() {
  const [patientData, setPatientData] = useState({
    name: "",
    cpf: "",
    email: "",
  });

  const [surgeries, setSurgeries] = useState<SurgeryItem[]>([
    { id: Date.now(), surgeryType: "", surgeryDate: "" },
  ]);

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSurgeryChange = (
    id: number,
    field: keyof Omit<SurgeryItem, "id">,
    value: string
  ) => {
    setSurgeries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddSurgery = () => {
    setSurgeries((prev) => [
      ...prev,
      { id: Date.now(), surgeryType: "", surgeryDate: "" },
    ]);
  };

  const handleRemoveSurgery = (id: number) => {
    if (surgeries.length === 1) return;
    setSurgeries((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...patientData,
      surgeries,
    };
    console.log("Cadastro unificado enviado:", payload);
  };

  return (
    <Card>
      <Title>Cadastrar Cliente e Cirurgia</Title>
      <Description>
        Registre os dados do paciente e adicione um ou mais procedimentos cirúrgicos.
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
              value={patientData.email}
              onChange={handlePatientChange}
              required
            />
          </FormGroup>
        </Grid>

        <SectionTitle>Procedimentos Cirúrgicos</SectionTitle>

        <SurgeriesContainer>
          {surgeries.map((surgery, index) => (
            <SurgeryCard key={surgery.id}>
              <SurgeryHeader>
                <SurgeryTitle>Cirurgia #{index + 1}</SurgeryTitle>
                {surgeries.length > 1 && (
                  <RemoveButton
                    type="button"
                    onClick={() => handleRemoveSurgery(surgery.id)}
                  >
                    Remover
                  </RemoveButton>
                )}
              </SurgeryHeader>

              <Grid>
                <FormGroup>
                  <Label htmlFor={`surgeryType-${surgery.id}`}>
                    Procedimento Cirúrgico
                  </Label>
                  <Input
                    id={`surgeryType-${surgery.id}`}
                    value={surgery.surgeryType}
                    onChange={(e) =>
                      handleSurgeryChange(
                        surgery.id,
                        "surgeryType",
                        e.target.value
                      )
                    }
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor={`surgeryDate-${surgery.id}`}>
                    Data Prevista
                  </Label>
                  <Input
                    id={`surgeryDate-${surgery.id}`}
                    type="date"
                    value={surgery.surgeryDate}
                    onChange={(e) =>
                      handleSurgeryChange(
                        surgery.id,
                        "surgeryDate",
                        e.target.value
                      )
                    }
                    required
                  />
                </FormGroup>
              </Grid>
            </SurgeryCard>
          ))}
        </SurgeriesContainer>

        <AddSurgeryButton type="button" onClick={handleAddSurgery}>
          + Adicionar outra cirurgia
        </AddSurgeryButton>

        <SubmitButton type="submit">Cadastrar Registro</SubmitButton>
      </Form>
    </Card>
  );
}