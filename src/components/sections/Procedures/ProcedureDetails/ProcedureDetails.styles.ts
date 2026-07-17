"use client";

import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 50px auto;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,.06);
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
  color:#b27a45;

  font-size:14px;

  font-weight:600;

  margin-bottom:15px;
`;


export const Title = styled.h1`
  font-family: serif;

  font-size:48px;

  font-weight:500;

  color:#252525;

  margin-bottom:18px;


  @media(max-width:700px){
    font-size:36px;
  }
`;


export const Description = styled.p`
  color:#666;

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

  border-top:1px solid #eee;
  border-bottom:1px solid #eee;

  padding:25px 60px;


  @media(max-width:800px){
    grid-template-columns:1fr 1fr;
  }
`;


export const InfoItem = styled.div`
  display:flex;

  flex-direction:column;

  gap:6px;

  color:#777;

  span{
    color:#222;

    font-weight:600;
  }
`;



export const Tabs = styled.div`
  display:flex;

  gap:45px;

  padding:20px 60px;

  border-bottom:1px solid #eee;

  overflow:auto;
`;


export const Tab = styled.button`
  background:none;

  border:none;

  cursor:pointer;

  color:#444;

  font-size:15px;

  white-space:nowrap;

  &:first-child{
    color:#a86f38;
    border-bottom:2px solid #a86f38;
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
  font-size:20px;

  margin-bottom:20px;
`;


export const Text = styled.p`
  color:#666;

  line-height:1.8;

  margin-bottom:25px;
`;



export const List = styled.ul`
  display:grid;

  grid-template-columns:repeat(3,1fr);

  gap:15px;

  background:#faf5ef;

  padding:25px;

  border-radius:15px;

  list-style:none;


  @media(max-width:700px){
    grid-template-columns:1fr;
  }
`;


export const ListItem = styled.li`
  color:#555;

  &:before{
    content:"✓";

    color:#b27a45;

    margin-right:8px;
  }
`;



export const Aside = styled.aside`
  background:#faf8f5;

  border-radius:18px;

  padding:30px;

  height:max-content;
`;


export const Button = styled.button`
  width:100%;

  padding:15px;

  border-radius:30px;

  border:none;

  background:#a96d36;

  color:white;

  font-size:16px;

  cursor:pointer;

  margin-top:20px;


  &:hover{
    opacity:.9;
  }
`;