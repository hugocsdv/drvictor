import Benefits from "@/components/sections/Benefits";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations/Locations";
import Procedures from "@/components/sections/Procedures";

const locations = [
  {
    city: "Lins - SP",
    image: "/images/clinica-lins.webp",
  },

  {
    city: "Pirajuí - SP",
    image: "/images/clinica-lins.webp",
  },

  {
    city: "Garça - SP",
    image: "/images/clinica-lins.webp",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Procedures />
      <Locations locations={locations} />
    </>
  );
}
