"use client";

import { useMemo, useState } from "react";

import { pdf } from "@react-pdf/renderer";

import {

  Container,

  Header,

  Title,

  Description,

  Form,

  Section,

  SectionTitle,

  Grid,

  Field,

  Label,

  Input,

  Select,

  CheckboxGroup,

  CheckboxLabel,

  Checkbox,

  PaymentOptions,

  PaymentCard,

  PaymentTitle,

  PaymentDescription,

  PaymentValue,

  Summary,

  SummaryTitle,

  SummaryRow,

  SummaryLabel,

  SummaryValue,

  Divider,

  TotalRow,

  TotalLabel,

  TotalValue,

  ButtonContainer,

  PrimaryButton,

} from "./Budget.styles";

import { BudgetPrintData } from "../types/budget.types";

import BudgetPdf from "../BudgetPdf/BudgetPdf";
import CurrencyInput from "./CurrencyInput";
import PatientAutocomplete from "@/shared/components/PatientAutocomplete";
import { budgetService } from "../service/budget.service";

type PaymentMethod =

  | "DOWN_PAYMENT"

  | "CASH"

  | "FULL_INSTALLMENTS";

type DownPaymentPercentage = 30 | 40;

const INSTALLMENTS = 6;

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatCurrency = (value: number) => currencyFormatter.format(value);

export default function Budget() {

  const [patientId, setPatientId] = useState("");

  const [patientName, setPatientName] =

    useState("");

  const [surgeryDate, setSurgeryDate] =

    useState("");

  const [surgeryName, setSurgeryName] =

    useState("");

  const [hospitalValue, setHospitalValue] =

    useState(0);

  const [

    medicalTeamValue,

    setMedicalTeamValue,

  ] = useState(0);

  const [

    postSurgicalKitValue,

    setPostSurgicalKitValue,

  ] = useState(0);

  const [hasLipo, setHasLipo] =

    useState(false);

  const [argoValue, setArgoValue] =

    useState(0);

  const [

    hasProsthesis,

    setHasProsthesis,

  ] = useState(false);

  const [

    prosthesisValue,

    setProsthesisValue,

  ] = useState(0);

  const [

    paymentMethod,

    setPaymentMethod,

  ] = useState<PaymentMethod>(

    "DOWN_PAYMENT",

  );

  const [savingBudget, setSavingBudget] = useState(false);
  const [observations, setObservations] = useState("");

  const [printObservations, setPrintObservations] = useState(false);

  const [

    downPaymentPercentage,

    setDownPaymentPercentage,

  ] =

    useState<DownPaymentPercentage>(30);

  const effectiveProsthesisValue =

    hasProsthesis ? prosthesisValue : 0;

  const effectiveArgoValue =

    hasLipo ? argoValue : 0;

  /*

   * Valor que pode ser parcelado.

   *

   * Hospital fica fora.

   *

   * Equipe médica + kit + prótese +

   * Argo podem ser parcelados.

   */

  const financeableValue = useMemo(

    () =>

      medicalTeamValue +

      postSurgicalKitValue +

      effectiveProsthesisValue +

      effectiveArgoValue,

    [

      medicalTeamValue,

      postSurgicalKitValue,

      effectiveProsthesisValue,

      effectiveArgoValue,

    ],

  );

  /*

   * Total geral do orçamento.

   */

  const totalValue = useMemo(

    () =>

      hospitalValue + financeableValue,

    [hospitalValue, financeableValue],

  );

  /*

   * 5% de desconto somente

   * sobre a equipe médica.

   */

  const medicalTeamDiscount =

    medicalTeamValue * 0.05;

  const discountedMedicalTeamValue =

    medicalTeamValue -

    medicalTeamDiscount;

  const cashTotal =

    hospitalValue +

    discountedMedicalTeamValue +

    postSurgicalKitValue +

    effectiveProsthesisValue +

    effectiveArgoValue;

  /*

   * Entrada de 30% ou 40%

   * sobre o valor parcelável.

   */

  const downPayment =

    financeableValue *

    (downPaymentPercentage / 100);

  const remainingAfterDownPayment =

    financeableValue - downPayment;

  const installmentWithDownPayment =

    remainingAfterDownPayment /

    INSTALLMENTS;

  /*

   * Parcelamento sem entrada.

   */

  const fullInstallmentValue =

    financeableValue / INSTALLMENTS;

  const handleProsthesisChange = (

    checked: boolean,

  ) => {

    setHasProsthesis(checked);

    if (!checked) {

      setProsthesisValue(0);

    }

  };

  const handleLipoChange = (

    checked: boolean,

  ) => {

    setHasLipo(checked);

    if (!checked) {

      setArgoValue(0);

    }

  };


  const handleGenerateBudget = async () => {
    if (savingBudget) return;

    if (!patientId) {
      alert("Selecione um paciente cadastrado.");
      return;
    }

    if (!surgeryName.trim()) {
      alert("Informe o nome da cirurgia.");
      return;
    }

    const budget: BudgetPrintData = {
      patientName,
      surgeryDate,
      observations,
      printObservations,

      surgery: {
        name: surgeryName,
        hasLipo,
        hasProsthesis,
      },

      values: {
        hospital: hospitalValue,
        medicalTeam: medicalTeamValue,
        postSurgicalKit: postSurgicalKitValue,
        prosthesis: effectiveProsthesisValue,
        argo: effectiveArgoValue,
        total: totalValue,
      },

      payment: {
        downPayment: {
          percentage: downPaymentPercentage,
          value: downPayment,
          installments: INSTALLMENTS,
          installmentValue: installmentWithDownPayment,
        },

        cash: {
          medicalTeamDiscount,
          total: cashTotal,
        },

        fullInstallments: {
          installments: INSTALLMENTS,
          installmentValue: fullInstallmentValue,
        },
      },
    };

    // Abre a aba imediatamente para evitar bloqueio
    // de pop-up após as chamadas assíncronas.
    const pdfWindow = window.open("", "_blank");

    setSavingBudget(true);

    try {
      // 1. Monta o payload completo.
      const payload = budgetService.buildCreatePayload(
        budget,
        patientId,
        paymentMethod,
        "1",
      );

      // 2. Salva no banco de dados.
      const savedBudget = await budgetService.create(payload);

      console.log("Orçamento salvo:", savedBudget);

      // 3. Gera o PDF após salvar com sucesso.
      const blob = await pdf(
        <BudgetPdf data={budget} />,
      ).toBlob();

      const url = URL.createObjectURL(blob);

      if (pdfWindow && !pdfWindow.closed) {
        pdfWindow.location.href = url;
      } else {
        // O navegador pode ter bloqueado a nova aba.
        const link = document.createElement("a");
        link.href = url;
        link.download = `orcamento-${savedBudget.id}.pdf`;
        link.click();
      }

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 60_000);

    } catch (error) {
      pdfWindow?.close();

      console.error("Erro ao gerar orçamento:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Não foi possível salvar o orçamento.",
      );
    } finally {
      setSavingBudget(false);
    }
  };


  return (

    <Container>

      <Header>

        <Title>

          Relatório de Orçamento de

          Cirurgia

        </Title>

        <Description>

          Preencha os dados do paciente,

          procedimento e valores para

          calcular as condições de

          pagamento.

        </Description>

      </Header>

      <Form>

        <Section>

          <SectionTitle>

            Dados do Paciente

          </SectionTitle>

          <Grid>

            <Field>

              <Field>
                <Label>Nome do paciente</Label>

                <PatientAutocomplete
                  value={patientName}
                  onChange={(name, id) => {
                    setPatientName(name);
                    setPatientId(id);
                  }}
                />
              </Field>

            </Field>

            <Field>

              <Label>

                Data

              </Label>

              <Input

                type="date"

                value={surgeryDate}

                onChange={(event) =>

                  setSurgeryDate(

                    event.target.value,

                  )

                }

              />

            </Field>

          </Grid>

        </Section>

        <Section>

          <SectionTitle>

            Procedimento

          </SectionTitle>

          <Grid>

            <Field>

              <Label>

                Nome da cirurgia

              </Label>

              <Input

                type="text"

                placeholder="Ex: Mamoplastia"

                value={surgeryName}

                onChange={(event) =>

                  setSurgeryName(

                    event.target.value,

                  )

                }

              />

            </Field>

            <Field>

              <Label>

                Valor do hospital

              </Label>

              <CurrencyInput
                value={hospitalValue}
                onChange={setHospitalValue}
              />

            </Field>

            <Field>

              <Label>

                Valor da <strong>equipe médica</strong>

              </Label>

              <CurrencyInput
                value={medicalTeamValue}
                onChange={setMedicalTeamValue}
              />

            </Field>

            <Field>

              <Label>

                Valor do kit

                pós-cirúrgico

              </Label>

              <CurrencyInput
                value={postSurgicalKitValue}
                onChange={setPostSurgicalKitValue}
              />

            </Field>

          </Grid>

          <CheckboxGroup>

            <CheckboxLabel>

              <Checkbox

                type="checkbox"

                checked={hasLipo}

                onChange={(event) =>

                  handleLipoChange(

                    event.target.checked,

                  )

                }

              />

              Possui Lipo

            </CheckboxLabel>

            <CheckboxLabel>

              <Checkbox

                type="checkbox"

                checked={hasProsthesis}

                onChange={(event) =>

                  handleProsthesisChange(

                    event.target.checked,

                  )

                }

              />

              Possui Prótese

            </CheckboxLabel>

          </CheckboxGroup>

          <Grid>

            {hasLipo && (

              <Field>

                <Label>

                  Valor do Argo

                </Label>

                <CurrencyInput
                  value={argoValue}
                  onChange={setArgoValue}
                />

              </Field>

            )}

            {hasProsthesis && (

              <Field>

                <Label>

                  Valor da Prótese

                </Label>

                <CurrencyInput
                  value={prosthesisValue}
                  onChange={setProsthesisValue}
                />

              </Field>

            )}

          </Grid>

        </Section>

        <Section>

          <SectionTitle>

            Forma de Pagamento

          </SectionTitle>

          <PaymentOptions>

            <PaymentCard

              $selected={

                paymentMethod ===

                "DOWN_PAYMENT"

              }

              onClick={() =>

                setPaymentMethod(

                  "DOWN_PAYMENT",

                )

              }

            >

              <PaymentTitle>

                Entrada + Parcelamento

              </PaymentTitle>

              <PaymentDescription>

                Entrada de 30% ou 40% e

                saldo restante em até 6x

                sem juros.

              </PaymentDescription>

              <Field>

                <Label>

                  Valor da entrada

                </Label>

                <Select

                  value={

                    downPaymentPercentage

                  }

                  onClick={(event) =>

                    event.stopPropagation()

                  }

                  onChange={(event) =>

                    setDownPaymentPercentage(

                      Number(

                        event.target

                          .value,

                      ) as DownPaymentPercentage,

                    )

                  }

                >

                  <option value={30}>

                    30%

                  </option>

                  <option value={40}>

                    40%

                  </option>

                </Select>

              </Field>

              <PaymentValue>

                Entrada:{" "}

                {formatCurrency(

                  downPayment,

                )}

              </PaymentValue>

              <PaymentValue>

                {INSTALLMENTS}x de{" "}

                {formatCurrency(

                  installmentWithDownPayment,

                )}

              </PaymentValue>

              <PaymentDescription>

                + Hospital:{" "}

                {formatCurrency(

                  hospitalValue,

                )}

              </PaymentDescription>

            </PaymentCard>

            <PaymentCard

              $selected={

                paymentMethod === "CASH"

              }

              onClick={() =>

                setPaymentMethod("CASH")

              }

            >

              <PaymentTitle>

                Pagamento à Vista

              </PaymentTitle>

              <PaymentDescription style={{ fontSize: "16px", lineHeight: 1.5 }}>
                5% de desconto sobre o valor da{" "}
                <strong>equipe médica</strong>.
              </PaymentDescription>

              <PaymentValue>

                {formatCurrency(

                  cashTotal,

                )}

              </PaymentValue>

              <PaymentDescription>

                Desconto:{" "}

                {formatCurrency(

                  medicalTeamDiscount,

                )}

              </PaymentDescription>

            </PaymentCard>

            <PaymentCard

              $selected={

                paymentMethod ===

                "FULL_INSTALLMENTS"

              }

              onClick={() =>

                setPaymentMethod(

                  "FULL_INSTALLMENTS",

                )

              }

            >

              <PaymentTitle>

                Parcelamento sem Entrada

              </PaymentTitle>

              <PaymentDescription>

                Valor total parcelável em

                até 6x sem juros.

              </PaymentDescription>

              <PaymentValue>

                {INSTALLMENTS}x de{" "}

                {formatCurrency(

                  fullInstallmentValue,

                )}

              </PaymentValue>

              <PaymentDescription>

                + Hospital:{" "}

                {formatCurrency(

                  hospitalValue,

                )}

              </PaymentDescription>

            </PaymentCard>

          </PaymentOptions>

          <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.6, marginTop: "20px", color: "#222222" }}>
            * O valor do hospital não está incluso nos parcelamentos e deverá ser pago separadamente.
          </p>
        </Section>

        <Summary>

          <SummaryTitle>

            Resumo do Orçamento

          </SummaryTitle>

          <SummaryRow>

            <SummaryLabel>

              Hospital

            </SummaryLabel>

            <SummaryValue>

              {formatCurrency(

                hospitalValue,

              )}

            </SummaryValue>

          </SummaryRow>

          <SummaryRow>

            <SummaryLabel>

              Equipe médica

            </SummaryLabel>

            <SummaryValue>

              {formatCurrency(

                medicalTeamValue,

              )}

            </SummaryValue>

          </SummaryRow>

          <SummaryRow>

            <SummaryLabel>

              Kit pós-cirúrgico

            </SummaryLabel>

            <SummaryValue>

              {formatCurrency(

                postSurgicalKitValue,

              )}

            </SummaryValue>

          </SummaryRow>

          {hasProsthesis && (

            <SummaryRow>

              <SummaryLabel>

                Prótese

              </SummaryLabel>

              <SummaryValue>

                {formatCurrency(

                  prosthesisValue,

                )}

              </SummaryValue>

            </SummaryRow>

          )}

          {hasLipo && (

            <SummaryRow>

              <SummaryLabel>

                Argo

              </SummaryLabel>

              <SummaryValue>

                {formatCurrency(

                  argoValue,

                )}

              </SummaryValue>

            </SummaryRow>

          )}

          <Divider />

          <TotalRow>

            <TotalLabel>

              Valor Total

            </TotalLabel>

            <TotalValue>

              {formatCurrency(totalValue)}

            </TotalValue>

          </TotalRow>

        </Summary>

        <Section>

          <SectionTitle>Observações</SectionTitle>

          <Field>

            <textarea

              value={observations}

              onChange={(event) => setObservations(event.target.value)}

              placeholder="Digite observações, recomendações ou informações adicionais..."

              rows={5}

              style={{

                width: "100%",

                padding: "12px 16px",

                borderRadius: "8px",

                border: "1px solid #E5E7EB",

                fontFamily: "Verdana, sans-serif",

                fontSize: "14px",

                resize: "vertical",

                outline: "none",

              }}

            />

            <CheckboxGroup>

              <CheckboxLabel>

                <Checkbox

                  type="checkbox"

                  checked={printObservations}

                  onChange={(event) =>

                    setPrintObservations(event.target.checked)

                  }

                />

                Imprimir observações no orçamento

              </CheckboxLabel>

            </CheckboxGroup>

          </Field>

        </Section>

        <ButtonContainer>

          <PrimaryButton
            type="button"
            onClick={handleGenerateBudget}
            disabled={savingBudget}
          >
            {savingBudget
              ? "Salvando orçamento..."
              : "Salvar e Gerar Orçamento"}
          </PrimaryButton>

        </ButtonContainer>

      </Form>

    </Container>

  );

}