import styled from "styled-components";

export const Button = styled.a`
  width: 52px;
  height: 52px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};

  border: 2px solid ${({ theme }) => theme.colors.primary};

  font-size: 22px;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};

    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }
`;