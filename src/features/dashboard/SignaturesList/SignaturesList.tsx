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
  StatusBadge,
  ActionButton,
} from "./SignaturesList.styles";

import {
  Signature,
  useSignatures,
} from "@/providers/SignaturesProvider";

export default function SignaturesList() {
  const {
    signatures,
    loading,
    error,
    fetchSignatures,
  } = useSignatures();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("all");

  const filteredSignatures = signatures.filter(
    (signature) => {
      const patient =
        signature.patientSurgery.patient;

      const surgery =
        signature.patientSurgery.surgery;

      const term = signature.term;

      const search =
        searchTerm.toLowerCase().trim();

      const matchesSearch =
        patient.name
          .toLowerCase()
          .includes(search) ||
        patient.cpf.includes(search) ||
        patient.email
          .toLowerCase()
          .includes(search) ||
        surgery.name
          .toLowerCase()
          .includes(search) ||
        surgery.category
          .toLowerCase()
          .includes(search) ||
        term.termTitle
          .toLowerCase()
          .includes(search);

      const matchesFilter =
        statusFilter === "all" ||
        signature.status ===
          statusFilter.toUpperCase();

      return matchesSearch && matchesFilter;
    },
  );

  const formatDate = (
    value: string | null,
  ) => {
    if (!value) {
      return "-";
    }

    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(value));
  };

  const formatDateTime = (
    value: string | null,
  ) => {
    if (!value) {
      return "-";
    }

    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
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

  const getStatus = (
    signature: Signature,
  ): "signed" | "pending" | "partial" => {
    if (signature.status === "SIGNED") {
      return "signed";
    }

    return "pending";
  };

  const getStatusLabel = (
    signature: Signature,
  ) => {
    switch (signature.status) {
      case "SIGNED":
        return "✓ Assinado";

      case "PENDING":
        return "✕ Pendente";

      default:
        return signature.status;
    }
  };

  const handleResend = async (
    signature: Signature,
  ) => {
    console.log(
      "Reenviar assinatura:",
      signature.id,
    );

    /*
     * Quando seu endpoint de reenvio estiver pronto:
     *
     * await api(
     *   `/signatures/${signature.id}/resend`,
     *   {
     *     method: "POST",
     *   },
     * );
     *
     * await fetchSignatures();
     */

    alert(
      `Reenviando termo "${signature.term.termTitle}" para ${signature.patientSurgery.patient.name}`,
    );

    await fetchSignatures();
  };

  if (loading) {
    return (
      <Container>
        <Title>
          Status de Assinaturas por Paciente
        </Title>

        <Description>
          Carregando assinaturas...
        </Description>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>
          Status de Assinaturas por Paciente
        </Title>

        <Description>
          Erro ao carregar assinaturas: {error}
        </Description>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Status de Assinaturas por Paciente
      </Title>

      <Description>
        Acompanhe os pacientes, cirurgias, termos e
        status das assinaturas.
      </Description>

      <ControlsContainer>
        <SearchInput
          placeholder="Buscar por nome, CPF, e-mail, cirurgia ou termo..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        <FilterSelect
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >
          <option value="all">
            Todos os Status
          </option>

          <option value="signed">
            Assinado
          </option>

          <option value="pending">
            Pendente
          </option>
        </FilterSelect>
      </ControlsContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Paciente</Th>
              <Th>CPF</Th>
              <Th>E-mail</Th>
              <Th>Cirurgia</Th>
              <Th>Categoria</Th>
              <Th>Data Cirurgia</Th>
              <Th>Termo</Th>
              <Th>Obrigatório</Th>
              <Th>Status</Th>
              <Th>Assinado em</Th>
              <Th>Ações</Th>
            </tr>
          </thead>

          <tbody>
            {filteredSignatures.map(
              (signature) => {
                const patient =
                  signature.patientSurgery.patient;

                const surgery =
                  signature.patientSurgery.surgery;

                const term =
                  signature.term;

                const status =
                  getStatus(signature);

                return (
                  <tr key={signature.id}>
                    <Td>
                      <strong>
                        {patient.name}
                      </strong>
                    </Td>

                    <Td>
                      {formatCpf(patient.cpf)}
                    </Td>

                    <Td>
                      {patient.email}
                    </Td>

                    <Td>
                      {surgery.name}
                    </Td>

                    <Td>
                      {surgery.category}
                    </Td>

                    <Td>
                      {formatDate(
                        signature.patientSurgery
                          .surgeryDate,
                      )}
                    </Td>

                    <Td>
                      {term.termTitle}
                    </Td>

                    <Td>
                      {term.isRequired
                        ? "Sim"
                        : "Não"}
                    </Td>

                    <Td>
                      <StatusBadge
                        $status={status}
                      >
                        {getStatusLabel(
                          signature,
                        )}
                      </StatusBadge>
                    </Td>

                    <Td>
                      {formatDateTime(
                        signature.signedAt,
                      )}
                    </Td>

                    <Td>
                      {signature.status !==
                        "SIGNED" && (
                        <ActionButton
                          onClick={() =>
                            handleResend(
                              signature,
                            )
                          }
                        >
                          Reenviar Termo
                        </ActionButton>
                      )}
                    </Td>
                  </tr>
                );
              },
            )}

            {filteredSignatures.length ===
              0 && (
              <tr>
                <Td colSpan={13}>
                  Nenhuma assinatura encontrada.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}