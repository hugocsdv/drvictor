"use client";

import { useState } from "react";
import Sidebar, { TabOption } from "@/features/dashboard/Sidebar/Sidebar";
import SendTerms from "@/features/dashboard/SendTerms/SendTerms";


import { Container, Main } from "./styles";
import RegisterSurgery from "@/features/dashboard/RegisterSurgery";
import RegisterPatient from "@/features/dashboard/Patient/components";
import PatientSurgery from "@/features/dashboard/PatientSurgery/components";
import SignaturesList from "@/features/dashboard/SignaturesList";
import PatientList from "@/features/dashboard/Patient/components/List";
import SurgeryTerm from "@/features/dashboard/SurgeryTerm/SurgeryTerm";
import Budget from "@/features/dashboard/Budget/components";
import BudgetList from "@/features/dashboard/Budget/components/List/BudgetList";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabOption>("terms");

  return (
    <Container>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Main>
        {activeTab === "terms" && <SendTerms />}
        {activeTab === "signaturesList" && <SignaturesList />}
        {activeTab === "registerPatient" && <RegisterPatient />}
        {activeTab === "surgeries" && <RegisterSurgery />}
        {activeTab === "surgeryTerms" && <SurgeryTerm />}
        {activeTab === "surgery" && <PatientSurgery />}
        {activeTab === "patientList" && <PatientList />}
        {activeTab === "budget" && <Budget />}
        {activeTab === "budgetList" && <BudgetList />}
      </Main>
    </Container>
  );
}