"use client";

import { CategoryContainer, CategoryButton } from "./CategoryTabs.styles";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          $active={activeCategory === category}
          onClick={() => onChange(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
}