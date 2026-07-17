"use client";

import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8%;

  position: relative;
  overflow: hidden;

  background-image:
    linear-gradient(
      100deg,
      rgba(248,246,243,0.98) 0%,
      rgba(248,246,243,0.90) 35%,
      rgba(248,246,243,0.45) 55%,
      rgba(248,246,243,0.05) 65%
    ),
    url("/header-dr-victor-guida-franca.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundCircle = styled.div`
  width: 700px;
  height: 700px;

  border-radius: 50%;


  position: absolute;

  right: -250px;
  top: -120px;

  z-index: 0;
`;


export const HeroContent = styled.div`
  width: 48%;
  z-index: 2;
`;

export const HeroSubtitle = styled.span`
  color: #b48263;

  font-size: 15px;

  letter-spacing: 3px;

  text-transform: uppercase;

  font-weight: 600;
`;

export const HeroTitle = styled.h1`
  font-size: 72px;

  line-height: 82px;

  color: #222;

  margin: 20px 0;

  font-weight: 600;
`;

export const HeroDescription = styled.p`
  font-size: 19px;

  line-height: 34px;

  color: #666;

  max-width: 620px;
`;

export const Buttons = styled.div`
  display: flex;

  gap: 20px;

  margin-top: 45px;
`;

export const PrimaryButton = styled.button`
  padding: 18px 34px;

  border-radius: 999px;

  background: #b48263;

  color: white;

  border: none;

  font-size: 16px;

  cursor: pointer;

  transition: 0.35s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(180, 130, 99, 0.35);
  }
`;

export const SecondaryButton = styled.button`
  padding: 18px 34px;

  border-radius: 999px;

  background: white;

  border: 1px solid #ddd;

  cursor: pointer;

  transition: 0.35s;

  &:hover {
    background: #222;
    color: white;
  }
`;

export const ImageContainer = styled.div`
  width: 42%;
  height: 820px;

  position: relative;

  z-index: 2;
`;
