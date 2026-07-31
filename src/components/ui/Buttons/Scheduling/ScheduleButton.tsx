"use client";

import { Button } from "./ScheduleButton.styles";

interface ScheduleButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self";
  fullWidth?: boolean;
}

export default function ScheduleButton({
  children = "Agendar Consulta",
  onClick,
  href,
  target = "_self",
  fullWidth = false,
}: ScheduleButtonProps) {
  if (href) {
    return (
      <Button
        as="a"
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        $fullWidth={fullWidth}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={onClick} $fullWidth={fullWidth}>
      {children}
    </Button>
  );
}