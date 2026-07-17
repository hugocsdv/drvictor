"use client";

import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 18px;

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

  border-radius: 50%;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  background: white;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 22px;

  cursor: pointer;

  flex-shrink: 0;

  transition: .2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;