"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};

  display: flex;
  justify-content: center;

  padding: 12px;

  position: relative;
`;

export const Wrapper = styled.div`
  width: min(1400px, 90%);

  background: ${({ theme }) => theme.colors.background};

  border-radius: ${({ theme }) => theme.radius.lg};

  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
export const Icon = styled.div`
  width: 48px;

  height: 48px;

  flex-shrink: 0;

  border-radius: ${({ theme }) => theme.radius.pill};

  display: flex;

  align-items: center;

  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 26px;

  transition: ${({ theme }) => theme.transition.default};
`;

export const Number = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};

  font-size: ${({ theme }) => theme.fontSize.md};

  color: ${({ theme }) => theme.colors.text};

  font-weight: 700;

  margin: 0;

  transition: ${({ theme }) => theme.transition.default};
`;

export const Card = styled.div`
  display: flex;

  align-items: flex-start;

  gap: ${({ theme }) => theme.spacing.md};

  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};

  position: relative;

  border-right: 1px solid ${({ theme }) => theme.colors.border};

  transition: ${({ theme }) => theme.transition.default};

  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  &:hover {
    transform: translateY(-5px);

    background: ${({ theme }) => theme.colors.surface};

    border-radius: ${({ theme }) => theme.radius.md};

    box-shadow: ${({ theme }) => theme.shadow.sm};

    ${Icon} {
      color: ${({ theme }) => theme.colors.secondary};

      transform: scale(1.1);
    }

    ${Number} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-right: none;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: ${({ theme }) => theme.fontSize.sm};

  line-height: 20px;

  margin: 0;
`;
