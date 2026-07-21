"use client";

import {
  Container,
  Content,
  Intro,
  Title,
  Description,
  Button,
  Cards,
  LocationCard,
  Image,
  CardTitle,
  AdministrativeCard,
  AdministrativeImage,
  AdministrativeText,
} from "./Locations.styles";

type Location = {
  city: string;
  image: string;
};

type LocationsProps = {
  locations: Location[];
};

export default function Locations({ locations }: LocationsProps) {
  return (
    <Container>
      <Content>
        <Intro>
          <Title>
            Locais de
            <br />
            atendimento
          </Title>

          <Description>
            Atendimento presencial em diversas cidades para melhor atender.
          </Description>

          <Button href="#">Ver endereços e contatos</Button>
        </Intro>

        <Cards>
          {locations.map((location) => (
            <LocationCard key={location.city}>
              <Image src={location.image} alt={location.city} />

              <CardTitle>{location.city}</CardTitle>
            </LocationCard>
          ))}

          <AdministrativeCard>
            <AdministrativeImage
              src="/images/clinica-lins2.webp"
              alt="Escritório Administrativo"
            />

            <AdministrativeText>
              <strong>Escritório Administrativo</strong>

              <span>Pirajui - SP</span>
            </AdministrativeText>
          </AdministrativeCard>
        </Cards>
      </Content>
    </Container>
  );
}
