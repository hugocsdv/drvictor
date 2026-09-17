export interface SurgeryRegistration {
  surgeryId: string;
  surgeryDate: string;
}

export interface CreatePatientSurgeryRequest {
  patientId: string;
  surgeryId: string;
  surgeryDate: string;
}

export interface PatientSurgery {
  id: string;
  patientId: string;
  surgeryId: string;
  surgeryDate: string;
}