"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "@/shared/services/api";

export interface Patient {
  id: string;
  name: string;
  cpf: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Surgery {
  id: string;
  name: string;
  category: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface PatientSurgery {
  id: string;
  patientId: string;
  surgeryId: string;
  surgeryDate: string;
  createdAt: string;
  patient: Patient;
  surgery: Surgery;
}

export interface Term {
  id: string;
  surgeryId: string;
  termTitle: string;
  pdfUrl: string;
  isRequired: boolean;
  version: string;
  createdAt: string;
}

export interface Signature {
  id: string;
  patientSurgeryId: string;
  termId: string;
  status: string;
  signedAt: string | null;
  ipAddress: string | null;
  patientSurgery: PatientSurgery;
  term: Term;
}

interface SignaturesContextData {
  signatures: Signature[];
  loading: boolean;
  error: string | null;
  fetchSignatures: () => Promise<void>;
}

const SignaturesContext =
  createContext<SignaturesContextData | undefined>(
    undefined,
  );

interface SignaturesProviderProps {
  children: ReactNode;
}

export function SignaturesProvider({
  children,
}: SignaturesProviderProps) {
  const [signatures, setSignatures] = useState<Signature[]>(
    [],
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSignatures = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await api<Signature[]>("/signatures", {
        method: "GET",
      });

      setSignatures(data);
    } catch (error) {
      console.error(
        "Erro ao buscar assinaturas:",
        error,
      );

      setError(
        error instanceof Error
          ? error.message
          : "Erro ao buscar assinaturas.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSignatures();
  }, [fetchSignatures]);

  return (
    <SignaturesContext.Provider
      value={{
        signatures,
        loading,
        error,
        fetchSignatures,
      }}
    >
      {children}
    </SignaturesContext.Provider>
  );
}

export function useSignatures() {
  const context = useContext(SignaturesContext);

  if (!context) {
    throw new Error(
      "useSignatures must be used inside SignaturesProvider.",
    );
  }

  return context;
}