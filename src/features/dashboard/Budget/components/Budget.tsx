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

type PaymentMethod =
  | "DOWN_PAYMENT"
  | "CASH"
  | "FULL_INSTALLMENTS";

type DownPaymentPercentage = 30 | 40;

const INSTALLMENTS = 6;

export default function Budget() {
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

  const [
    downPaymentPercentage,
    setDownPaymentPercentage,
  ] =
    useState<DownPaymentPercentage>(30);

  const currencyFormatter =
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const formatCurrency = (
    value: number,
  ) => currencyFormatter.format(value);

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

  const handleGenerateBudget =
    async () => {
      const budget: BudgetPrintData = {
        patientName,
        surgeryDate,

        surgery: {
          name: surgeryName,
          hasLipo,
          hasProsthesis,
        },

        values: {
          hospital: hospitalValue,
          medicalTeam:
            medicalTeamValue,
          postSurgicalKit:
            postSurgicalKitValue,
          prosthesis:
            effectiveProsthesisValue,
          argo: effectiveArgoValue,
          total: totalValue,
        },

        payment: {
          downPayment: {
            percentage:
              downPaymentPercentage,
            value: downPayment,
            installments:
              INSTALLMENTS,
            installmentValue:
              installmentWithDownPayment,
          },

          cash: {
            medicalTeamDiscount,
            total: cashTotal,
          },

          fullInstallments: {
            installments:
              INSTALLMENTS,
            installmentValue:
              fullInstallmentValue,
          },
        },
      };

      const blob = await pdf(
        <BudgetPdf data={budget} />,
      ).toBlob();

      const url =
        URL.createObjectURL(blob);

      window.open(url, "_blank");

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 60_000);
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
              <Label>
                Nome do paciente
              </Label>

              <Input
                type="text"
                placeholder="Nome completo"
                value={patientName}
                onChange={(event) =>
                  setPatientName(
                    event.target.value,
                  )
                }
              />
            </Field>

            <Field>
              <Label>
                Data da cirurgia
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

              <Input
                type="number"
                min="0"
                step="0.01"
                placeholder="0,00"
                value={
                  hospitalValue || ""
                }
                onChange={(event) =>
                  setHospitalValue(
                    Number(
                      event.target.value,
                    ),
                  )
                }
              />
            </Field>

            <Field>
              <Label>
                Valor da equipe médica
              </Label>

              <Input
                type="number"
                min="0"
                step="0.01"
                placeholder="0,00"
                value={
                  medicalTeamValue || ""
                }
                onChange={(event) =>
                  setMedicalTeamValue(
                    Number(
                      event.target.value,
                    ),
                  )
                }
              />
            </Field>

            <Field>
              <Label>
                Valor do kit
                pós-cirúrgico
              </Label>

              <Input
                type="number"
                min="0"
                step="0.01"
                placeholder="0,00"
                value={
                  postSurgicalKitValue ||
                  ""
                }
                onChange={(event) =>
                  setPostSurgicalKitValue(
                    Number(
                      event.target.value,
                    ),
                  )
                }
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

                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0,00"
                  value={
                    argoValue || ""
                  }
                  onChange={(event) =>
                    setArgoValue(
                      Number(
                        event.target
                          .value,
                      ),
                    )
                  }
                />
              </Field>
            )}

            {hasProsthesis && (
              <Field>
                <Label>
                  Valor da Prótese
                </Label>

                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0,00"
                  value={
                    prosthesisValue ||
                    ""
                  }
                  onChange={(event) =>
                    setProsthesisValue(
                      Number(
                        event.target
                          .value,
                      ),
                    )
                  }
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

              <PaymentDescription>
                5% de desconto sobre o
                valor da equipe médica.
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

        <ButtonContainer>
          <PrimaryButton
            type="button"
            onClick={
              handleGenerateBudget
            }
          >
            Gerar Orçamento
          </PrimaryButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}