"use client";

import styled from "styled-components";

export const Container = styled.section`
  max-width: 1050px;

  margin: 40px auto;

  background: ${({ theme }) => theme.colors.surface};

  border-radius: ${({ theme }) => theme.radius.lg};

  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadow.md};
`;


export const Hero = styled.div`
  display: grid;

  grid-template-columns: 1fr 380px;

  min-height: 220px;


  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;


export const HeroContent = styled.div`
  padding:32px 40px;

  display:flex;

  flex-direction:column;

  justify-content:center;
`;


export const Category = styled.span`
  color:${({theme})=>theme.colors.primary};

  font-size:13px;

  font-weight:600;

  margin-bottom:10px;
`;


export const Title = styled.h1`
  font-family:${({theme})=>theme.fonts.heading};

  font-size:${({theme})=>theme.fontSize.h2};

  font-weight:300;

  color:${({theme})=>theme.colors.text};

  margin-bottom:12px;


  @media(max-width:700px){
    font-size:32px;
  }
`;


export const Description = styled.p`
  color:${({theme})=>theme.colors.textSecondary};

  line-height:1.6;

  max-width:480px;

  font-size:15px;
`;


export const ImageContainer = styled.div`
  position:relative;

  min-height:220px;
`;


export const InfoGrid = styled.div`
  display:grid;

  grid-template-columns:repeat(4,1fr);

  border-top:1px solid ${({theme})=>theme.colors.border};

  border-bottom:1px solid ${({theme})=>theme.colors.border};

  padding:18px 40px;


  @media(max-width:800px){
    grid-template-columns:1fr 1fr;
  }
`;


export const InfoItem = styled.div`
  display:flex;

  flex-direction:column;

  gap:4px;

  font-size:14px;

  color:${({theme})=>theme.colors.textSecondary};


  span{
    color:${({theme})=>theme.colors.text};

    font-weight:600;
  }
`;


export const Tabs = styled.div`
  display:flex;

  gap:30px;

  padding:16px 40px;

  border-bottom:1px solid ${({theme})=>theme.colors.border};

  overflow:auto;
`;


export const Tab = styled.button`
  background:none;

  border:none;

  cursor:pointer;

  color:${({theme})=>theme.colors.textSecondary};

  font-size:${({theme})=>theme.fontSize.sm};

  white-space:nowrap;

  transition:${({theme})=>theme.transition.default};


  &:hover{
    color:${({theme})=>theme.colors.primary};
  }


  &:first-child{
    color:${({theme})=>theme.colors.primary};

    border-bottom:2px solid ${({theme})=>theme.colors.primary};

    padding-bottom:10px;
  }
`;


export const Body = styled.div`
  display:grid;

  grid-template-columns:1fr 280px;

  gap:30px;

  padding:32px 40px;


  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;


export const SectionTitle = styled.h3`
  font-size:20px;

  color:${({theme})=>theme.colors.text};

  margin-bottom:14px;
`;


export const Text = styled.p`
  color:${({theme})=>theme.colors.textSecondary};

  line-height:1.7;

  font-size:15px;

  margin-bottom:20px;
`;


export const List = styled.ul`
  display:grid;

  grid-template-columns:repeat(3,1fr);

  gap:12px;

  background:${({theme})=>theme.colors.complement};

  padding:18px;

  border-radius:${({theme})=>theme.radius.md};

  list-style:none;


  @media(max-width:700px){
    grid-template-columns:1fr;
  }
`;


export const ListItem = styled.li`
  color:${({theme})=>theme.colors.textSecondary};

  font-size:14px;


  &:before{
    content:"✓";

    color:${({theme})=>theme.colors.primary};

    margin-right:8px;
  }
`;


export const Aside = styled.aside`
  background:${({theme})=>theme.colors.background};

  border-radius:${({theme})=>theme.radius.md};

  padding:22px;

  height:max-content;

  border:1px solid ${({theme})=>theme.colors.border};
`;


export const Button = styled.button`
  width:100%;

  padding:12px;

  border-radius:${({theme})=>theme.radius.pill};

  border:none;

  background:${({theme})=>theme.colors.primary};

  color:${({theme})=>theme.colors.surface};

  font-size:15px;

  cursor:pointer;

  margin-top:15px;

  transition:${({theme})=>theme.transition.default};


  &:hover{
    opacity:.9;
  }
`;