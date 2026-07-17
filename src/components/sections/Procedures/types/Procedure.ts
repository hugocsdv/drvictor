export interface Procedure {
  id: number;
  category: string;

  title: string;
  description: string;

  image: string;

  duration?: string;
  anesthesia?: string;
  hospitalization?: string;
  recovery?: string;

  benefits: string[];
  indications: string[];

  treatedAreas?: string[];
}