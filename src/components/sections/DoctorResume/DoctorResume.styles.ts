"use client";

import styled from "styled-components";

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  display: grid;
  grid-template-columns: 450px 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 620px;

  overflow: hidden;

  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};

  img {
    transition: transform ${({ theme }) => theme.transition.default};
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 400px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  letter-spacing: 3px;

  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 500;
  line-height: 1.15;

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.9;

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Credentials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  margin: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Credential = styled.div`
  flex: 1;

  padding: ${({ theme }) => theme.spacing.lg};

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.md};

  box-shadow: ${({ theme }) => theme.shadow.sm};

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const Number = styled.h3`
  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: 600;

  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const CTAButton = styled.button`
  align-self: flex-start;

  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};

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
`;