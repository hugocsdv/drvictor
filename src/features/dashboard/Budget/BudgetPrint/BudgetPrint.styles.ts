"use client";

import styled from "styled-components";

export const PrintPage = styled.div`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 15mm 18mm 12mm;
  box-sizing: border-box;

  background: ${({ theme }) =>
    theme.colors.surface};

  color: ${({ theme }) =>
    theme.colors.text};

  font-family: ${({ theme }) =>
    theme.fonts.body};

  display: flex;
  flex-direction: column;

  @media screen {
    margin-top: 40px;
    margin-bottom: 40px;

    box-shadow: ${({ theme }) =>
      theme.shadow.md};
  }

  @media print {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 12mm 15mm;

    box-shadow: none;

    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 38px;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Logo = styled.div`
  width: 70px;
  height: 85px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: serif;
  font-size: 70px;
  font-weight: 700;

  color: ${({ theme }) =>
    theme.colors.primary};
`;

export const DoctorInfo = styled.div`
  text-align: center;
`;

export const DoctorName = styled.h1`
  margin: 0;

  font-family: serif;
  font-size: 27px;
  font-weight: 600;

  letter-spacing: 1px;

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const Specialty = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;

  margin-top: 4px;

  font-family: serif;
  font-size: 17px;
  font-weight: 600;
`;

export const ReportTitle = styled.h2`
  margin: 10px 0 30px;

  text-align: center;

  font-family: serif;
  font-size: 19px;
  font-weight: 700;

  text-decoration: underline;
`;

export const PatientSection = styled.div`
  margin-bottom: 28px;
`;

export const PatientRow = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 8px;

  font-size: 15px;
`;

export const Label = styled.strong`
  min-width: 130px;
`;

export const Value = styled.span`
  flex: 1;
`;

export const Section = styled.section`
  margin-bottom: 26px;

  break-inside: avoid;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 12px;

  padding-bottom: 6px;

  border-bottom: 1px solid
    ${({ theme }) => theme.colors.border};

  font-size: 16px;
`;

export const ValuesTable = styled.table`
  width: 100%;

  border-collapse: collapse;

  font-size: 14px;

  td {
    padding: 7px 4px;

    border-bottom: 1px solid
      ${({ theme }) =>
        theme.colors.border};
  }

  td:last-child {
    text-align: right;
    font-weight: 600;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;
  padding-top: 10px;
`;

export const TotalLabel = styled.strong`
  font-size: 16px;
`;

export const TotalValue = styled.strong`
  font-size: 18px;

  color: ${({ theme }) =>
    theme.colors.primary};
`;

export const PaymentGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 10px;

  margin-bottom: 12px;
`;

export const PaymentCard = styled.div`
  padding: 12px;

  border: 1px solid
    ${({ theme }) => theme.colors.border};

  border-radius: 8px;

  break-inside: avoid;
`;

export const PaymentTitle = styled.h4`
  margin: 0 0 8px;

  font-size: 13px;
  font-weight: 700;
`;

export const PaymentText = styled.p`
  margin: 5px 0;

  font-size: 11px;
  line-height: 1.4;
`;

export const PaymentHighlight = styled.strong`
  display: block;

  margin: 5px 0;

  font-size: 14px;

  color: ${({ theme }) =>
    theme.colors.primary};
`;

export const SignatureArea = styled.div`
  flex: 1;

  min-height: 100px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding-bottom: 20px;
`;

export const DoctorSignature = styled.div`
  text-align: center;

  font-family: serif;
  font-size: 13px;
  font-weight: 600;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding-top: 10px;

  border-top: 2px solid
    ${({ theme }) => theme.colors.text};

  font-family: serif;
  font-size: 10px;
  line-height: 1.35;
`;

export const FooterAddresses = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const PrintButton = styled.button`
  padding: 14px 28px;
  border: none;

  border-radius: ${({ theme }) =>
    theme.radius.pill};

  background: ${({ theme }) =>
    theme.colors.primary};

  color: ${({ theme }) =>
    theme.colors.surface};

  font-family: ${({ theme }) =>
    theme.fonts.body};

  font-size: ${({ theme }) =>
    theme.fontSize.md};

  font-weight: 600;

  cursor: pointer;

  margin-bottom: 24px;

  @media print {
    display: none;
  }
`;