"use client";

import Image from "next/image";

import {
  Container,
  Hero,
  HeroContent,
  ImageContainer,
  Category,
  Title,
  Description,
  InfoGrid,
  InfoItem,
  Tabs,
  Tab,
  Body,
  SectionTitle,
  Text,
  List,
  ListItem,
  Aside,
  Button,
} from "./ProcedureDetails.styles";

import { Procedure } from "../types/Procedure";
import ScheduleButton from "@/components/ui/Buttons/Scheduling";

interface Props {
  procedure: Procedure;
}

export default function ProcedureDetails({ procedure }: Props) {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Category>{procedure.category}</Category>

          <Title>{procedure.title}</Title>

          <Description>{procedure.description}</Description>
        </HeroContent>

        <ImageContainer>
          <Image
            src={procedure.image}
            alt={procedure.title}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </ImageContainer>
      </Hero>

      <InfoGrid>
        <InfoItem>
          ⏱ Duração média
          <span>2 a 4 horas</span>
        </InfoItem>

        <InfoItem>
          ⚕ Anestesia
          <span>Geral</span>
        </InfoItem>

        <InfoItem>
          🏥 Internação
          <span>Ambulatorial</span>
        </InfoItem>

        <InfoItem>
          ⏳ Recuperação
          <span>7 a 15 dias</span>
        </InfoItem>
      </InfoGrid>

      <Body>
        <div>
          <SectionTitle>Sobre o procedimento</SectionTitle>

          <Text>{procedure.description}</Text>

          <List>
            {procedure.benefits.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </div>

        <Aside>
          <SectionTitle>
            Cada corpo é único. Seu tratamento também.
          </SectionTitle>

          <Text>
            Agende uma avaliação personalizada e descubra o melhor plano para
            você.
          </Text>

          <ScheduleButton
            href="https://wa.me/5511999999999"
            target="_blank"
            fullWidth
          />
        </Aside>
      </Body>
    </Container>
  );
}
