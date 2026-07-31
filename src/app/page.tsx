import Benefits from "@/components/sections/Benefits";
import DoctorResume from "@/components/sections/DoctorResume";
import Gallery from "@/components/sections/Gallery";
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
      <DoctorResume />
      <Procedures />
      <Gallery />
      <Locations locations={locations} />
    </>
  );
}
