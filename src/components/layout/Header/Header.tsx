"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Logo,
  Nav,
  NavItem,
  Actions,
  Button,
  MenuButton,
  MobileMenu,
} from "./Header.styles";
import ScheduleButton from "@/components/ui/Buttons/Scheduling";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <Container>
      <Wrapper $scrolled={scrolled}>
        <Logo>
          <Image src="/images/logo.png" alt="Logo" width={45} height={45} />
        </Logo>

        {/* DESKTOP */}

        <Nav>
          <NavItem href="/">Início</NavItem>

          <NavItem href="/sobre">Sobre</NavItem>

          <NavItem href="/procedimentos">Procedimentos</NavItem>

          <NavItem href="/blog">Blog</NavItem>

          <NavItem href="/contato">Contato</NavItem>
        </Nav>

        <Actions>
          <ScheduleButton href="https://wa.me/5511999999999" target="_blank"/>
        </Actions>

        {/* MOBILE BUTTON */}

        <MenuButton onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? "✕" : "☰"}
        </MenuButton>
      </Wrapper>

      {/* MOBILE MENU */}

      <MobileMenu $open={open}>
        <NavItem href="/" onClick={closeMenu}>
          Início
        </NavItem>

        <NavItem href="/sobre" onClick={closeMenu}>
          Sobre
        </NavItem>

        <NavItem href="/procedimentos" onClick={closeMenu}>
          Procedimentos
        </NavItem>

        <NavItem href="/blog" onClick={closeMenu}>
          Blog
        </NavItem>

        <NavItem href="/contato" onClick={closeMenu}>
          Contato
        </NavItem>

        <ScheduleButton href="https://wa.me/5511999999999" target="_blank"/>
      </MobileMenu>
    </Container>
  );
}
