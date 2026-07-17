"use client";

import {
  CarouselContainer,
  CarouselTrack,
  NavigationButton,
} from "./ProcedureCarousel.styles";

import ProcedureCard from "../ProcedureCard/ProcedureCard";
import { Procedure } from "../types/Procedure";



interface ProcedureCarouselProps {
  procedures: Procedure[];
  selectedProcedure?: Procedure;
  onSelect: (procedure: Procedure) => void;
}

export default function ProcedureCarousel({
  procedures,
  selectedProcedure,
  onSelect,
}: ProcedureCarouselProps) {
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("procedures-carousel");

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <CarouselContainer>
      <NavigationButton
        type="button"
        onClick={() => scroll("left")}
      >
        ←
      </NavigationButton>

      <CarouselTrack id="procedures-carousel">
        {procedures.map((procedure) => (
          <ProcedureCard
            key={procedure.id}
            procedure={procedure}
            selected={selectedProcedure?.id === procedure.id}
            onClick={() => onSelect(procedure)}
          />
        ))}
      </CarouselTrack>

      <NavigationButton
        type="button"
        onClick={() => scroll("right")}
      >
        →
      </NavigationButton>
    </CarouselContainer>
  );
}