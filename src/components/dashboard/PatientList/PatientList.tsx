"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Description,
  ControlsContainer,
  SearchInput,
  FilterSelect,
  TableWrapper,
  Table,
  Th,
  Td,
  SurgeryList,
  SurgeryBadge,
  StatusBadge,
  ActionButton,
} from "./PatientList.styles";

interface PatientSurgery {
  title: string;
  signed: boolean;
}

interface Patient {
  id: string;
  name: string;
  cpf: string;
  surgeries: PatientSurgery[];
}

const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Ana Silva",
    cpf: "123.456.789-00",
    surgeries: [
      { title: "Mamoplastia de Aumento", signed: true },
      { title: "Rinoplastia Estética", signed: true },
    ],
  },
  {
    id: "2",
    name: "Carlos Eduardo",
    cpf: "987.654.321-11",
    surgeries: [{ title: "Lipoaspiração HD", signed: false }],
  },
  {
    id: "3",
    name: "Mariana Costa",
    cpf: "456.789.123-22",
    surgeries: [
      { title: "Abdominoplastia", signed: true },
      { title: "Lipoaspiração", signed: false },
    ],
  },
];

export default function PatientList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getOverallStatus = (surgeries: PatientSurgery[]) => {
    const total = surgeries.length;
    const signedCount = surgeries.filter((s) => s.signed).length;

    if (signedCount === total) return "signed";
    if (signedCount === 0) return "pending";
    return "partial";
  };

  const filteredPatients = mockPatients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cpf.includes(searchTerm);

    const overallStatus = getOverallStatus(patient.surgeries);
    const matchesFilter =
      statusFilter === "all" || overallStatus === statusFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <Container>
      <Title>Status de Assinaturas por Paciente</Title>
      <Description>
        Acompanhe quais pacientes já assinaram os termos correspondentes às suas cirurgias.
      </Description>

      <ControlsContainer>
        <SearchInput
          placeholder="Buscar por nome ou CPF..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Todos os Status</option>
          <option value="signed">Todos Assinados</option>
          <option value="partial">Parcialmente Assinados</option>
          <option value="pending">Pendente Assinatura</option>
        </FilterSelect>
      </ControlsContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Paciente</Th>
              <Th>CPF</Th>
              <Th>Cirurgias Cadastradas</Th>
              <Th>Status Geral</Th>
              <Th>Ações</Th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => {
              const status = getOverallStatus(patient.surgeries);
              return (
                <tr key={patient.id}>
                  <Td>
                    <strong>{patient.name}</strong>
                  </Td>
                  <Td>{patient.cpf}</Td>
                  <Td>
                    <SurgeryList>
                      {patient.surgeries.map((s, i) => (
                        <SurgeryBadge key={i}>
                          • {s.title} ({s.signed ? "Assinado" : "Pendente"})
                        </SurgeryBadge>
                      ))}
                    </SurgeryList>
                  </Td>
                  <Td>
                    {status === "signed" && (
                      <StatusBadge $status="signed">
                        ✓ Assinado
                      </StatusBadge>
                    )}
                    {status === "partial" && (
                      <StatusBadge $status="partial">
                        ◒ Parcial ({patient.surgeries.filter((s) => s.signed).length}/{patient.surgeries.length})
                      </StatusBadge>
                    )}
                    {status === "pending" && (
                      <StatusBadge $status="pending">
                        ✕ Pendente
                      </StatusBadge>
                    )}
                  </Td>
                  <Td>
                    <ActionButton
                      onClick={() =>
                        alert(`Reenviando notificação para ${patient.name}`)
                      }
                    >
                      Reenviar Termo
                    </ActionButton>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}