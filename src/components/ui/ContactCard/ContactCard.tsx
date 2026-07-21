import { ReactNode } from "react";

import {
  Card,
  IconWrapper,
  Content,
  Label,
  Value,
} from "./ContactCard.styles";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  target?: "_blank" | "_self";
}

const ContactCard = ({
  icon,
  label,
  value,
  href,
  target = "_self",
}: ContactCardProps) => {
  return (
    <Card
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <IconWrapper>{icon}</IconWrapper>

      <Content>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </Content>
    </Card>
  );
};

export default ContactCard;