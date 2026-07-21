import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => {
    return theme.colors.secondary;
  }};
  gap: ${({ theme }) => theme.spacing.xxxl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding:${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media(max-width:${({ theme }) => theme.breakpoints.tablet}){
    grid-template-columns:1fr;
    text-align:center;
  }
`;

export const Column = styled.div`
  display:flex;
  flex-direction:row;
  gap:${({ theme }) => theme.spacing.md};
  align-items: center;
`;

export const Label = styled.span`
  font-size:${({ theme }) => theme.fontSize.sm};
  color:${({ theme }) => theme.colors.textSecondary};
`;

export const Value = styled.a`
  font-size:${({ theme }) => theme.fontSize.xl};
  color:${({ theme }) => theme.colors.primary};
  font-weight:600;
  text-decoration:none;
  transition:${({ theme }) => theme.transition.default};

  &:hover{
      opacity:.8;
  }
`;

export const Socials = styled.div`
  display:flex;
  align-items:center;
  gap:${({ theme }) => theme.spacing.xl};

  @media(max-width:${({ theme }) => theme.breakpoints.tablet}){
      justify-content:center;
  }
`;

export const Right = styled.div`
  display:flex;
  justify-content:flex-end;

  @media(max-width:${({ theme }) => theme.breakpoints.tablet}){
      justify-content:center;
  }
`;