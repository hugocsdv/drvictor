export interface Surgery {
  id: string;
  name: string;
  category: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSurgeryRequest {
  name: string;
  category: string;
  description?: string;
}