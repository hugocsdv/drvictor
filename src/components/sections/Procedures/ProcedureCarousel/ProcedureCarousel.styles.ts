"use client";

import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.lg};
`;

export const CarouselTrack = styled.div`
  display: flex;

  gap: ${({ theme }) => theme.spacing.md};

  flex: 1;

  overflow-x: auto;

  scroll-behavior: smooth;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavigationButton = styled.button`
  width: 46px;

  height: 46px;

  border-radius: ${({ theme }) => theme.radius.pill};

  border: 1px solid ${({ theme }) => theme.colors.primary};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.xl};

  cursor: pointer;

  flex-shrink: 0;

  transition: ${({ theme }) => theme.transition.default};


  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.surface};
  }
`;