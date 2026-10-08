export interface BudgetDetails {
  id: string;
  title: string;
  patientId: string;
  clinicId: string;
  patientName: string | null;
  surgeryName: string | null;
  surgeryDate: string | null;

  hasLipo: boolean;
  hasProsthesis: boolean;

  hospitalValue: string;
  medicalTeamValue: string;
  postSurgicalKitValue: string;
  prosthesisValue: string;
  argoValue: string;

  subtotal: string;
  discount: string;
  total: string;

  paymentMethod: "DOWN_PAYMENT" | "CASH" | "FULL_INSTALLMENTS";
  downPaymentPercentage: number;
  downPaymentValue: string;
  downPaymentInstallments: number;
  downPaymentInstallmentValue: string;

  medicalTeamDiscount: string;
  cashTotal: string;

  fullInstallments: number;
  fullInstallmentValue: string;

  observations: string | null;
  printObservations: boolean;

  status: string;
  createdAt: string;

  patient?: {
    id: string;
    name: string;
  };
}