
"use client";

import { useCallback, useEffect, useState } from "react";



import BudgetDetailsModal from "../Modal/BudgetDetailsModal";

import {
    Container,
    Header,
    Title,
    Description,
    TableWrapper,
    Table,
    Th,
    Td,
    PatientName,
    SurgeryName,
    ViewButton,
    EmptyState,
    PrintButton,
} from "./BudgetList.styles";
import { BudgetDetails } from "../../types/budget.details.type";
import { budgetService } from "../../service/budget.service";
import { pdf } from "@react-pdf/renderer";
import BudgetPdf from "../../BudgetPdf/BudgetPdf";

import { BudgetPrintData } from "../../types/budget.types";

export default function BudgetList() {
    const [budgets, setBudgets] = useState<BudgetDetails[]>([]);
    const [selectedBudget, setSelectedBudget] =
        useState<BudgetDetails | null>(null);

    const [loading, setLoading] = useState(true);
    const [loadingDetailsId, setLoadingDetailsId] =
        useState<string | null>(null);
    const [error, setError] = useState("");

    const fetchBudgets = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const data = await budgetService.findAll("1");

            setBudgets(data);
        } catch (err) {
            console.error("Erro ao buscar orçamentos:", err);
            setError("Não foi possível carregar os orçamentos.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchBudgets();
    }, [fetchBudgets]);

    const handleViewBudget = async (id: string) => {
        try {
            setLoadingDetailsId(id);
            setError("");

            const budget = await budgetService.findOne(id, "1");

            setSelectedBudget(budget);
        } catch (err) {
            console.error("Erro ao buscar orçamento:", err);
            setError("Não foi possível visualizar o orçamento.");
        } finally {
            setLoadingDetailsId(null);
        }
    };

    const [printingId, setPrintingId] = useState<string | null>(null);

    const handlePrintBudget = async (id: string) => {
        // Abre a aba antes das operações assíncronas
        // para evitar bloqueio de popup.
        const pdfWindow = window.open("", "_blank");

        try {
            setPrintingId(id);

            // Busca a versão mais recente do orçamento.
            const budget = await budgetService.findOne(id, "1");

            const printData: BudgetPrintData = {
                patientName:
                    budget.patientName || budget.patient?.name || "",
                surgeryDate: budget.surgeryDate?.slice(0, 10) || "",
                observations: budget.observations || "",
                printObservations: budget.printObservations,

                surgery: {
                    name: budget.surgeryName || "",
                    hasLipo: budget.hasLipo,
                    hasProsthesis: budget.hasProsthesis,
                },

                values: {
                    hospital: Number(budget.hospitalValue),
                    medicalTeam: Number(budget.medicalTeamValue),
                    postSurgicalKit: Number(budget.postSurgicalKitValue),
                    prosthesis: Number(budget.prosthesisValue),
                    argo: Number(budget.argoValue),
                    total: Number(budget.total),
                },

                payment: {
                    downPayment: {
                        percentage: budget.downPaymentPercentage,
                        value: Number(budget.downPaymentValue),
                        installments: budget.downPaymentInstallments,
                        installmentValue: Number(
                            budget.downPaymentInstallmentValue,
                        ),
                    },

                    cash: {
                        medicalTeamDiscount: Number(
                            budget.medicalTeamDiscount,
                        ),
                        total: Number(budget.cashTotal),
                    },

                    fullInstallments: {
                        installments: budget.fullInstallments,
                        installmentValue: Number(
                            budget.fullInstallmentValue,
                        ),
                    },
                },
            };

            const blob = await pdf(
                <BudgetPdf data={printData} />,
            ).toBlob();

            const url = URL.createObjectURL(blob);

            if (pdfWindow && !pdfWindow.closed) {
                pdfWindow.location.href = url;
            } else {
                const link = document.createElement("a");
                link.href = url;
                link.download = `orcamento-${budget.id}.pdf`;
                link.click();
            }

            setTimeout(() => URL.revokeObjectURL(url), 60_000);
        } catch (error) {
            pdfWindow?.close();

            console.error("Erro ao imprimir orçamento:", error);
            alert("Não foi possível gerar o PDF do orçamento.");
        } finally {
            setPrintingId(null);
        }
    };

    return (
        <Container>
            <Header>
                <Title>Orçamentos</Title>

                <Description>
                    Visualize os orçamentos cadastrados na clínica.
                </Description>
            </Header>

            {error && (
                <p role="alert" style={{ color: "#DC2626" }}>
                    {error}
                </p>
            )}

            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <Th>Paciente / Cirurgia</Th>
                            <Th style={{ textAlign: "right" }}>Ação</Th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <Td colSpan={2}>
                                    <EmptyState>
                                        Carregando orçamentos...
                                    </EmptyState>
                                </Td>
                            </tr>
                        ) : budgets.length === 0 ? (
                            <tr>
                                <Td colSpan={2}>
                                    <EmptyState>
                                        Nenhum orçamento encontrado.
                                    </EmptyState>
                                </Td>
                            </tr>
                        ) : (
                            budgets.map((budget) => (
                                <tr key={budget.id}>
                                    <Td>
                                        <PatientName>
                                            {budget.patientName ||
                                                budget.patient?.name ||
                                                "Paciente não informado"}
                                        </PatientName>

                                        <SurgeryName>
                                            {budget.surgeryName ||
                                                "Cirurgia não informada"}
                                        </SurgeryName>
                                    </Td>

                                    <Td style={{ textAlign: "right" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <ViewButton
                                                type="button"
                                                disabled={loadingDetailsId !== null}
                                                onClick={() => handleViewBudget(budget.id)}
                                            >
                                                {loadingDetailsId === budget.id
                                                    ? "Carregando..."
                                                    : "Visualizar"}
                                            </ViewButton>

                                            <PrintButton
                                                type="button"
                                                disabled={printingId !== null}
                                                onClick={() => handlePrintBudget(budget.id)}
                                            >
                                                {printingId === budget.id
                                                    ? "Gerando..."
                                                    : "Imprimir"}
                                            </PrintButton>
                                        </div>
                                    </Td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </TableWrapper>

            {selectedBudget && (
                <BudgetDetailsModal
                    budget={selectedBudget}
                    onClose={() => setSelectedBudget(null)}
                    onSaved={(updatedBudget) => {
                        setBudgets((previous) =>
                            previous.map((item) =>
                                item.id === updatedBudget.id ? updatedBudget : item,
                            ),
                        );

                        setSelectedBudget(null);
                    }}
                />
            )}
        </Container>
    );
}
