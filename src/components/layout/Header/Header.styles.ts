"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  inset: 0 0 auto 0;

  width: 100%;

  display: flex;
  justify-content: center;

  z-index: ${({ theme }) => theme.zIndex?.header ?? 999};

  transition: ${({ theme }) => theme.transition.default};
`;

export const Wrapper = styled.div<{ $scrolled: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 28px;

  background: ${({ $scrolled }) =>
    $scrolled
      ? "rgba(255, 255, 255, 0.85)"
      : "transparent"};

  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(22px)" : "none"};

  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled
      ? `1px solid ${theme.colors.border}`
      : "1px solid transparent"};

  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.shadow.sm
      : "none"};

  transition: ${({ theme }) => theme.transition.default};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 42px;
`;

export const NavItem = styled(Link)`
  position: relative;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;

  text-decoration: none;

  transition: ${({ theme }) => theme.transition.default};

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: ${({ theme }) => theme.colors.primary};

    transition: ${({ theme }) => theme.transition.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: none;

  cursor: pointer;

  padding: 15px 28px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;