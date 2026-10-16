export interface SurgeryRegistration {
  surgeryId: string;
  surgeryDate: string;
}

export type UpdatePatientRequest = Partial<
  Omit<CreatePatientRequest, "cpf" | "email">
> & {
  cpf?: string | null;
  email?: string | null;
};

export interface CreatePatientRequest {
  name: string;
  cpf: string | undefined;
  email: string | undefined;
  surgeries: SurgeryRegistration[];
}

export interface Patient {
  id: string;
  createdAt: string;
  name: string;
  updatedAt: string;
  cpf: string;
  email: string;

  surgeryId: string;
  surgeryDate: string;
}