"use client";

import { useEffect, useState } from "react";

import {
  Card,
  Title,
  Description,
  Form,
  Grid,
  FormGroup,
  Label,
  Select,
  CheckboxLabel,
  SubmitButton,
} from "./SurgeryTerm.styles";

import type { Surgery } from "../RegisterSurgery/types/surgery.types";

import { surgeriesService } from "../RegisterSurgery/services/surgeries.service";
import { termsService } from "./service/surgeryTerm.service";

export default function SurgeryTerm() {
  const [surgeries, setSurgeries] = useState<Surgery[]>([]);
  const [templates, setTemplates] = useState<string[]>([]);

  const [surgeryId, setSurgeryId] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [isRequired, setIsRequired] = useState(true);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const [surgeriesData, templatesData] =
        await Promise.all([
          surgeriesService.findAll(),
          termsService.findTemplates(),
        ]);

      setSurgeries(surgeriesData);
      setTemplates(templatesData);
    } catch (error) {
      console.error(
        "Erro ao carregar dados:",
        error,
      );

      alert(
        "Não foi possível carregar as cirurgias e os termos.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    if (!surgeryId) {
      alert("Selecione uma cirurgia.");
      return;
    }

    if (!templateName) {
      alert("Selecione um termo.");
      return;
    }

    try {
      setSubmitting(true);

      await termsService.create({
        surgeryId,
        termTitle: formatTemplateName(
          templateName,
        ),
        templateName,
        isRequired,
      });

      alert(
        "Termo vinculado à cirurgia com sucesso.",
      );

      setSurgeryId("");
      setTemplateName("");
      setIsRequired(true);
    } catch (error) {
      console.error(
        "Erro ao vincular termo:",
        error,
      );

      alert(
        error instanceof Error
          ? error.message
          : "Erro ao vincular termo.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <Title>
        Vincular Termo à Cirurgia
      </Title>

      <Description>
        Selecione a cirurgia e o termo que será
        utilizado para geração do documento de
        assinatura.
      </Description>

      <Form onSubmit={handleSubmit}>
        <Grid>
          <FormGroup>
            <Label htmlFor="surgeryId">
              Cirurgia Correspondente
            </Label>

            <Select
              id="surgeryId"
              value={surgeryId}
              onChange={(e) =>
                setSurgeryId(e.target.value)
              }
              disabled={loading}
              required
            >
              <option value="">
                {loading
                  ? "Carregando cirurgias..."
                  : "Selecione a cirurgia..."}
              </option>

              {surgeries.map((surgery) => (
                <option
                  key={surgery.id}
                  value={surgery.id}
                >
                  {surgery.name}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="templateName">
              Termo
            </Label>

            <Select
              id="templateName"
              value={templateName}
              onChange={(e) =>
                setTemplateName(
                  e.target.value,
                )
              }
              disabled={loading}
              required
            >
              <option value="">
                {loading
                  ? "Carregando termos..."
                  : "Selecione o termo..."}
              </option>

              {templates.map((template) => (
                <option
                  key={template}
                  value={template}
                >
                  {formatTemplateName(
                    template,
                  )}
                </option>
              ))}
            </Select>
          </FormGroup>
        </Grid>

        <FormGroup>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={isRequired}
              onChange={(e) =>
                setIsRequired(
                  e.target.checked,
                )
              }
            />

            Documento de assinatura obrigatória
            antes do procedimento
          </CheckboxLabel>
        </FormGroup>

        <SubmitButton
          type="submit"
          disabled={
            loading ||
            submitting ||
            !surgeryId ||
            !templateName
          }
        >
          {submitting
            ? "Salvando..."
            : "Salvar e Vincular Termo"}
        </SubmitButton>
      </Form>
    </Card>
  );
}

function formatTemplateName(
  fileName: string,
): string {
  return fileName
    .replace(/^termo-/, "")
    .replace(/\.njk$/, "")
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1),
    )
    .join(" ");
}