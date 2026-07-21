import styled from "styled-components";


export const Card = styled.div`

  display:flex;
  flex-direction:column;

  gap:${({theme})=>theme.spacing.md};

`;


export const Title = styled.h3`

  font-family:${({theme})=>theme.fonts.heading};

  color:${({theme})=>theme.colors.surface};

  font-size:${({theme})=>theme.fontSize.lg};

  font-weight:600;

  text-transform:uppercase;

`;


export const Info = styled.div`

  display:flex;

  flex-direction:column;

  gap:${({theme})=>theme.spacing.md};

`;


export const Item = styled.div`

  display:flex;

  align-items:flex-start;

  gap:${({theme})=>theme.spacing.sm};

`;


export const Icon = styled.span`

  color:${({theme})=>theme.colors.surface};

  font-size:${({theme})=>theme.fontSize.md};

  margin-top:3px;

`;


export const Text = styled.span`

  color:${({theme})=>theme.colors.surface};

  font-size:${({theme})=>theme.fontSize.sm};
  line-height:1.6;

`;