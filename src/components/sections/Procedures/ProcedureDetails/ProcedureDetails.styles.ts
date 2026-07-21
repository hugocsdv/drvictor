"use client";

import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;

  margin: 50px auto;

  background: ${({ theme }) => theme.colors.surface};

  border-radius: ${({ theme }) => theme.radius.lg};

  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadow.md};
`;

export const Hero = styled.div`
  display: grid;

  grid-template-columns: 1fr 480px;

  min-height: 330px;

  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  padding: 45px 60px;

  display:flex;

  flex-direction:column;

  justify-content:center;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSize.sm};

  font-weight:600;

  margin-bottom:15px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: ${({ theme }) => theme.fontSize.h1};

  font-weight:500;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom:18px;


  @media(max-width:700px){
    font-size:36px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};

  line-height:1.8;

  max-width:600px;
`;

export const ImageContainer = styled.div`
  position:relative;

  min-height:330px;
`;

export const InfoGrid = styled.div`
  display:grid;

  grid-template-columns:repeat(4,1fr);

  border-top:1px solid ${({ theme }) => theme.colors.border};

  border-bottom:1px solid ${({ theme }) => theme.colors.border};

  padding:25px 60px;


  @media(max-width:800px){
    grid-template-columns:1fr 1fr;
  }
`;

export const InfoItem = styled.div`
  display:flex;

  flex-direction:column;

  gap:6px;

  color:${({ theme }) => theme.colors.textSecondary};


  span{
    color:${({ theme }) => theme.colors.text};

    font-weight:600;
  }
`;

export const Tabs = styled.div`
  display:flex;

  gap:45px;

  padding:20px 60px;

  border-bottom:1px solid ${({ theme }) => theme.colors.border};

  overflow:auto;
`;

export const Tab = styled.button`
  background:none;

  border:none;

  cursor:pointer;

  color:${({ theme }) => theme.colors.textSecondary};

  font-size:${({ theme }) => theme.fontSize.sm};

  white-space:nowrap;

  transition:${({ theme }) => theme.transition.default};


  &:hover{
    color:${({ theme }) => theme.colors.primary};
  }


  &:first-child{
    color:${({ theme }) => theme.colors.primary};

    border-bottom:2px solid ${({ theme }) => theme.colors.primary};

    padding-bottom:15px;
  }
`;

export const Body = styled.div`
  display:grid;

  grid-template-columns:1fr 350px;

  gap:40px;

  padding:40px 60px;


  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

export const SectionTitle = styled.h3`
  font-size:${({ theme }) => theme.fontSize.lg};

  color:${({ theme }) => theme.colors.text};

  margin-bottom:20px;
`;

export const Text = styled.p`
  color:${({ theme }) => theme.colors.textSecondary};

  line-height:1.8;

  margin-bottom:25px;
`;

export const List = styled.ul`
  display:grid;

  grid-template-columns:repeat(3,1fr);

  gap:15px;

  background:${({ theme }) => theme.colors.complement};

  padding:25px;

  border-radius:${({ theme }) => theme.radius.md};

  list-style:none;


  @media(max-width:700px){
    grid-template-columns:1fr;
  }
`;

export const ListItem = styled.li`
  color:${({ theme }) => theme.colors.textSecondary};


  &:before{
    content:"✓";

    color:${({ theme }) => theme.colors.primary};

    margin-right:8px;
  }
`;

export const Aside = styled.aside`
  background:${({ theme }) => theme.colors.background};

  border-radius:${({ theme }) => theme.radius.md};

  padding:30px;

  height:max-content;

  border:1px solid ${({ theme }) => theme.colors.border};
`;

export const Button = styled.button`
  width:100%;

  padding:15px;

  border-radius:${({ theme }) => theme.radius.pill};

  border:none;

  background:${({ theme }) => theme.colors.primary};

  color:${({ theme }) => theme.colors.surface};

  font-size:${({ theme }) => theme.fontSize.md};

  cursor:pointer;

  margin-top:20px;

  transition:${({ theme }) => theme.transition.default};


  &:hover{
    opacity:.9;
  }
`;