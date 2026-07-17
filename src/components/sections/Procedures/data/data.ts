import { Procedure } from "../types/Procedure";

export const procedures: Procedure[] = [
  {
    id: 1,
    category: "Nariz",
    title: "Rinoplastia",
    description:
      "Cirurgia do nariz com foco em harmonia facial e resultados naturais.",
    image: "/images/rinoplastia.jpg",
    benefits: [
      "Harmonia facial",
      "Melhora da autoestima",
      "Resultado natural"
    ],
    indications: [
      "Alterações estéticas no nariz",
      "Dificuldade respiratória",
      "Desejo de melhorar proporção facial"
    ],
  },

  {
    id: 2,
    category: "Corpo",
    title: "Lipo HD",
    description:
      "Definição corporal avançada para realçar os contornos naturais.",
    image: "/images/lipo.jpg",
    benefits: [
      "Maior definição muscular",
      "Melhora dos contornos corporais"
    ],
    indications: [
      "Gordura localizada",
      "Pacientes com peso estável"
    ],
  },

  {
    id: 3,
    category: "Olhos",
    title: "Blefaroplastia",
    description:
      "Tratamento das pálpebras para um olhar mais jovem e descansado.",
    image: "/images/blefaroplastia.png",
    benefits: [
      "Rejuvenescimento do olhar",
      "Redução de excesso de pele"
    ],
    indications: [
      "Pálpebras caídas",
      "Bolsas abaixo dos olhos"
    ],
  },
];