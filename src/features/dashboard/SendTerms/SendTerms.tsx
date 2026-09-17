"use client";

import { useState } from "react";
import {
  Card,
  Title,
  Description,
  Form,
  FormGroup,
  Label,
  Select,
  RadioGroup,
  RadioOption,
  SubmitButton,
} from "./SendTerms.styles";

export default function SendTerms() {
  const [patient, setPatient] = useState("");
  const [termType, setTermType] = useState("");
  const [channel, setChannel] = useState("whatsapp");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para envio de documento
  };

  return (
    <Card>
      <Title>Enviar Termos e Consentimentos</Title>
      <Description>
        Selecione o paciente e o documento para envio direto por e-mail ou WhatsApp.
      </Description>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="patient">Selecione o Paciente</Label>
          <Select
            id="patient"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            required
          >
            <option value="">Selecione...</option>
            <option value="1">Maria Silva - CPF: ***.123.456-**</option>
            <option value="2">João Santos - CPF: ***.987.654-**</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="termType">Tipo de Termo</Label>
          <Select
            id="termType"
            value={termType}
            onChange={(e) => setTermType(e.target.value)}
            required
          >
            <option value="">Selecione o documento...</option>
            <option value="cirurgico">Termo de Consentimento Cirúrgico</option>
            <option value="anestesia">Termo de Anestesia</option>
            <option value="imagem">Uso de Imagem</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Canal de Envio</Label>
          <RadioGroup>
            
            <RadioOption>
              <input
                type="radio"
                name="channel"
                value="email"
                checked={channel === "email"}
                onChange={(e) => setChannel(e.target.value)}
              />
              E-mail
            </RadioOption>
          </RadioGroup>
        </FormGroup>

        <SubmitButton type="submit">Enviar Documento</SubmitButton>
      </Form>
    </Card>
  );
}