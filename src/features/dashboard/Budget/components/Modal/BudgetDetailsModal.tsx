
"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";



import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalSubtitle,
    CloseButton,
    ModalContent,
    DetailSection,
    DetailTitle,
    DetailGrid,
    DetailItem,
    DetailLabel,
    TotalBox,
    ModalFooter,
    FooterButton,
} from "../List/BudgetList.styles";
import { BudgetDetails } from "../../types/budget.details.type";
import { budgetService } from "../../service/budget.service";

interface Props {
    budget: BudgetDetails;
    onClose: () => void;
    onSaved: (budget: BudgetDetails) => void;
}

type PaymentMethod =
    | "DOWN_PAYMENT"
    | "CASH"
    | "FULL_INSTALLMENTS";

const money = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);

const roundMoney = (value: number) =>
    Math.round((value + Number.EPSILON) * 100) / 100;

const toDateInput = (value: string | null) =>
    value ? value.slice(0, 10) : "";

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "Verdana, sans-serif",
    background: "#FFFFFF",
    color: "#222222",
};

export default function BudgetDetailsModal({
    budget,
    onClose,
    onSaved,
}: Props) {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState(() => ({
        patientName: budget.patientName || budget.patient?.name || "",
        surgeryName: budget.surgeryName || "",
        surgeryDate: toDateInput(budget.surgeryDate),

        hasLipo: budget.hasLipo,
        hasProsthesis: budget.hasProsthesis,

        hospitalValue: Number(budget.hospitalValue),
        medicalTeamValue: Number(budget.medicalTeamValue),
        postSurgicalKitValue: Number(budget.postSurgicalKitValue),
        prosthesisValue: Number(budget.prosthesisValue),
        argoValue: Number(budget.argoValue),

        paymentMethod: budget.paymentMethod as PaymentMethod,
        downPaymentPercentage: budget.downPaymentPercentage,

        observations: budget.observations || "",
        printObservations: budget.printObservations,
    }));

    const setField = <K extends keyof typeof form>(
        field: K,
        value: (typeof form)[K],
    ) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const values = useMemo(() => {
        const prosthesis = form.hasProsthesis
            ? form.prosthesisValue
            : 0;

        const argo = form.hasLipo
            ? form.argoValue
            : 0;

        const financeable =
            form.medicalTeamValue +
            form.postSurgicalKitValue +
            prosthesis +
            argo;

        const total = form.hospitalValue + financeable;

        const medicalTeamDiscount =
            form.medicalTeamValue * 0.05;

        const cashTotal =
            total - medicalTeamDiscount;

        const downPayment =
            financeable * (form.downPaymentPercentage / 100);

        const downPaymentInstallments =
            budget.downPaymentInstallments || 6;

        const fullInstallments =
            budget.fullInstallments || 6;

        return {
            total: roundMoney(total),
            medicalTeamDiscount: roundMoney(medicalTeamDiscount),
            cashTotal: roundMoney(cashTotal),
            downPayment: roundMoney(downPayment),
            downPaymentInstallments,
            downPaymentInstallmentValue: roundMoney(
                (financeable - downPayment) /
                downPaymentInstallments,
            ),
            fullInstallments,
            fullInstallmentValue: roundMoney(
                financeable / fullInstallments,
            ),
        };
    }, [form, budget]);

    useEffect(() => {
        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && !saving) onClose();
        };

        window.addEventListener("keydown", onEscape);

        return () => window.removeEventListener("keydown", onEscape);
    }, [onClose, saving]);

    const handleSave = async () => {
        if (!form.patientName.trim() || !form.surgeryName.trim()) {
            setError("Informe o paciente e o nome da cirurgia.");
            return;
        }

        try {
            setSaving(true);
            setError("");

            const updated = await budgetService.update(budget.id, {
                patientName: form.patientName,
                surgeryName: form.surgeryName,
                surgeryDate: form.surgeryDate || undefined,

                hasLipo: form.hasLipo,
                hasProsthesis: form.hasProsthesis,

                hospitalValue: roundMoney(form.hospitalValue),
                medicalTeamValue: roundMoney(form.medicalTeamValue),
                postSurgicalKitValue: roundMoney(
                    form.postSurgicalKitValue,
                ),
                prosthesisValue: form.hasProsthesis
                    ? roundMoney(form.prosthesisValue)
                    : 0,
                argoValue: form.hasLipo
                    ? roundMoney(form.argoValue)
                    : 0,

                totalValue: values.total,

                paymentMethod: form.paymentMethod,

                downPaymentPercentage:
                    form.downPaymentPercentage,
                downPaymentValue: values.downPayment,
                downPaymentInstallments:
                    values.downPaymentInstallments,
                downPaymentInstallmentValue:
                    values.downPaymentInstallmentValue,

                medicalTeamDiscount:
                    values.medicalTeamDiscount,
                cashTotal: values.cashTotal,

                fullInstallments: values.fullInstallments,
                fullInstallmentValue:
                    values.fullInstallmentValue,

                observations: form.observations,
                printObservations: form.printObservations,
            });

            onSaved(updated);
        } catch (err) {
            console.error("Erro ao atualizar orçamento:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Não foi possível salvar as alterações.",
            );
        } finally {
            setSaving(false);
        }
    };

    const numberField = (
        label: string,
        field:
            | "hospitalValue"
            | "medicalTeamValue"
            | "postSurgicalKitValue"
            | "prosthesisValue"
            | "argoValue",
    ) => (
        <DetailItem>
            <DetailLabel>{label}</DetailLabel>
            <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.01"
                value={form[field]}
                onChange={(event) =>
                    setField(field, Number(event.target.value))
                }
            />
        </DetailItem>
    );

    return (
        <ModalOverlay onMouseDown={saving ? undefined : onClose}>
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-label="Editar orçamento"
                onMouseDown={(event: MouseEvent<HTMLDivElement>) =>
                    event.stopPropagation()
                }
            >
                <ModalHeader>
                    <div>
                        <ModalTitle>Editar Orçamento</ModalTitle>
                        <ModalSubtitle>
                            Altere os dados e salve as modificações.
                        </ModalSubtitle>
                    </div>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        disabled={saving}
                    >
                        ×
                    </CloseButton>
                </ModalHeader>

                <ModalContent>
                    <DetailSection>
                        <DetailTitle>Dados do Paciente</DetailTitle>

                        <DetailGrid>
                            <DetailItem>
                                <DetailLabel>Nome do paciente</DetailLabel>
                                <input
                                    style={inputStyle}
                                    value={form.patientName}
                                    onChange={(event) =>
                                        setField("patientName", event.target.value)
                                    }
                                />
                            </DetailItem>

                            <DetailItem>
                                <DetailLabel>Data da cirurgia</DetailLabel>
                                <input
                                    style={inputStyle}
                                    type="date"
                                    value={form.surgeryDate}
                                    onChange={(event) =>
                                        setField("surgeryDate", event.target.value)
                                    }
                                />
                            </DetailItem>
                        </DetailGrid>
                    </DetailSection>

                    <DetailSection>
                        <DetailTitle>Procedimento</DetailTitle>

                        <DetailItem>
                            <DetailLabel>Nome da cirurgia</DetailLabel>
                            <input
                                style={inputStyle}
                                value={form.surgeryName}
                                onChange={(event) =>
                                    setField("surgeryName", event.target.value)
                                }
                            />
                        </DetailItem>

                        <DetailGrid>
                            {numberField("Hospital", "hospitalValue")}
                            {numberField("Equipe médica", "medicalTeamValue")}
                            {numberField(
                                "Kit pós-cirúrgico",
                                "postSurgicalKitValue",
                            )}
                        </DetailGrid>

                        <DetailGrid>
                            <DetailItem>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={form.hasLipo}
                                        onChange={(event) =>
                                            setField("hasLipo", event.target.checked)
                                        }
                                    />
                                    {" "}Possui Lipo
                                </label>
                            </DetailItem>

                            <DetailItem>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={form.hasProsthesis}
                                        onChange={(event) =>
                                            setField(
                                                "hasProsthesis",
                                                event.target.checked,
                                            )
                                        }
                                    />
                                    {" "}Possui Prótese
                                </label>
                            </DetailItem>
                        </DetailGrid>

                        <DetailGrid>
                            {form.hasLipo &&
                                numberField("Argo", "argoValue")}

                            {form.hasProsthesis &&
                                numberField("Prótese", "prosthesisValue")}
                        </DetailGrid>

                        <TotalBox>
                            <span>Valor total</span>
                            <strong>{money(values.total)}</strong>
                        </TotalBox>
                    </DetailSection>

                    <DetailSection>
                        <DetailTitle>Forma de Pagamento</DetailTitle>

                        <DetailItem>
                            <DetailLabel>Forma selecionada</DetailLabel>
                            <select
                                style={inputStyle}
                                value={form.paymentMethod}
                                onChange={(event) =>
                                    setField(
                                        "paymentMethod",
                                        event.target.value as PaymentMethod,
                                    )
                                }
                            >
                                <option value="DOWN_PAYMENT">
                                    Entrada + Parcelamento
                                </option>
                                <option value="CASH">
                                    Pagamento à Vista
                                </option>
                                <option value="FULL_INSTALLMENTS">
                                    Parcelamento sem Entrada
                                </option>
                            </select>
                        </DetailItem>

                        <DetailGrid>
                            <DetailItem>
                                <DetailLabel>Entrada</DetailLabel>
                                <select
                                    style={inputStyle}
                                    value={form.downPaymentPercentage}
                                    onChange={(event) =>
                                        setField(
                                            "downPaymentPercentage",
                                            Number(event.target.value),
                                        )
                                    }
                                >
                                    <option value={30}>30%</option>
                                    <option value={40}>40%</option>
                                </select>
                            </DetailItem>

                            <DetailItem>
                                <DetailLabel>Valor da entrada</DetailLabel>
                                <strong>{money(values.downPayment)}</strong>
                            </DetailItem>
                        </DetailGrid>

                        <DetailGrid>
                            <DetailItem>
                                <DetailLabel>Entrada + parcelas</DetailLabel>
                                <strong>
                                    {values.downPaymentInstallments}x de{" "}
                                    {money(values.downPaymentInstallmentValue)}
                                </strong>
                            </DetailItem>

                            <DetailItem>
                                <DetailLabel>Sem entrada</DetailLabel>
                                <strong>
                                    {values.fullInstallments}x de{" "}
                                    {money(values.fullInstallmentValue)}
                                </strong>
                            </DetailItem>

                            <DetailItem>
                                <DetailLabel>Desconto à vista</DetailLabel>
                                <strong>
                                    {money(values.medicalTeamDiscount)}
                                </strong>
                            </DetailItem>

                            <DetailItem>
                                <DetailLabel>Total à vista</DetailLabel>
                                <strong>{money(values.cashTotal)}</strong>
                            </DetailItem>
                        </DetailGrid>

                        <DetailLabel>
                            O hospital é pago separadamente dos parcelamentos.
                        </DetailLabel>
                    </DetailSection>

                    <DetailSection>
                        <DetailTitle>Observações</DetailTitle>

                        <textarea
                            style={{ ...inputStyle, resize: "vertical" }}
                            rows={4}
                            value={form.observations}
                            onChange={(event) =>
                                setField("observations", event.target.value)
                            }
                        />

                        <label style={{ display: "block", marginTop: 14 }}>
                            <input
                                type="checkbox"
                                checked={form.printObservations}
                                onChange={(event) =>
                                    setField(
                                        "printObservations",
                                        event.target.checked,
                                    )
                                }
                            />
                            {" "}Imprimir observações no PDF
                        </label>
                    </DetailSection>

                    {error && (
                        <p role="alert" style={{ color: "#DC2626" }}>
                            {error}
                        </p>
                    )}
                </ModalContent>

                <ModalFooter>
                    <FooterButton
                        type="button"
                        onClick={onClose}
                        disabled={saving}
                        style={{
                            background: "#F3F4F6",
                            color: "#222222",
                        }}
                    >
                        Cancelar
                    </FooterButton>

                    <FooterButton
                        type="button"
                        onClick={handleSave}
                        disabled={saving}
                    >
                        {saving ? "Salvando..." : "Salvar alterações"}
                    </FooterButton>
                </ModalFooter>
            </ModalContainer>
        </ModalOverlay>
    );
}
