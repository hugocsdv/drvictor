"use client";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;

  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin: 8px 0 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Section = styled.section`
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    minmax(0, 1fr)
  );
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 0 16px;

  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;

  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};

  outline: none;

  transition: ${({ theme }) => theme.transition.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.45;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 46px;
  padding: 0 16px;

  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};

  outline: none;
  cursor: pointer;

  transition: ${({ theme }) => theme.transition.default};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 24px 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;

  accent-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  );
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentCard = styled.div<{
  $selected: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  min-height: 230px;
  padding: 20px;

  background: ${({ theme }) => theme.colors.surface};

  border: 2px solid
    ${({ theme, $selected }) =>
      $selected
        ? theme.colors.primary
        : theme.colors.border};

  border-radius: 16px;

  box-shadow: ${({ theme, $selected }) =>
    $selected ? theme.shadow.md : theme.shadow.sm};

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const PaymentTitle = styled.h3`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

export const PaymentDescription = styled.p`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};

  line-height: 1.5;

  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const PaymentValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Summary = styled.div`
  padding: 24px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;

  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const SummaryTitle = styled.h2`
  margin: 0 0 20px;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  padding: 8px 0;
`;

export const SummaryLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};

  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const SummaryValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text};
`;

export const Divider = styled.hr`
  margin: 16px 0;

  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

export const TotalLabel = styled.strong`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

export const TotalValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 8px;

  @media (max-width: 768px) {
    justify-content: stretch;
  }
`;

export const PrimaryButton = styled.button`
  min-width: 180px;
  height: 48px;

  padding: 0 28px;

  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;