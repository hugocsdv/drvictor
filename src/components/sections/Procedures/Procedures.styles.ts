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

  font-size: ${({ theme }) => theme.fontSize.h2};

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

  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};

  border-radius: ${({ theme }) => theme.radius.md};

  overflow: hidden;

  text-align: center;

  position: relative;

  border: 1px solid ${({ theme }) => theme.colors.border};

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-6px);

    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const ImageBox = styled.div`
  width: 100%;

  height: 160px;

  position: relative;

  overflow: hidden;

  img {
    transition: ${({ theme }) => theme.transition.default};
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const IconCircle = styled.div`
  position: absolute;

  width: 52px;

  height: 52px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.surface};

  bottom: -26px;

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.xl};

  z-index: 2;
`;

export const Content = styled.div`
  padding: 45px 15px 25px;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 10px;

  font-weight: 500;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};

  line-height: 1.5;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ButtonContainer = styled.div`
  display: flex;

  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const LinkButton = styled.button`
  padding: 12px 35px;

  border-radius: ${({ theme }) => theme.radius.pill};

  border: 1px solid ${({ theme }) => theme.colors.primary};

  background: transparent;

  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  margin-top: 5px;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.surface};
  }
`;