"use client";

import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 32px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  max-width: 800px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
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
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SurgeriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SurgeryCard = styled.div`
  background: rgba(0, 0, 0, 0.015);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SurgeryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SurgeryTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #e53e3e;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: rgba(229, 62, 62, 0.08);
  }
`;

export const AddSurgeryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px dashed ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.default};
  align-self: flex-start;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 42px;
  padding: 0 12px;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  background: #ffffff;
  color: #111827;

  font-size: 14px;

  outline: none;

  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2563eb;
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 8px;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;
