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

export default function Hero() {
  return (
    <HeroContainer>

      <BackgroundCircle />

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

          <PrimaryButton>
            Agendar Consulta
          </PrimaryButton>

          <SecondaryButton>
            Conhecer Procedimentos
          </SecondaryButton>

        </Buttons>

      </HeroContent>

      <ImageContainer>

        <Image
          src="/images/doctor.png"
          alt="Doutor"
          fill
          priority
          style={{
            objectFit: "contain",
          }}
        />

      </ImageContainer>

    </HeroContainer>
  );
}