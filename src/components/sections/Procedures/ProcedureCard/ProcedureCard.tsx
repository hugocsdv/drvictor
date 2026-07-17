"use client";

import Image from "next/image";
import { Scissors } from "lucide-react";

import {
  Card,
  ImageContainer,
  IconCircle,
  Content,
  Title,
  Description,
} from "./ProcedureCard.styles";
import { Procedure } from "../types/Procedure";



interface ProcedureCardProps {
  procedure: Procedure;
  selected?: boolean;
  onClick?: () => void;
}

export default function ProcedureCard({
  procedure,
  selected = false,
  onClick,
}: ProcedureCardProps) {
  return (
    <Card $selected={selected} onClick={onClick}>
      <ImageContainer>
        <Image
          src={procedure.image}
          alt={procedure.title}
          fill
          sizes="220px"
          style={{
            objectFit: "cover",
          }}
        />

        <IconCircle>
          <Scissors size={18} />
        </IconCircle>
      </ImageContainer>

      <Content>
        <Title>{procedure.title}</Title>

        <Description>{procedure.description}</Description>
      </Content>
    </Card>
  );
}