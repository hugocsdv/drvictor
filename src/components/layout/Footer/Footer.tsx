"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  Container,
  Content,
  Column,
  Label,
  Value,
  Socials,
  Right,
} from "./Footer.styles";
import ContactCard from "@/components/ui/ContactCard";
import SocialButton from "@/components/ui/SocialButton";
import { FooterProps } from "@/types/footer.props";

const Footer = ({
  phone,
  whatsapp,
  instagram,
  facebook,
  scheduleLink,
}: FooterProps) => {
  const phoneNumber = phone.replace(/\D/g, "");

  return (
    <Container>
      <Content>
        <Column>
          <ContactCard
            icon={<FaWhatsapp />}
            label="Fale conosco"
            value={phone}
            href={`https://wa.me/${whatsapp}`}
          />
        </Column>

        <Right>
          <ContactCard
            icon={<FaCalendarAlt />}
            label="Agende sua consulta"
            value={phone}
            href={scheduleLink}
          />
        </Right>
        <Right>
          <Socials>
            <SocialButton href={instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
            </SocialButton>

            <SocialButton href={facebook} target="_blank" rel="noreferrer">
              <FaFacebookF />
            </SocialButton>
          </Socials>
        </Right>
      </Content>
    </Container>
  );
};

export default Footer;
