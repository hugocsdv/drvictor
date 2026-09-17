"use client";

import Image from "next/image";
import { Container, Title, Subtitle } from "./LoginHeader.styles";

interface LoginHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function LoginHeader({
  title = "Bem-vindo de volta",
  subtitle = "Acesse sua conta para gerenciar seus agendamentos e consultas",
}: LoginHeaderProps) {
  return (
    <Container>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={54}
        height={54}
        priority
      />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}