
"use client";

import Image from "next/image";

import {
  Users,
  UserRoundPlus,
  ClipboardPlus,
  ClipboardList,
  FilePlus2,
  FileCheck2,
  Send,
  FilePlus,
  Files,
  LogOut,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

import {
  Aside,
  TopSection,
  LogoWrapper,
  LogoText,
  LogoSubtitle,
  Nav,
  NavGroup,
  NavGroupTitle,
  NavItem,
  NavItemContent,
  NavIcon,
  NavLabel,
  NavArrow,
  SidebarFooter,
  LogoutButton,
} from "./Sidebar.styles";

export type TabOption =
  | "terms"
  | "registerPatient"
  | "surgeries"
  | "surgeryTerms"
  | "patient"
  | "surgery"
  | "signaturesList"
  | "budget"
  | "budgetList"
  | "patientList";

interface SidebarProps {
  activeTab: TabOption;
  setActiveTab: (tab: TabOption) => void;
}

interface MenuItem {
  label: string;
  tab: TabOption;
  icon: LucideIcon;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    title: "Pacientes",
    items: [
      {
        label: "Ver Pacientes",
        tab: "patientList",
        icon: Users,
      },
      {
        label: "Cadastrar Paciente",
        tab: "registerPatient",
        icon: UserRoundPlus,
      },
    ],
  },
  {
    title: "Cirurgias",
    items: [
      {
        label: "Cadastrar Cirurgias",
        tab: "surgeries",
        icon: ClipboardPlus,
      },
      {
        label: "Cirurgia do Paciente",
        tab: "surgery",
        icon: ClipboardList,
      },
    ],
  },
  {
    title: "Termos e Assinaturas",
    items: [
      {
        label: "Vincular Termo PDF",
        tab: "surgeryTerms",
        icon: FilePlus2,
      },
      {
        label: "Enviar Termos",
        tab: "terms",
        icon: Send,
      },
      {
        label: "Ver Assinaturas",
        tab: "signaturesList",
        icon: FileCheck2,
      },
    ],
  },
  {
    title: "Financeiro",
    items: [
      {
        label: "Criar Orçamento",
        tab: "budget",
        icon: FilePlus,
      },
      {
        label: "Ver Orçamentos",
        tab: "budgetList",
        icon: Files,
      },
    ],
  },
];

export default function Sidebar({
  activeTab,
  setActiveTab,
}: SidebarProps) {
  return (
    <Aside>
      <TopSection>
        <LogoWrapper>
          <Image
            src="/images/logo.png"
            alt="Logo Medioo"
            width={42}
            height={42}
            style={{ objectFit: "contain" }}
          />

          <div>
            <LogoText>Painel Clínico</LogoText>
            <LogoSubtitle>Gestão da clínica</LogoSubtitle>
          </div>
        </LogoWrapper>

        <Nav aria-label="Menu principal">
          {menuGroups.map((group) => (
            <NavGroup key={group.title}>
              <NavGroupTitle>{group.title}</NavGroupTitle>

              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.tab;

                return (
                  <NavItem
                    key={item.tab}
                    type="button"
                    $active={isActive}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setActiveTab(item.tab)}
                  >
                    <NavItemContent>
                      <NavIcon $active={isActive}>
                        <Icon size={18} strokeWidth={1.8} />
                      </NavIcon>

                      <NavLabel>{item.label}</NavLabel>
                    </NavItemContent>

                    {isActive && (
                      <NavArrow>
                        <ChevronRight size={15} />
                      </NavArrow>
                    )}
                  </NavItem>
                );
              })}
            </NavGroup>
          ))}
        </Nav>
      </TopSection>

      <SidebarFooter>
        <LogoutButton
          type="button"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <LogOut size={18} strokeWidth={1.8} />
          <span>Sair do sistema</span>
        </LogoutButton>
      </SidebarFooter>
    </Aside>
  );
}
