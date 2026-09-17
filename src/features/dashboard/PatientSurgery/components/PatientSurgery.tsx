
"use client";

import { useEffect, useState } from "react";

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
  Select,
} from "./PatientSurgery.styles";

import { patientSurgeryService } from "../service/patientSurgery.service";

import type { Surgery } from "../../RegisterSurgery/types/surgery.types";
import { surgeriesService } from "../../RegisterSurgery/services/surgeries.service";

import type { Patient } from "../../Patient/types/patient.types";
import { patientsService } from "../../Patient/service/patients.service";

interface SurgeryItem {
  id: number;
  surgeryId: string;
  surgeryDate: string;
}

export default function PatientSurgery() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [surgeries, setSurgeries] = useState<Surgery[]>([]);

  const [patientId, setPatientId] = useState("");

  const [loadingPatients, setLoadingPatients] = useState(true);
  const [loadingSurgeries, setLoadingSurgeries] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [surgeryItems, setSurgeryItems] = useState<SurgeryItem[]>([
    {
      id: Date.now(),
      surgeryId: "",
      surgeryDate: "",
    },
  ]);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        setLoadingPatients(true);

        const data = await patientsService.findAll();

        setPatients(data);
      } catch (error) {
        console.error("Erro ao carregar pacientes:", error);
      } finally {
        setLoadingPatients(false);
      }
    };

    loadPatients();
  }, []);

  useEffect(() => {
    const loadSurgeries = async () => {
      try {
        setLoadingSurgeries(true);

        const data = await surgeriesService.findAll();

        setSurgeries(data);
      } catch (error) {
        console.error("Erro ao carregar cirurgias:", error);
      } finally {
        setLoadingSurgeries(false);
      }
    };

    loadSurgeries();
  }, []);

  const handleSurgeryChange = (
    id: number,
    field: keyof Omit<SurgeryItem, "id">,
    value: string,
  ) => {
    setSurgeryItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const handleAddSurgery = () => {
    setSurgeryItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        surgeryId: "",
        surgeryDate: "",
      },
    ]);
  };

  const handleRemoveSurgery = (id: number) => {
    if (surgeryItems.length === 1) {
      return;
    }

    setSurgeryItems((prev) =>
      prev.filter((item) => item.id !== id),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientId) {
      return;
    }

    try {
      setLoadingSubmit(true);

      await Promise.all(
        surgeryItems.map((surgery) =>
          patientSurgeryService.create({
            patientId,
            surgeryId: surgery.surgeryId,
            surgeryDate: surgery.surgeryDate,
          }),
        ),
      );

      console.log(
        "Cirurgias associadas ao paciente com sucesso!",
      );

      setPatientId("");

      setSurgeryItems([
        {
          id: Date.now(),
          surgeryId: "",
          surgeryDate: "",
        },
      ]);
    } catch (error) {
      console.error(
        "Erro ao associar cirurgias ao paciente:",
        error,
      );
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <Card>
      <Title>Cadastrar Cirurgia do Paciente</Title>

      <Description>
        Selecione um paciente e associe um ou mais procedimentos
        cirúrgicos.
      </Description>

      <Form onSubmit={handleSubmit}>
        <SectionTitle>Paciente</SectionTitle>

        <Grid>
          <FormGroup>
            <Label htmlFor="patient">
              Paciente
            </Label>

            <Select
              id="patient"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              required
              disabled={loadingPatients}
            >
              <option value="">
                {loadingPatients
                  ? "Carregando pacientes..."
                  : "Selecione um paciente"}
              </option>

              {!loadingPatients &&
                patients.map((patient) => (
                  <option
                    key={patient.id}
                    value={patient.id}
                  >
                    {patient.name}
                  </option>
                ))}
            </Select>
          </FormGroup>
        </Grid>

        <SectionTitle>
          Procedimentos Cirúrgicos
        </SectionTitle>

        <SurgeriesContainer>
          {surgeryItems.map((surgery, index) => (
            <SurgeryCard key={surgery.id}>
              <SurgeryHeader>
                <SurgeryTitle>
                  Cirurgia #{index + 1}
                </SurgeryTitle>

                {surgeryItems.length > 1 && (
                  <RemoveButton
                    type="button"
                    onClick={() =>
                      handleRemoveSurgery(surgery.id)
                    }
                  >
                    Remover
                  </RemoveButton>
                )}
              </SurgeryHeader>

              <Grid>
                <FormGroup>
                  <Label
                    htmlFor={`surgeryType-${surgery.id}`}
                  >
                    Procedimento Cirúrgico
                  </Label>

                  <Select
                    id={`surgeryType-${surgery.id}`}
                    value={surgery.surgeryId}
                    onChange={(e) =>
                      handleSurgeryChange(
                        surgery.id,
                        "surgeryId",
                        e.target.value,
                      )
                    }
                    required
                    disabled={loadingSurgeries}
                  >
                    <option value="">
                      {loadingSurgeries
                        ? "Carregando cirurgias..."
                        : "Selecione uma cirurgia"}
                    </option>

                    {!loadingSurgeries &&
                      surgeries.map((availableSurgery) => (
                        <option
                          key={availableSurgery.id}
                          value={availableSurgery.id}
                        >
                          {availableSurgery.name}
                        </option>
                      ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label
                    htmlFor={`surgeryDate-${surgery.id}`}
                  >
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
                        e.target.value,
                      )
                    }
                    required
                  />
                </FormGroup>
              </Grid>
            </SurgeryCard>
          ))}
        </SurgeriesContainer>

        <AddSurgeryButton
          type="button"
          onClick={handleAddSurgery}
        >
          + Adicionar outra cirurgia
        </AddSurgeryButton>

        <SubmitButton
          type="submit"
          disabled={loadingSubmit}
        >
          {loadingSubmit
            ? "Cadastrando..."
            : "Cadastrar Registro"}
        </SubmitButton>
      </Form>
    </Card>
  );
}
