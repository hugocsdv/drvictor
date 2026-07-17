"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Container,
  NavigationButton,
} from "./CarouselNavigation.styles";

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function Navigation({
  onPrevious,
  onNext,
}: NavigationProps) {
  return (
    <Container>
      <NavigationButton
        type="button"
        aria-label="Anterior"
        onClick={onPrevious}
      >
        <ChevronLeft size={20} />
      </NavigationButton>

      <NavigationButton
        type="button"
        aria-label="Próximo"
        onClick={onNext}
      >
        <ChevronRight size={20} />
      </NavigationButton>
    </Container>
  );
}