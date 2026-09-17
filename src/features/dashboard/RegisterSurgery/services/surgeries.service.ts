import { api } from '@/shared/services/api';

import type {
  CreateSurgeryRequest,
  Surgery,
} from '../types/surgery.types';

export const surgeriesService = {
  async create(
    data: CreateSurgeryRequest,
  ): Promise<Surgery> {
    return api<Surgery>('/surgeries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async findAll(): Promise<Surgery[]> {
    return api<Surgery[]>('/surgeries');
  },

  async findOne(id: string): Promise<Surgery> {
    return api<Surgery>(`/surgeries/${id}`);
  },

  async update(
    id: string,
    data: Partial<CreateSurgeryRequest>,
  ): Promise<Surgery> {
    return api<Surgery>(`/surgeries/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  async remove(id: string): Promise<Surgery> {
    return api<Surgery>(`/surgeries/${id}`, {
      method: 'DELETE',
    });
  },
};