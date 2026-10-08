
import { CreatePatientRequest, Patient } from "@/features/dashboard/Patient/types/patient.types";
import { api } from "@/shared/services/api";



export interface PatientOption {
  id: string;
  name: string;
  cpf: string;
  email: string;
}

export const patientsService = {
  async create(
    data: CreatePatientRequest,
  ): Promise<Patient> {
    return api<Patient>("/patients", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async findAll(): Promise<Patient[]> {
    return api<Patient[]>("/patients");
  },

  async search(
    name: string,
    signal?: AbortSignal,
  ): Promise<PatientOption[]> {
    const search = name.trim();

    if (search.length < 3) {
      return [];
    }

    const response = await api<
      PatientOption[] | { data: PatientOption[] }
    >(
      `/patients?search=${encodeURIComponent(search)}`,
      {
        method: "GET",
        signal,
      },
    );

    return Array.isArray(response)
      ? response
      : response.data ?? [];
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
