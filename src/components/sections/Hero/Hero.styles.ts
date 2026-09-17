"use client";

import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8%;

  position: relative;
  overflow: hidden;

  background-image:
  linear-gradient(
    100deg,
    ${({theme}) => theme.colors.background} 0%,
    ${({theme}) => theme.colors.background}dd 30%,
    ${({theme}) => theme.colors.background}88 50%,
    transparent 70%
  ),
  url("/header-dr-victor-guida-franca.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

export const BackgroundCircle = styled.div`
  width: 700px;
  height: 700px;

  border-radius: ${({ theme }) => theme.radius.pill};

  position: absolute;

  right: -250px;
  top: -120px;

  background: ${({ theme }) => theme.colors.complement};

  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 400px;
    height: 400px;

    right: -150px;
    top: -80px;
  }
`;

export const HeroContent = styled.div`
  width: 48%;

  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const HeroSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.sm};

  letter-spacing: 3px;

  text-transform: uppercase;

  font-weight: 600;

  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};

  line-height: 1.1;

  color: ${({ theme }) => theme.colors.text};

  margin: ${({ theme }) => theme.spacing.lg} 0;

  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: 1.15;
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};

  line-height: 1.8;

  color: ${({ theme }) => theme.colors.textSecondary};

  max-width: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const Buttons = styled.div`
  display: flex;

  gap: ${({ theme }) => theme.spacing.md};

  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;

    width: 100%;
  }
`;

export const PrimaryButton = styled.button`
  padding: 18px 34px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.surface};

  border: none;

  font-size: ${({ theme }) => theme.fontSize.md};

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-4px);

    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  padding: 18px 34px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.text};

  border: 1px solid ${({ theme }) => theme.colors.border};

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};

    color: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 42%;

  height: 820px;

  position: relative;

  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 80%;

    height: 500px;

    margin-top: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;

    height: 380px;
  }
`;
