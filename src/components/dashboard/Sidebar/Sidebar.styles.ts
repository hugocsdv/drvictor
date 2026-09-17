"use client";

import styled from "styled-components";

export const Aside = styled.aside`
  width: 260px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 8px;

  span {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.surface : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primary : "rgba(0, 0, 0, 0.04)"};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: #e53e3e;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: rgba(229, 62, 62, 0.08);
  }
`;