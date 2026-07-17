"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavigationButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  background: #fff;

  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  transition: all .25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  &:disabled {
    opacity: .4;
    cursor: not-allowed;
  }
`;