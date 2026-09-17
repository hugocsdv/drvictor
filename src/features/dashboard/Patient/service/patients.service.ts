
import { api } from "@/shared/services/api";

import type {
  CreatePatientRequest,
  Patient,
} from "../types/patient.types";

export const patientsService = {
  async create(
    data: CreatePatientRequest,
  ): Promise<Patient> {

    api<Patient>("/signatures", {
      method: "POST",
      body: JSON.stringify({patientSurgeryId: "6c0e8de9-0d23-4d79-91f5-2e14a1bdc0f6"}),
    });
    return api<Patient>("/patients", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async findAll(): Promise<Patient[]> {
    return api<Patient[]>("/patients");
  },

  async findOne(id: string): Promise<Patient> {
    return api<Patient>(`/patients/${id}`);
  },

  async update(
    id: string,
    data: Partial<CreatePatientRequest>,
  ): Promise<Patient> {
    return api<Patient>(`/patients/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  async remove(id: string): Promise<Patient> {
    return api<Patient>(`/patients/${id}`, {
      method: "DELETE",
    });
  },
};
