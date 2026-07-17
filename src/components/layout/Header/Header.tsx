"use client";

import Image from "next/image";
import {
  Container,
  Wrapper,
  Logo,
  Nav,
  NavItem,
  Actions,
  Button,
} from "./Header.styles";
import { useEffect, useState } from "react";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>

      <Wrapper $scrolled={scrolled}>

        <Logo>

          <Image
            src="/images/logo.png"
            alt="Logo"
            width={45}
            height={45}
          />

        </Logo>

        <Nav>

          <NavItem href="/">Início</NavItem>

          <NavItem href="/sobre">Sobre</NavItem>

          <NavItem href="/procedimentos">Procedimentos</NavItem>

          <NavItem href="/blog">Blog</NavItem>

          <NavItem href="/contato">Contato</NavItem>

        </Nav>

        <Actions>

          <Button>
            Agendar Consulta
          </Button>

        </Actions>

      </Wrapper>

    </Container>
  );
}