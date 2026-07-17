"use client";

import {
  Container,
  Header,
  Subtitle,
  Title,
  Grid,
  Card,
  ImageBox,
  Content,
  CardTitle,
  Description,
  LinkButton,
} from "./Procedures.styles";

import Image from "next/image";

const procedures = [
  {
    title: "Rinoplastia",
    description:
      "Cirurgia do nariz com foco em harmonia facial e resultados naturais.",
    image: "/images/rinoplastia.jpg",
  },
  {
    title: "Lipo HD",
    description:
      "Definição corporal avançada para realçar os contornos naturais.",
    image: "/images/lipo.jpg",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
  {
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
  },
];

export default function Procedures() {
  return (
    <Container>
      <Header>
        <Subtitle>Especialidades</Subtitle>

        <Title>Procedimentos pensados para valorizar sua beleza</Title>
      </Header>

      <Grid>
        {procedures.map((item) => (
          <Card key={item.title}>
            <ImageBox>
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </ImageBox>

            <Content>
              <CardTitle>{item.title}</CardTitle>

              <Description>{item.description}</Description>

              <LinkButton>Saiba mais →</LinkButton>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
