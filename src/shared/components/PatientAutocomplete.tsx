"use client";

import { useEffect, useState } from "react";
import { PatientOption, patientsService } from "../services/patient.service";
import { Input } from "@/features/dashboard/Budget/components/Budget.styles";


interface Props {
  value: string;
  onChange: (name: string, patientId: string) => void;
}

export default function PatientAutocomplete({ value, onChange }: Props) {
  const [patients, setPatients] = useState<PatientOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (selected || value.trim().length < 3) {
      setPatients([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(false);

      try {
        const results = await patientsService.search(
          value.trim(),
          controller.signal,
        );

        if (!controller.signal.aborted) {
          setPatients(results);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(true);
          setPatients([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [value, selected]);

  return (
    <div style={{ position: "relative" }}>
      <Input
        type="text"
        placeholder="Digite pelo menos 3 letras..."
        value={value}
        autoComplete="off"
        onChange={(event) => {
          setSelected(false);
          setPatients([]);
          onChange(event.target.value, "");
        }}
      />

      {!selected && value.trim().length >= 3 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 20,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            maxHeight: 240,
            overflowY: "auto",
          }}
        >
          {loading && <div style={{ padding: 12 }}>Buscando...</div>}

          {error && (
            <div style={{ padding: 12 }}>
              Não foi possível buscar pacientes.
            </div>
          )}

          {!loading && !error && patients.length === 0 && (
            <div style={{ padding: 12 }}>Nenhum paciente encontrado.</div>
          )}

          {!loading &&
            patients.map((patient) => (
              <button
                key={patient.id}
                type="button"
                onClick={() => {
                  setSelected(true);
                  setPatients([]);
                  onChange(patient.name, patient.id);
                }}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: 0,
                  borderBottom: "1px solid #F3F4F6",
                  background: "#FFFFFF",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "Verdana, sans-serif",
                }}
              >
                <strong>{patient.name}</strong>
                <div style={{ fontSize: 12, color: "#6B7280" }}>
                  CPF: {patient.cpf}
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}