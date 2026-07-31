"use client";

import styled from "styled-components";

interface ButtonProps {
  $fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};

  padding: ${({ theme }) =>
    `${theme.spacing.md} ${theme.spacing.xl}`};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};

  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  cursor: pointer;
  text-decoration: none;

  transition: ${({ theme }) => theme.transition.default};

  box-shadow: ${({ theme }) => theme.shadow.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
    transform: none;
  }
`;