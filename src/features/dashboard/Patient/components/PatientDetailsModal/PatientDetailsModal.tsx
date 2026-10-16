
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { patientsService } from "../../service/patients.service";
import type { Patient } from "../../types/patient.types";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
  Content,
  Field,
  Label,
  Input,
  Info,
  Footer,
  EditButton,
  CancelButton,
  SaveButton,
  DeleteButton,
} from "./PatientDetailsModal.styles";

interface PatientDetailsModalProps {
  patient: Patient;
  onClose: () => void;
  onUpdated: () => Promise<void>;
  onDeleted: () => Promise<void>;
}

export default function PatientDetailsModal({
  patient,
  onClose,
  onUpdated,
  onDeleted,
}: PatientDetailsModalProps) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [formData, setFormData] = useState({
    name: patient.name,
    cpf: patient.cpf ?? "",
    email: patient.email ?? "",
  });

  useEffect(() => {
    setFormData({
      name: patient.name,
      cpf: patient.cpf ?? "",
      email: patient.email ?? "",
    });
    setEditing(false);
    setDeleting(false);
  }, [patient]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: patient.name,
      cpf: patient.cpf ?? "",
      email: patient.email ?? "",
    });

    setEditing(false);
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.warning("Informe o nome do paciente.");
      return;
    }

    try {
      setLoading(true);

      await patientsService.update(patient.id, {
        name: formData.name.trim(),
        cpf: formData.cpf.trim() || null,
        email: formData.email.trim() || null,
      });

      toast.success("Paciente atualizado com sucesso!");

      await onUpdated();
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);

      await patientsService.remove(patient.id);

      toast.success("Paciente excluído com sucesso!");

      await onDeleted();
      onClose();
    } catch (error) {
      console.error("Erro ao excluir paciente:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (value?: string | Date | null) => {
    if (!value) return "Não informado";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Não informado";
    }

    return new Intl.DateTimeFormat("pt-BR").format(date);
  };

  return (
    <Overlay
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) {
          onClose();
        }
      }}
    >
      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="patient-modal-title"
      >
        <Header>
          <Title id="patient-modal-title">
            {deleting
              ? "Excluir paciente"
              : editing
                ? "Editar paciente"
                : "Informações do paciente"}
          </Title>

          <CloseButton
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Fechar"
          >
            ×
          </CloseButton>
        </Header>

        {deleting ? (
          <>
            <Content>
              <Info>
                Tem certeza que deseja excluir o paciente{" "}
                <strong>{patient.name}</strong>?
              </Info>

              <Info>
                Esta ação não poderá ser desfeita.
              </Info>
            </Content>

            <Footer>
              <CancelButton
                type="button"
                disabled={loading}
                onClick={() => setDeleting(false)}
              >
                Cancelar
              </CancelButton>

              <DeleteButton
                type="button"
                disabled={loading}
                onClick={handleDelete}
              >
                {loading ? "Excluindo..." : "Confirmar exclusão"}
              </DeleteButton>
            </Footer>
          </>
        ) : (
          <>
            <Content>
              <Field>
                <Label htmlFor="patient-name">Nome</Label>

                <Input
                  id="patient-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!editing || loading}
                />
              </Field>

              <Field>
                <Label htmlFor="patient-cpf">CPF</Label>

                <Input
                  id="patient-cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  disabled={!editing || loading}
                  placeholder="Não informado"
                />
              </Field>

              <Field>
                <Label htmlFor="patient-email">E-mail</Label>

                <Input
                  id="patient-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!editing || loading}
                  placeholder="Não informado"
                />
              </Field>

              <Field>
                <Label>Data de cadastro</Label>
                <Info>{formatDate(patient.createdAt)}</Info>
              </Field>
            </Content>

            <Footer>
              {editing ? (
                <>
                  <CancelButton
                    type="button"
                    disabled={loading}
                    onClick={handleCancel}
                  >
                    Cancelar
                  </CancelButton>

                  <SaveButton
                    type="button"
                    disabled={loading}
                    onClick={handleSave}
                  >
                    {loading ? "Salvando..." : "Salvar alterações"}
                  </SaveButton>
                </>
              ) : (
                <>
                  <DeleteButton
                    type="button"
                    onClick={() => setDeleting(true)}
                  >
                    Excluir
                  </DeleteButton>

                  <EditButton
                    type="button"
                    onClick={() => setEditing(true)}
                  >
                    Editar paciente
                  </EditButton>
                </>
              )}
            </Footer>
          </>
        )}
      </Modal>
    </Overlay>
  );
}
