"use client";

import { ChangeEvent } from "react";
import { Input } from "./Budget.styles";


interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function CurrencyInput({
  value,
  onChange,
  placeholder = "R$ 0,00",
}: CurrencyInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, "");

    const amount = digits ? Number(digits) / 100 : 0;

    onChange(amount);
  };

  return (
    <Input
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      value={value === 0 ? "" : formatter.format(value)}
      onChange={handleChange}
    />
  );
}