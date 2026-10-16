import { api } from "@/shared/services/api";

export interface CreateTermRequest {
  surgeryId: string;
  termTitle: string;
  templateName: string;
  isRequired: boolean;
  pdfUrl: string
}

export interface Term {
  id: string;
  surgeryId: string;
  termTitle: string;
  templateName: string;
  isRequired: boolean;
  version: string;
  createdAt: string;
}


export const termsService = {
  async findTemplates(): Promise<string[]> {
    return api<string[]>("/surgery-terms/templates");
  },

  async create(
    data: CreateTermRequest,
  ): Promise<Term> {
    return api<Term>("/surgery-terms", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};