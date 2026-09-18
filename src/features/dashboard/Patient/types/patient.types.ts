export interface SurgeryRegistration {
  surgeryId: string;
  surgeryDate: string;
}

export interface CreatePatientRequest {
  name: string;
  cpf: string;
  email: string;
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