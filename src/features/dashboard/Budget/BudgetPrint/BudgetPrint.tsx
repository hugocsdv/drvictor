"use client";

import { useRef } from "react";

import { BudgetPrintData } from "../types/budget.types";

import {
  PrintPage,
  Header,
  LogoArea,
  Logo,
  DoctorInfo,
  DoctorName,
  Specialty,
  ReportTitle,
  PatientSection,
  PatientRow,
  Label,
  Value,
  Section,
  SectionTitle,
  ValuesTable,
  PaymentGrid,
  PaymentCard,
  PaymentTitle,
  PaymentText,
  PaymentHighlight,
  TotalContainer,
  TotalLabel,
  TotalValue,
  SignatureArea,
  DoctorSignature,
  Footer,
  FooterAddresses,
  FooterContact,
  PrintButton,
} from "./BudgetPrint.styles";

interface BudgetPrintProps {
  data: BudgetPrintData;
}

export default function BudgetPrint({
  data,
}: BudgetPrintProps) {
  const reportRef = useRef<HTMLDivElement>(null);

  const currencyFormatter =
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const formatCurrency = (value: number) => {
    return currencyFormatter.format(value);
  };

  const formatDate = (date: string) => {
    if (!date) {
      return "-";
    }

    const [year, month, day] = date.split("-");

    if (!year || !month || !day) {
      return date;
    }

    return `${day}/${month}/${year}`;
  };

  const handlePrint = () => {
    if (!reportRef.current) {
      return;
    }

    const printWindow = window.open(
      "",
      "_blank",
      "width=900,height=1000",
    );

    if (!printWindow) {
      return;
    }

    const reportHtml =
      reportRef.current.innerHTML;

    printWindow.document.write(`
      <!DOCTYPE html>

      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />

          <title>
            Orçamento - ${data.patientName}
          </title>

          <style>
            @page {
              size: A4;
              margin: 0;
            }

            * {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;

              font-family: Arial, Helvetica, sans-serif;

              color: #111;
              background: #fff;
            }

            .print-page {
              width: 210mm;
              min-height: 297mm;

              padding: 18mm 18mm 15mm;

              margin: 0 auto;

              display: flex;
              flex-direction: column;
            }

            .header {
              text-align: center;
              margin-bottom: 35px;
            }

            .logo-area {
              display: flex;
              align-items: center;
              justify-content: center;

              gap: 20px;
            }

            .logo {
              font-family: Georgia, serif;
              font-size: 60px;
              font-weight: bold;
            }

            .doctor-name {
              margin: 0;

              font-family: Georgia, serif;
              font-size: 25px;
            }

            .specialty {
              display: flex;
              justify-content: center;
              gap: 35px;

              margin-top: 5px;

              font-family: Georgia, serif;
              font-size: 15px;
              font-weight: bold;
            }

            .report-title {
              text-align: center;

              font-family: Georgia, serif;

              font-size: 19px;

              text-decoration: underline;

              margin: 10px 0 30px;
            }

            .patient-section {
              margin-bottom: 28px;
            }

            .patient-row {
              display: flex;
              gap: 10px;

              margin-bottom: 9px;

              font-size: 14px;
            }

            .label {
              font-weight: bold;
              width: 130px;
            }

            .section {
              margin-bottom: 28px;

              break-inside: avoid;
            }

            .section-title {
              margin: 0 0 12px;

              padding-bottom: 7px;

              border-bottom: 1px solid #ccc;

              font-size: 16px;
            }

            table {
              width: 100%;

              border-collapse: collapse;

              font-size: 14px;
            }

            td {
              padding: 8px 4px;

              border-bottom: 1px solid #ddd;
            }

            td:last-child {
              text-align: right;
              font-weight: bold;
            }

            .total-container {
              display: flex;

              justify-content: space-between;
              align-items: center;

              padding-top: 14px;

              font-size: 17px;
              font-weight: bold;
            }

            .payment-grid {
              display: grid;

              grid-template-columns:
                repeat(3, 1fr);

              gap: 10px;
            }

            .payment-card {
              border: 1px solid #ccc;

              border-radius: 8px;

              padding: 13px;

              break-inside: avoid;
            }

            .payment-title {
              margin: 0 0 10px;

              font-size: 13px;
            }

            .payment-text {
              margin: 6px 0;

              font-size: 11px;

              line-height: 1.4;
            }

            .payment-highlight {
              display: block;

              margin: 7px 0;

              font-size: 14px;
            }

            .signature-area {
              flex: 1;

              min-height: 100px;

              display: flex;

              align-items: flex-end;
              justify-content: center;

              padding-bottom: 25px;
            }

            .doctor-signature {
              text-align: center;

              font-family: Georgia, serif;

              font-size: 13px;

              font-weight: bold;
            }

            .footer {
              display: flex;

              justify-content: space-between;

              gap: 20px;

              border-top: 2px solid #111;

              padding-top: 10px;

              font-family: Georgia, serif;

              font-size: 9px;

              line-height: 1.4;
            }

            .footer-addresses,
            .footer-contact {
              display: flex;
              flex-direction: column;
            }

            .footer-contact {
              text-align: right;
            }

            @media print {
              body {
                width: 210mm;
                min-height: 297mm;
              }

              .print-page {
                margin: 0;
              }
            }
          </style>
        </head>

        <body>
          ${reportHtml}

          <script>
            window.onload = function() {
              window.print();

              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <>
      <PrintButton onClick={handlePrint}>
        Imprimir Orçamento
      </PrintButton>

      <div ref={reportRef}>
        <PrintPage className="print-page">

          <Header className="header">
            <LogoArea className="logo-area">

              <Logo className="logo">
                V
              </Logo>

              <DoctorInfo>
                <DoctorName className="doctor-name">
                  DR. VICTOR GUIDA FRANÇA
                </DoctorName>

                <Specialty className="specialty">
                  CIRURGIA PLÁSTICA

                  <span>
                    CRM: 145760
                  </span>
                </Specialty>
              </DoctorInfo>

            </LogoArea>
          </Header>

          <ReportTitle className="report-title">
            ORÇAMENTO DE PROCEDIMENTO CIRÚRGICO
          </ReportTitle>

          <PatientSection className="patient-section">

            <PatientRow className="patient-row">
              <Label className="label">
                Paciente:
              </Label>

              <Value>
                {data.patientName}
              </Value>
            </PatientRow>

            <PatientRow className="patient-row">
              <Label className="label">
                Procedimento:
              </Label>

              <Value>
                {data.surgery.name}
              </Value>
            </PatientRow>

            <PatientRow className="patient-row">
              <Label className="label">
                Data da cirurgia:
              </Label>

              <Value>
                {formatDate(
                  data.surgeryDate,
                )}
              </Value>
            </PatientRow>

          </PatientSection>

          <Section className="section">

            <SectionTitle className="section-title">
              Composição do Orçamento
            </SectionTitle>

            <ValuesTable>
              <tbody>

                <tr>
                  <td>Hospital</td>

                  <td>
                    {formatCurrency(
                      data.values.hospital,
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Equipe médica</td>

                  <td>
                    {formatCurrency(
                      data.values.medicalTeam,
                    )}
                  </td>
                </tr>

                {data.surgery.hasProsthesis && (
                  <tr>
                    <td>Prótese</td>

                    <td>
                      {formatCurrency(
                        data.values.prosthesis,
                      )}
                    </td>
                  </tr>
                )}

                {data.surgery.hasLipo && (
                  <tr>
                    <td>Argo</td>

                    <td>
                      {formatCurrency(
                        data.values.argo,
                      )}
                    </td>
                  </tr>
                )}

              </tbody>
            </ValuesTable>

            <TotalContainer className="total-container">
              <TotalLabel>
                Valor total
              </TotalLabel>

              <TotalValue>
                {formatCurrency(
                  data.values.total,
                )}
              </TotalValue>
            </TotalContainer>

          </Section>

          <Section className="section">

            <SectionTitle className="section-title">
              Condições de Pagamento
            </SectionTitle>

            <PaymentGrid className="payment-grid">

              <PaymentCard className="payment-card">

                <PaymentTitle className="payment-title">
                  Entrada + Parcelamento
                </PaymentTitle>

                <PaymentText className="payment-text">
                  Entrada de{" "}
                  {
                    data.payment.downPayment
                      .percentage
                  }
                  %
                </PaymentText>

                <PaymentHighlight className="payment-highlight">
                  {formatCurrency(
                    data.payment.downPayment
                      .value,
                  )}
                </PaymentHighlight>

                <PaymentText className="payment-text">
                  Saldo restante em{" "}
                  {
                    data.payment.downPayment
                      .installments
                  }
                  x sem juros:
                </PaymentText>

                <PaymentHighlight className="payment-highlight">
                  {
                    data.payment.downPayment
                      .installments
                  }
                  x de{" "}
                  {formatCurrency(
                    data.payment.downPayment
                      .installmentValue,
                  )}
                </PaymentHighlight>

              </PaymentCard>

              <PaymentCard className="payment-card">

                <PaymentTitle className="payment-title">
                  Pagamento à Vista
                </PaymentTitle>

                <PaymentText className="payment-text">
                  5% de desconto sobre o valor
                  da equipe médica.
                </PaymentText>

                <PaymentText className="payment-text">
                  Desconto:
                </PaymentText>

                <PaymentHighlight className="payment-highlight">
                  {formatCurrency(
                    data.payment.cash
                      .medicalTeamDiscount,
                  )}
                </PaymentHighlight>

                <PaymentText className="payment-text">
                  Valor total à vista:
                </PaymentText>

                <PaymentHighlight className="payment-highlight">
                  {formatCurrency(
                    data.payment.cash.total,
                  )}
                </PaymentHighlight>

              </PaymentCard>

              <PaymentCard className="payment-card">

                <PaymentTitle className="payment-title">
                  Parcelamento sem Entrada
                </PaymentTitle>

                <PaymentText className="payment-text">
                  Valor parcelável em{" "}
                  {
                    data.payment
                      .fullInstallments
                      .installments
                  }
                  x sem juros:
                </PaymentText>

                <PaymentHighlight className="payment-highlight">
                  {
                    data.payment
                      .fullInstallments
                      .installments
                  }
                  x de{" "}
                  {formatCurrency(
                    data.payment
                      .fullInstallments
                      .installmentValue,
                  )}
                </PaymentHighlight>

              </PaymentCard>

            </PaymentGrid>

            <PaymentText className="payment-text">
              * O valor do hospital não está
              incluso nos parcelamentos e deverá
              ser pago separadamente.
            </PaymentText>

          </Section>

          <SignatureArea className="signature-area">

            <DoctorSignature className="doctor-signature">
              Dr. Victor Guida França
              <br />
              CRM-SP 145760
            </DoctorSignature>

          </SignatureArea>

          <Footer className="footer">

            <FooterAddresses className="footer-addresses">
              <span>
                Pirajuí - SP | Rua Vol.
                Benedito Pimenta, 265 - Centro
              </span>

              <span>
                Garça - SP | Av. Dr. Rafael
                Paes de Barros, 168 - Centro
              </span>

              <span>
                Promissão - SP | Av.
                Bandeirantes, 134 - Centro
              </span>

              <span>
                Lins - SP | Rua Marques de
                Tamandaré, 598 - Vila Alta
              </span>
            </FooterAddresses>

            <FooterContact className="footer-contact">
              <span>
                (14) 98127-0529
              </span>

              <span>
                @drvictorguidafranca
              </span>

              <span>
                www.drvictorguidafranca.com.br
              </span>
            </FooterContact>

          </Footer>

        </PrintPage>
      </div>
    </>
  );
}