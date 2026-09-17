"use client";

import { useState } from "react";
import Sidebar, { TabOption } from "@/features/dashboard/Sidebar/Sidebar";
import SendTerms from "@/features/dashboard/SendTerms/SendTerms";

import UploadSurgeryTerm from "@/features/dashboard/UploadSurgeryTerm/UploadSurgeryTerm";
import PatientList from "@/features/dashboard/PatientList";
import { Container, Main } from "./styles";
import RegisterSurgery from "@/features/dashboard/RegisterSurgery";
import RegisterPatient from "@/features/dashboard/Patient/components";
import PatientSurgery from "@/features/dashboard/PatientSurgery/components";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabOption>("terms");

  return (
    <Container>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Main>
        {activeTab === "terms" && <SendTerms />}
        {activeTab === "patientList" && <PatientList />}
        {activeTab === "registerPatient" && <RegisterPatient />}
        {activeTab === "surgeries" && <RegisterSurgery />}
        {activeTab === "surgeryTerms" && <UploadSurgeryTerm />}
        {activeTab === "Surgery" && <PatientSurgery />}
      </Main>
    </Container>
  );
}