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

export const Wrapper = styled.div<{
  $scrolled: boolean;
}>`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 18px 28px;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255,255,255,.85)" : "transparent"};

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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
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

export const MenuButton = styled.button`
  display: none;

  background: none;

  border: none;

  font-size: 28px;

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
