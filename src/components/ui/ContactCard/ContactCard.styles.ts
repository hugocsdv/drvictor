import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    transform: translateY(-2px);
  }

  &:hover span:last-child {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWrapper = styled.div`
  width: 52px;
  height: 52px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.complement};
  color: ${({ theme }) => theme.colors.primary};

  font-size: 22px;

  transition: ${({ theme }) => theme.transition.default};

  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Value = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};

  transition: ${({ theme }) => theme.transition.default};
`;