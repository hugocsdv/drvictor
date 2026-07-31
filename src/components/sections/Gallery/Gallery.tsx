"use client";

import Image from "next/image";

import ScheduleButton from "@/components/ui/Buttons/Scheduling";

import {
  Container,
  Header,
  Subtitle,
  Title,
  Description,
  Grid,
  LargeCard,
  SmallCard,
  VideoCard,
  Overlay,
  Procedure,
} from "./Gallery.styles";

const photos = [
  { image: "/images/gallery/1.png", procedure: "Rinoplastia" },
  { image: "/images/gallery/2.png", procedure: "Lipo HD" },
  { image: "/images/gallery/3.png", procedure: "Mamoplastia" },
  { image: "/images/gallery/1.png", procedure: "Blefaroplastia" },
  { image: "/images/gallery/2.png", procedure: "Abdominoplastia" },

];

export default function Gallery() {
  return (
    <Container>
      <Header>
        <Subtitle>RESULTADOS REAIS</Subtitle>

        <Title>Conheça alguns resultados</Title>

        <Description>
          Cada paciente é único. Confira alguns procedimentos realizados pelo
          Dr. João Silva.
        </Description>
      </Header>

      <Grid>
        <VideoCard>
          <video
            controls
            poster="/images/cover.png"
            preload="metadata"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>

        </VideoCard>

        {photos.map((photo, index) =>
          index === 0 ? (
            <LargeCard key={photo.procedure}>
              <Image
                src={photo.image}
                alt={photo.procedure}
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />

              <Overlay>
                <Procedure>{photo.procedure}</Procedure>
              </Overlay>
            </LargeCard>
          ) : (
            <SmallCard key={photo.procedure}>
              <Image
                src={photo.image}
                alt={photo.procedure}
                fill
                sizes="25vw"
                style={{ objectFit: "cover" }}
              />

              <Overlay>
                <Procedure>{photo.procedure}</Procedure>
              </Overlay>
            </SmallCard>
          )
        )}
      </Grid>


    </Container>
  );
}