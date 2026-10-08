
import { api } from "@/shared/services/api";

import type { BudgetPrintData } from "../types/budget.types";
import { BudgetDetails } from "../types/budget.details.type";

export type PaymentMethod =
    | "DOWN_PAYMENT"
    | "CASH"
    | "FULL_INSTALLMENTS";

export interface CreateBudgetRequest {
    patientId: string;
    clinicId: string;

    patientName: string;
    surgeryDate?: string;
    surgeryName: string;

    hasLipo: boolean;
    hasProsthesis: boolean;

    hospitalValue: number;
    medicalTeamValue: number;
    postSurgicalKitValue: number;
    prosthesisValue: number;
    argoValue: number;

    totalValue: number;

    paymentMethod: PaymentMethod;

    downPaymentPercentage: number;
    downPaymentValue: number;
    downPaymentInstallments: number;
    downPaymentInstallmentValue: number;

    medicalTeamDiscount: number;
    cashTotal: number;

    fullInstallments: number;
    fullInstallmentValue: number;

    observations: string;
    printObservations: boolean;
}

export interface BudgetResponse extends CreateBudgetRequest {
    id: string;
    title: string;
    description: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export const budgetService = {
    async create(
        data: CreateBudgetRequest,
    ): Promise<BudgetResponse> {
        return api<BudgetResponse>("/budgets", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    buildCreatePayload(
        budget: BudgetPrintData,
        patientId: string,
        paymentMethod: PaymentMethod,
        clinicId = "1",
    ): CreateBudgetRequest {
        return {
            patientId,
            clinicId,

            patientName: budget.patientName,
            surgeryDate: budget.surgeryDate || undefined,
            surgeryName: budget.surgery.name,

            hasLipo: budget.surgery.hasLipo,
            hasProsthesis: budget.surgery.hasProsthesis,

            hospitalValue: budget.values.hospital,
            medicalTeamValue: budget.values.medicalTeam,
            postSurgicalKitValue: budget.values.postSurgicalKit,
            prosthesisValue: budget.values.prosthesis,
            argoValue: budget.values.argo,

            totalValue: budget.values.total,

            paymentMethod,

            downPaymentPercentage:
                budget.payment.downPayment.percentage,

            downPaymentValue:
                budget.payment.downPayment.value,

            downPaymentInstallments:
                budget.payment.downPayment.installments,

            downPaymentInstallmentValue:
                budget.payment.downPayment.installmentValue,

            medicalTeamDiscount:
                budget.payment.cash.medicalTeamDiscount,

            cashTotal:
                budget.payment.cash.total,

            fullInstallments:
                budget.payment.fullInstallments.installments,

            fullInstallmentValue:
                budget.payment.fullInstallments.installmentValue,

            observations: budget.observations,
            printObservations: budget.printObservations,
        };
    },

    async findAll(clinicId = "1"): Promise<BudgetDetails[]> {
        return api<BudgetDetails[]>(
            `/budgets?clinicId=${encodeURIComponent(clinicId)}`,
        );
    },

    async findOne(
        id: string,
        clinicId = "1",
    ): Promise<BudgetDetails> {
        return api<BudgetDetails>(
            `/budgets/${id}?clinicId=${encodeURIComponent(clinicId)}`,
        );
    },

    async update(
        id: string,
        data: Partial<CreateBudgetRequest>,
        clinicId = "1",
    ): Promise<BudgetDetails> {
        return api<BudgetDetails>(
            `/budgets/${id}?clinicId=${encodeURIComponent(clinicId)}`,
            {
                method: "PATCH",
                body: JSON.stringify(data),
            },
        );
    },
};
