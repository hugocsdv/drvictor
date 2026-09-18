"use client";

import { useEffect, useState } from "react";

import {
  Container,
  Title,
  Description,
  ControlsContainer,
  SearchInput,
  TableWrapper,
  Table,
  Th,
  Td,
  ActionButton,
} from "./PatientList.styles";
import { Patient } from "../../types/patient.types";
import { patientsService } from "../../service/patients.service";



export default function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await patientsService.findAll();

      setPatients(data);
    } catch (error) {
      console.error(
        "Erro ao buscar pacientes:",
        error,
      );

      setError(
        error instanceof Error
          ? error.message
          : "Erro ao buscar pacientes.",
      );
    } finally {
      setLoading(false);
    }
  };

  const formatCpf = (cpf: string) => {
    const numbers = cpf.replace(/\D/g, "");

    if (numbers.length !== 11) {
      return cpf;
    }

    return numbers.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4",
    );
  };

  const formatDate = (value: string) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(value));
  };

  const search = searchTerm
    .toLowerCase()
    .trim();

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name
        .toLowerCase()
        .includes(search) ||
      patient.cpf.includes(search) ||
      patient.email
        .toLowerCase()
        .includes(search),
  );

  if (loading) {
    return (
      <Container>
        <Title>Pacientes</Title>

        <Description>
          Carregando pacientes...
        </Description>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Pacientes</Title>

        <Description>
          Erro ao carregar pacientes: {error}
        </Description>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Pacientes</Title>

      <Description>
        Consulte os pacientes cadastrados na clínica.
      </Description>

      <ControlsContainer>
        <SearchInput
          placeholder="Buscar por nome, CPF ou e-mail..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </ControlsContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Nome</Th>
              <Th>CPF</Th>
              <Th>E-mail</Th>
              <Th>Data de cadastro</Th>
              <Th>Ações</Th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <Td>
                  <strong>{patient.name}</strong>
                </Td>

                <Td>
                  {formatCpf(patient.cpf)}
                </Td>

                <Td>
                  {patient.email}
                </Td>

                <Td>
                  {formatDate(patient.createdAt)}
                </Td>

                <Td>
                  <ActionButton
                    onClick={() =>
                      console.log(
                        "Paciente:",
                        patient,
                      )
                    }
                  >
                    Visualizar
                  </ActionButton>
                </Td>
              </tr>
            ))}

            {filteredPatients.length === 0 && (
              <tr>
                <Td colSpan={5}>
                  Nenhum paciente encontrado.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}