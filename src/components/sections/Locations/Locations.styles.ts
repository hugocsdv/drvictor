import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  background: ${({ theme }) => theme.colors.primary};

  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.div`
  max-width: 1280px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 260px 1fr;

  gap: ${({ theme }) => theme.spacing.xl};

  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.div`
  color: ${({ theme }) => theme.colors.surface};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: ${({ theme }) => theme.fontSize.h3};

  font-weight: 300;

  line-height: 1;

  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};

  line-height: 1.5;

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Button = styled.a`
  display: inline-flex;

  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.sm};

  text-decoration: none;
`;

export const Cards = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LocationCard = styled.div`
  width: 150px;

  background: ${({ theme }) => theme.colors.surface};

  border-radius: ${({ theme }) => theme.radius.sm};

  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;

  height: 100px;

  object-fit: cover;
`;

export const CardTitle = styled.span`
  display: block;

  padding: ${({ theme }) => theme.spacing.sm};

  font-size: ${({ theme }) => theme.fontSize.xs};

  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`;

export const AdministrativeCard = styled.div`
  width: 280px;

  height: 140px;

  display: flex;

  background: rgba(255, 255, 255, 0.15);

  border: 1px solid rgba(255, 255, 255, 0.4);

  border-radius: ${({ theme }) => theme.radius.sm};

  overflow: hidden;
`;

export const AdministrativeImage = styled.img`
  width: 110px;

  object-fit: cover;
`;

export const AdministrativeText = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: ${({ theme }) => theme.spacing.sm};

  color: ${({ theme }) => theme.colors.surface};

  font-size: ${({ theme }) => theme.fontSize.xs};
`;
