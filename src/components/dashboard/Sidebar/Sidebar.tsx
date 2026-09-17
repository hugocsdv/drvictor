"use client";

import Image from "next/image";
import {
  Aside,
  TopSection,
  LogoWrapper,
  Nav,
  NavItem,
  LogoutButton,
} from "./Sidebar.styles";

export type TabOption =
  | "terms"
  | "register"
  | "surgeries"
  | "surgeryTerms"
  | "patientList";

interface SidebarProps {
  activeTab: TabOption;
  setActiveTab: (tab: TabOption) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <Aside>
      <TopSection>
        <LogoWrapper>
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
          <span>Painel Clínico</span>
        </LogoWrapper>

        <Nav>
          <NavItem
            $active={activeTab === "patientList"}
            onClick={() => setActiveTab("patientList")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Status de Assinaturas
          </NavItem>
          <NavItem
            $active={activeTab === "terms"}
            onClick={() => setActiveTab("terms")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
            Enviar Termos
          </NavItem>


          <NavItem
            $active={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm9 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Cadastrar Cliente/Cirurgia
          </NavItem>

          <NavItem
            $active={activeTab === "surgeries"}
            onClick={() => setActiveTab("surgeries")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            Cadastrar Cirurgias
          </NavItem>

          <NavItem
            $active={activeTab === "surgeryTerms"}
            onClick={() => setActiveTab("surgeryTerms")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            Vincular Termo PDF
          </NavItem>
        </Nav>
      </TopSection>

      <LogoutButton onClick={() => (window.location.href = "/login")}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        </svg>
        Sair
      </LogoutButton>
    </Aside>
  );
}