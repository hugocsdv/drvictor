export interface BudgetPrintData {
  patientName: string;
  surgeryDate: string;

  surgery: {
    name: string;
    hasLipo: boolean;
    hasProsthesis: boolean;
  };

  values: {
    hospital: number;
    medicalTeam: number;
    postSurgicalKit: number;
    prosthesis: number;
    argo: number;
    total: number;
  };

  payment: {
    downPayment: {
      percentage: number;
      value: number;
      installments: number;
      installmentValue: number;
    };

    cash: {
      medicalTeamDiscount: number;
      total: number;
    };

    fullInstallments: {
      installments: number;
      installmentValue: number;
    };
  };
}