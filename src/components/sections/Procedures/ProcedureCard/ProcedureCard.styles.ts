"use client";

import styled from "styled-components";

export const Card = styled.article<{ $selected: boolean }>`
  width: 220px;

  min-width: 220px;

  border-radius: 18px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.complement};

  cursor: pointer;

  border: 1px solid
    ${({ $selected, theme }) =>
      $selected ? theme.colors.primary : "#ECECEC"};

  transition: all .25s ease;

  box-shadow: ${({ $selected }) =>
    $selected
      ? "0 10px 30px rgba(0,0,0,.08)"
      : "0 3px 10px rgba(0,0,0,.04)"};

  &:hover {
    transform: translateY(-6px);

    box-shadow: 0 15px 40px rgba(0,0,0,.12);
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;

  height: 240px;

  overflow: hidden;

  img {
    transition: transform .35s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

export const IconCircle = styled.div`
  position: absolute;

  left: 20px;

  bottom: -20px;

  width: 44px;

  height: 44px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 4px solid white;

  z-index: 2;
`;

export const Content = styled.div`
  padding: 32px 20px 20px;
`;

export const Title = styled.h3`
  font-size: 20px;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.textSecondary};

  line-height: 1.6;
`;