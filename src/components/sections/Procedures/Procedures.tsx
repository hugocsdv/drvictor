"use client";

import { useState } from "react";

import {
  Container,
  Header,
  Subtitle,
  Title,
} from "./Procedures.styles";

import CategoryTabs from "./CategoryTabs/CategoryTabs";
import ProcedureCarousel from "./ProcedureCarousel/ProcedureCarousel";
import ProcedureDetails from "./ProcedureDetails/ProcedureDetails";

import { procedures } from "./data/data";
import { Procedure } from "./types/Procedure";

export default function Procedures() {

  const categories = [
    "Todos",
    "Corpo",
    "Mama",
    "Face",
    "Nariz",
    "Olhos",
    "Pós-Bariátrica",
  ];


  const [activeCategory, setActiveCategory] = useState("Todos");


  const [selectedProcedure, setSelectedProcedure] = useState(
    procedures[0]
  );


  const filteredProcedures =
    activeCategory === "Todos"
      ? procedures
      : procedures.filter(
          (procedure: Procedure) =>
            procedure.category === activeCategory
        );


  return (
    <Container>

      <Header>

        <Subtitle>
          Especialidades
        </Subtitle>


        <Title>
          Procedimentos pensados para valorizar sua beleza
        </Title>

      </Header>


      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />



      <ProcedureCarousel

        procedures={filteredProcedures}

        selectedProcedure={selectedProcedure}

        onSelect={setSelectedProcedure}

      />



      <ProcedureDetails

        procedure={selectedProcedure}

      />


    </Container>
  );
}