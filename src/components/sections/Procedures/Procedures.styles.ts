"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 80px 7%;

  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  text-align: center;

  margin-bottom: 50px;
`;

export const Subtitle = styled.span`
  display: block;

  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.lg};

  letter-spacing: 2px;

  text-transform: uppercase;

  font-weight: 600;

  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: ${({ theme }) => theme.fontSize.md};

  color: ${({ theme }) => theme.colors.text};

  font-weight: 500;

  margin-bottom: 15px;
`;

export const DescriptionHeader = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(6, 1fr);

  gap: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.article`
  background: #faf8f5;

  border-radius: 8px;

  overflow: hidden;

  text-align: center;

  position: relative;

  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const ImageBox = styled.div`
  width: 100%;

  height: 160px;

  position: relative;

  overflow: hidden;

  img {
    transition: 0.4s;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const IconCircle = styled.div`
  position: absolute;

  width: 52px;

  height: 52px;

  border-radius: 50%;

  background: white;

  bottom: -26px;

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid #eee;

  color: #b69a7d;

  font-size: 22px;

  z-index: 2;
`;

export const Content = styled.div`
  padding: 45px 15px 25px;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: 18px;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 10px;

  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 13px;

  line-height: 1.5;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ButtonContainer = styled.div`
  display: flex;

  justify-content: center;

  margin-top: 40px;
`;

export const LinkButton = styled.button`
  padding: 12px 35px;

  border-radius: 30px;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  background: transparent;

  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
  margin-top: 5px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    color: white;
  }
`;
