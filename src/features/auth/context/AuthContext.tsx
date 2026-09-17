"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { authService } from "../services/auth.service";

import type {
  AuthUser,
  LoginRequest,
} from "../types/auth.types";

interface AuthContextData {
  user: AuthUser | null;
  loading: boolean;
  login: (data: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<
  AuthContextData | undefined
>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  const refreshSession = useCallback(async () => {
    try {
      const currentUser = await authService.me();

      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(
    async (data: LoginRequest) => {
      const response = await authService.login(data);

      setUser(response.user);
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth deve ser utilizado dentro de um AuthProvider.",
    );
  }

  return context;
}