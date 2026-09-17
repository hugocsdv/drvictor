"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.4;
`;