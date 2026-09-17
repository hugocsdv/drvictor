"use client";

import Link from "next/link";
import LoginHeader from "@/components/login/LoginHeader/LoginHeader";
import LoginForm from "@/components/login/LoginForm/LoginForm";
import {
  Container,
  CardContainer,
  BackHomeLink,
  FooterText,
} from "./styles";

export default function LoginPage() {
  return (
    <Container>
      <CardContainer>
        <BackHomeLink href="/">
          ← Voltar para o início
        </BackHomeLink>

        <LoginHeader />
        <LoginForm />

        {/* <FooterText>
          Ainda não possui conta? <Link href="/cadastro">Entre em cotato</Link>
        </FooterText> */}
      </CardContainer>
    </Container>
  );
}