"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  z-index: ${({ theme }) => theme.zIndex.header};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
  }
`;

export const Wrapper = styled.div<{ $scrolled: boolean }>`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 18px 28px;

  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.colors.surface}dd` : "transparent"};

  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(22px)" : "none")};

  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : "1px solid transparent"};

  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadow.sm : "none"};

  transition: ${({ theme }) => theme.transition.default};
`;

export const Logo = styled.div`
  display: flex;

  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  position: relative;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.body};

  font-size: ${({ theme }) => theme.fontSize.sm};

  font-weight: 500;

  text-decoration: none;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";

    position: absolute;

    bottom: -8px;

    left: 0;

    width: 0;

    height: 2px;

    background: ${({ theme }) => theme.colors.primary};

    transition: ${({ theme }) => theme.transition.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const LoginButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px; /* Ajuste sutil no padding para melhor proporção */
  
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  letter-spacing: 0.3px; /* Espaçamento de fonte elegante */
  text-decoration: none;
  
  /* Transição suave para todas as propriedades animadas */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    
    /* Levanta levemente e adiciona uma sombra suave para dar profundidade */
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  }

  &:active {
    /* Efeito tátil de clique (afunda o botão de volta) */
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  }
`;

export const ThemeToggle = styled.button<{ $dark: boolean }>`
  width: 46px;

  height: 24px;

  border-radius: ${({ theme }) => theme.radius.pill};

  border: 1px solid white;

  background: ${({ $dark, theme }) => ($dark ? "#1f293738" : "#e5e7eb18")};

  cursor: pointer;

  position: relative;

  padding: 0;

  transition: ${({ theme }) => theme.transition.default};

  span {
    position: absolute;

    top: 1px;

    left: ${({ $dark }) => ($dark ? "24px" : "3px")};

    width: 21px;

    height: 20px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.surface} 90%,
      ${({ theme }) => theme.colors.text} 30%
    );

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 11px;

    line-height: 1;

    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);

    transition: ${({ theme }) => theme.transition.default};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  border: none;

  cursor: pointer;

  padding: 15px 28px;

  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  letter-spacing: 0.3px; /* Espaçamento de fonte elegante */
  text-decoration: none;

  /* Transição suave para todas as propriedades animadas */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.border};;
    color: ${({ theme }) => theme.colors.primary};

    /* Levanta levemente e adiciona uma sombra suave para dar profundidade */
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  }

  &:active {
    /* Efeito tátil de clique (afunda o botão de volta) */
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  }
`;



export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xl};

  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{
  $open: boolean;
}>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;

    padding: ${({ theme }) => theme.spacing.xl};

    background: ${({ theme }) => theme.colors.surface};

    box-shadow: ${({ theme }) => theme.shadow.md};

    display: flex;

    flex-direction: column;

    gap: ${({ theme }) => theme.spacing.lg};

    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-150%)"};

    opacity: ${({ $open }) => ($open ? 1 : 0)};

    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

    transition: ${({ theme }) => theme.transition.default};
  }
`;
