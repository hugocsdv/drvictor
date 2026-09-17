"use client";

import { useState } from "react";
import Sidebar, { TabOption } from "@/components/dashboard/Sidebar/Sidebar";
import SendTerms from "@/components/dashboard/SendTerms/SendTerms";
import RegisterClientSurgery from "@/components/dashboard/RegisterClientSurgery/RegisterClientSurgery";
import RegisterSurgery from "@/components/dashboard/RegisterSurgery/RegisterSurgery";
import UploadSurgeryTerm from "@/components/dashboard/UploadSurgeryTerm/UploadSurgeryTerm";
import PatientList from "@/components/dashboard/PatientList/PatientList";
import { Container, Main } from "./styles";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabOption>("terms");

  return (
    <Container>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Main>
        {activeTab === "terms" && <SendTerms />}
        {activeTab === "patientList" && <PatientList />}
        {activeTab === "register" && <RegisterClientSurgery />}
        {activeTab === "surgeries" && <RegisterSurgery />}
        {activeTab === "surgeryTerms" && <UploadSurgeryTerm />}
      </Main>
    </Container>
  );
}