
import { api } from "@/shared/services/api";

import type {
  CreatePatientSurgeryRequest,
  PatientSurgery,
} from "../types/registerPatientSurgery.types";

export const patientSurgeryService = {
  async create(
    data: CreatePatientSurgeryRequest,
  ): Promise<PatientSurgery> {
    return api<PatientSurgery>("/patient-surgeries", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async findAll(): Promise<PatientSurgery[]> {
    return api<PatientSurgery[]>("/patient-surgeries");
  },

  async findOne(id: string): Promise<PatientSurgery> {
    return api<PatientSurgery>(`/patient-surgeries/${id}`);
  },

  async findByPatientId(
    patientId: string,
  ): Promise<PatientSurgery[]> {
    return api<PatientSurgery[]>(
      `/patient-surgeries/patient/${patientId}`,
    );
  },

  async update(
    id: string,
    data: Partial<CreatePatientSurgeryRequest>,
  ): Promise<PatientSurgery> {
    return api<PatientSurgery>(
      `/patient-surgeries/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
      },
    );
  },

  async remove(id: string): Promise<PatientSurgery> {
    return api<PatientSurgery>(
      `/patient-surgeries/${id}`,
      {
        method: "DELETE",
      },
    );
  },
};
