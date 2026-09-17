import { api } from "@/shared/services/api";

import type {
  AuthUser,
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";

export const authService = {
  async login(
    data: LoginRequest,
  ): Promise<LoginResponse> {
    return api<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async me(): Promise<AuthUser> {
    return api<AuthUser>("/auth/me");
  },

  async logout(): Promise<void> {
    await api<void>("/auth/logout", {
      method: "POST",
    });
  },
};