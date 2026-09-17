"use client";

import { useState } from "react";
import {
  Card,
  Title,
  Description,
  Form,
  Grid,
  FormGroup,
  Label,
  Input,
  Select,
  Dropzone,
  DropzoneText,
  FileSelected,
  CheckboxLabel,
  SubmitButton,
} from "./UploadSurgeryTerm.styles";

export default function UploadSurgeryTerm() {
  const [surgeryId, setSurgeryId] = useState("");
  const [termTitle, setTermTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isRequired, setIsRequired] = useState(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecione um arquivo PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("surgeryId", surgeryId);
    formData.append("termTitle", termTitle);
    formData.append("file", file);
    formData.append("isRequired", String(isRequired));

    console.log("Upload do termo PDF enviado:", {
      surgeryId,
      termTitle,
      fileName: file.name,
      isRequired,
    });
  };

  return (
    <Card>
      <Title>Vincular Termo PDF à Cirurgia</Title>
      <Description>
        Faça o upload do documento em formato PDF e conecte-o ao procedimento cirúrgico correto.
      </Description>

      <Form onSubmit={handleSubmit}>
        <Grid>
          <FormGroup>
            <Label htmlFor="surgeryId">Cirurgia Correspondente</Label>
            <Select
              id="surgeryId"
              value={surgeryId}
              onChange={(e) => setSurgeryId(e.target.value)}
              required
            >
              <option value="">Selecione a cirurgia...</option>
              <option value="1">Mamoplastia de Aumento</option>
              <option value="2">Rinoplastia Estética</option>
              <option value="3">Lipoaspiração HD</option>
              <option value="4">Abdominoplastia</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="termTitle">Título do Termo / Documento</Label>
            <Input
              id="termTitle"
              placeholder="Ex: Termo de Consentimento Informado"
              value={termTitle}
              onChange={(e) => setTermTitle(e.target.value)}
              required
            />
          </FormGroup>
        </Grid>

        <FormGroup $fullWidth>
          <Label>Arquivo em PDF</Label>
          <Dropzone>
            <svg viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
            </svg>
            <DropzoneText>
              <strong>Clique para enviar</strong> ou arraste o PDF até aqui
            </DropzoneText>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              required={!file}
            />
          </Dropzone>

          {file && (
            <FileSelected>
              <span>📄 {file.name}</span>
              <button type="button" onClick={() => setFile(null)}>
                ✕
              </button>
            </FileSelected>
          )}
        </FormGroup>

        <FormGroup>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={isRequired}
              onChange={(e) => setIsRequired(e.target.checked)}
            />
            Documento de assinatura obrigatória antes do procedimento
          </CheckboxLabel>
        </FormGroup>

        <SubmitButton type="submit">Salvar e Vincular PDF</SubmitButton>
      </Form>
    </Card>
  );
}