"use client";

import Image from "next/image";
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  HeroDescription,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  ImageContainer,
  BackgroundCircle,
} from "./Hero.styles";
import ScheduleButton from "@/components/ui/Buttons/Scheduling";

export default function Hero() {
  return (
    <HeroContainer>

      {/* <BackgroundCircle /> */}

      <HeroContent>

        <HeroSubtitle>
          Especialista em Cirurgia Plástica
        </HeroSubtitle>

        <HeroTitle>
          Beleza, confiança e naturalidade em cada detalhe.
        </HeroTitle>

        <HeroDescription>
          Atendimento personalizado, tecnologia de ponta e resultados que
          respeitam sua identidade. Agende uma consulta e descubra o tratamento
          ideal para você.
        </HeroDescription>

        <Buttons>

          <ScheduleButton href="https://wa.me/5511999999999" target="_blank"/>

          <SecondaryButton>
            Conhecer Procedimentos
          </SecondaryButton>

        </Buttons>

      </HeroContent>

    
    </HeroContainer>
  );
}