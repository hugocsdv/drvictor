"use client";

import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  flex-wrap: wrap;

  margin-bottom: 40px;
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 12px 22px;

  border-radius: 999px;

  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : "#E5E5E5"};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "#FFF"};

  color: ${({ $active, theme }) =>
    $active ? "#FFF" : theme.colors.text};

  font-size: 15px;

  font-weight: 500;

  cursor: pointer;

  transition: all .25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $active, theme }) =>
      $active ? "#FFF" : theme.colors.primary};
  }
`;