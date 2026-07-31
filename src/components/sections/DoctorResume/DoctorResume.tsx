"use client";

import Image from "next/image";

import {
  Container,
  Content,
  ImageContainer,
  TextContent,
  Subtitle,
  Title,
  Description,
  Credentials,
  Credential,
  Number,
  Label,
  CTAButton,
} from "./DoctorResume.styles";
import ScheduleButton from "@/components/ui/Buttons/Scheduling";

export default function DoctorResume() {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image
            src="/images/doctor.png"
            alt="Dr. Victor Guida França"
            fill
            sizes="(max-width: 992px) 100vw, 450px"
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>

        <TextContent>
          <Subtitle>CONHEÇA O ESPECIALISTA</Subtitle>

          <Title>
            Dr. Victor Guida França
            <br />
            Cirurgião Plástico
          </Title>

          <Description>
            Graduado pela Faculdade de Medicina de Marília (FAMEMA) de 2005 a 2010.
            Residência em Cirurgia Geral pela Universidade Federal de São Paulo (UNIFESP) de 2012 a 2014.
          </Description>

          <Description>
            Residência em Cirurgia Plástica pela Universidade Federal de São Paulo (UNIFESP) de 2013 a 2017.
            Especialização em Reconstrução de Mama e Cirurgia de Mama pelo Hospital Pérola Byington, de 2017 a 2018.
          </Description>

          <Credentials>
            <Credential>
              <Number>15+</Number>
              <Label>Anos de experiência</Label>
            </Credential>

            <Credential>
              <Number>3000+</Number>
              <Label>Cirurgias realizadas</Label>
            </Credential>

            <Credential>
              <Number>SBCP</Number>
              <Label>Membro especialista</Label>
            </Credential>
          </Credentials>

          <ScheduleButton href="https://wa.me/5511999999999" target="_blank"/>
        </TextContent>
      </Content>
    </Container>
  );
}