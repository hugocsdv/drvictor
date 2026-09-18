import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import { BudgetPrintData } from "../types/budget.types";

Font.register({
  family: "Tinos",
  fonts: [
    {
      src: "/fonts/Tinos-Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/fonts/Tinos-Bold.ttf",
      fontWeight: 700,
    },
  ],
});

interface BudgetPdfProps {
  data: BudgetPrintData;
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingHorizontal: 48,
    paddingBottom: 95,
    fontFamily: "Times-Roman",
    fontSize: 10,
    color: "#000",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 95,
  },

  logo: {
    width: 72,
    height: 72,
    objectFit: "contain",
  },

  headerInfo: {
    flex: 1,
    alignItems: "center",
    paddingRight: 55,
  },

  doctorName: {
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: 21,
    letterSpacing: 0.4,
  },

  specialtyRow: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },

  specialty: {
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 1,
  },

  crm: {
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: 10,
    marginLeft: 30,
  },

  patientSection: {
    marginBottom: 20,
  },

  patientRow: {
    flexDirection: "row",
    marginBottom: 7,
  },

  patientLabel: {
    fontFamily: "Times-Bold",
    fontSize: 11,
    width: 100,
  },

  patientValue: {
    fontSize: 11,
    flex: 1,
  },

  section: {
    marginTop: 8,
    marginBottom: 16,
  },

  table: {
    borderColor: "#848484",
    borderRadius: 3,
  },

  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.7,
    borderColor: "#a1a1a1",
    minHeight: 24,
    alignItems: "center",
  },

  tableLabel: {
    width: "68%",
    paddingHorizontal: 8,
    fontSize: 9.5,
  },

  tableValue: {
    width: "32%",
    paddingHorizontal: 8,
    fontFamily: "Times-Bold",
    fontSize: 9.5,
    textAlign: "right",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  totalLabel: {
    fontFamily: "Times-Bold",
    fontSize: 11,
  },

  totalValue: {
    fontFamily: "Times-Bold",
    fontSize: 12,
  },

  paymentSection: {
    marginTop: 10,
  },

  paymentTitle: {
    fontFamily: "Times-Bold",
    fontSize: 11,
    marginBottom: 10,
  },

  paymentOption: {
    marginBottom: 10,
  },

  paymentOptionTitle: {
    fontFamily: "Times-Bold",
    fontSize: 9.5,
    marginBottom: 3,
  },

  paymentText: {
    fontSize: 9,
    lineHeight: 1.35,
  },

  paymentHighlight: {
    fontFamily: "Times-Bold",
  },

  observation: {
    fontSize: 8,
    marginTop: 6,
    fontFamily: "Times-Italic",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    padding: 10,
  },

  footerLine: {
    borderTopWidth: 1,
    borderColor: "#000",
    marginBottom: 8,
  },

  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  addresses: {
    width: "60%",
  },

  contacts: {
    width: "35%",
  },

  footerText: {
    fontSize: 13.5,
    marginBottom: 2,
  },

  footerContact: {
    fontSize: 13.5,
    marginBottom: 3,
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
  
  },

  contactIcon: {
    width: 11,
    height: 11,
    marginRight: 2,
    objectFit: "contain",
  },
});

const currency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const formatDate = (date: string) => {
  if (!date) {
    return "-";
  }

  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
};

export default function BudgetPdf({ data }: BudgetPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* CABEÇALHO */}

        <View style={styles.header}>
          <View
            style={[
              styles.logo,
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Image src="/images/icon/logo.jpeg" style={styles.logo} />
          </View>

          <View style={styles.headerInfo}>
            <Text style={styles.doctorName}>DR. VICTOR GUIDA FRANÇA</Text>

            <View style={styles.specialtyRow}>
              <Text style={styles.specialty}>CIRURGIA PLÁSTICA</Text>

              <Text style={styles.crm}>CRM:145760</Text>
            </View>
          </View>
        </View>

        {/* PACIENTE */}

        <View style={styles.patientSection}>
          <View style={styles.patientRow}>
            <Text style={styles.patientLabel}>Nome:</Text>

            <Text style={styles.patientValue}>{data.patientName}</Text>
          </View>

          <View style={styles.patientRow}>
            <Text style={styles.patientLabel}>Data:</Text>

            <Text style={styles.patientValue}>
              {formatDate(data.surgeryDate)}
            </Text>
          </View>

          <View style={styles.patientRow}>
            <Text style={styles.patientLabel}>Procedimento:</Text>

            <Text style={styles.patientValue}>{data.surgery.name}</Text>
          </View>
        </View>

        {/* COMPOSIÇÃO */}

        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>Hospital</Text>

              <Text style={styles.tableValue}>
                {currency(data.values.hospital)}
              </Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>Equipe médica</Text>

              <Text style={styles.tableValue}>
                {currency(data.values.medicalTeam)}
              </Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>Kit pós-cirúrgico</Text>

              <Text style={styles.tableValue}>
                {currency(data.values.postSurgicalKit)}
              </Text>
            </View>

            {data.surgery.hasProsthesis && (
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Prótese</Text>

                <Text style={styles.tableValue}>
                  {currency(data.values.prosthesis)}
                </Text>
              </View>
            )}

            {data.surgery.hasLipo && (
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Argo</Text>

                <Text style={styles.tableValue}>
                  {currency(data.values.argo)}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Valor total</Text>

            <Text style={styles.totalValue}>{currency(data.values.total)}</Text>
          </View>
        </View>

        {/* PAGAMENTO */}

        <View style={styles.paymentSection}>
          <Text style={styles.paymentTitle}>Condições de pagamento</Text>

          <View style={styles.paymentOption}>
            <Text style={styles.paymentOptionTitle}>
              1. Entrada + parcelamento
            </Text>

            <Text style={styles.paymentText}>
              Entrada de {data.payment.downPayment.percentage}% no valor de{" "}
              <Text style={styles.paymentHighlight}>
                {currency(data.payment.downPayment.value)}
              </Text>
              , com o saldo restante em {data.payment.downPayment.installments}x
              de{" "}
              <Text style={styles.paymentHighlight}>
                {currency(data.payment.downPayment.installmentValue)}
              </Text>{" "}
              sem juros no cartão.
            </Text>
          </View>

          <View style={styles.paymentOption}>
            <Text style={styles.paymentOptionTitle}>2. Pagamento à vista</Text>

            <Text style={styles.paymentText}>
              Pagamento à vista com 5% de desconto sobre o valor da equipe
              médica. Desconto de{" "}
              <Text style={styles.paymentHighlight}>
                {currency(data.payment.cash.medicalTeamDiscount)}
              </Text>
              . Valor total à vista:{" "}
              <Text style={styles.paymentHighlight}>
                {currency(data.payment.cash.total)}
              </Text>
              .
            </Text>
          </View>

          <View style={styles.paymentOption}>
            <Text style={styles.paymentOptionTitle}>
              3. Parcelamento sem entrada
            </Text>

            <Text style={styles.paymentText}>
              Valor parcelável em {data.payment.fullInstallments.installments}x
              de{" "}
              <Text style={styles.paymentHighlight}>
                {currency(data.payment.fullInstallments.installmentValue)}
              </Text>{" "}
              sem juros no cartão.
            </Text>
          </View>

          <Text style={styles.observation}>
            * O valor do hospital não está incluso nos parcelamentos e deverá
            ser pago separadamente.
          </Text>
        </View>

        {/* RODAPÉ */}

        <View style={styles.footer}>
          <View style={styles.footerLine} />

          <View style={styles.footerContent}>
            <View style={styles.addresses}>
              <Text style={styles.footerText}>
                • Pirajuí - SP | Rua Vol. Benedito Pimenta, 265 - Centro
              </Text>

              <Text style={styles.footerText}>
                • Garça - SP | Av. Dr. Rafael Paes de Barros, 168 - Centro
              </Text>

              <Text style={styles.footerText}>
                • Lins - SP | Rua Marques de Tamandaré, 598 - Vila Alta
              </Text>
            </View>

            <View style={styles.contacts}>
              <View style={styles.contactRow}>
                <Image
                  src="/images/icon/phone.png"
                  style={styles.contactIcon}
                />

                <Text style={styles.footerContact}>(14) 99612-9133</Text>
              </View>

              <View style={styles.contactRow}>
                <Image
                  src="/images/icon/insta.png"
                  style={styles.contactIcon}
                />

                <Text style={styles.footerContact}>@drvictorguidafranca</Text>
              </View>

              <View style={styles.contactRow}>
                <Image
                  src="/images/icon/globe.png"
                  style={styles.contactIcon}
                />

                <Text style={styles.footerContact}>
                  www.drvictorguidafranca.com.br
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
