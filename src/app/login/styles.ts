"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: radial-gradient(circle at top right, rgba(0,0,0,0.02), transparent);
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 440px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  flex-direction: column;
`;

export const BackHomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  opacity: 0.7;
  margin-bottom: 24px;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 28px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;