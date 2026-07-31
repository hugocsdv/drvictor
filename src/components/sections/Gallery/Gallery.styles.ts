"use client";

import styled from "styled-components";

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 3px;
  font-weight: 700;
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.8;
`;

export const Grid = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-auto-rows: 230px;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  img {
    transition: transform ${({ theme }) => theme.transition.default};
  }

  &:hover img {
    transform: scale(1.08);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const LargeCard = styled(Card)`
  grid-column: span 1;
`;

export const SmallCard = styled(Card)``;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: flex-end;

  padding: ${({ theme }) => theme.spacing.lg};

  opacity: 0;

  transition: ${({ theme }) => theme.transition.default};

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, .75),
    rgba(0, 0, 0, 0)
  );
`;

export const Procedure = styled.h3`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const VideoCard = styled(LargeCard)`
  position: relative;
  overflow: hidden;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
