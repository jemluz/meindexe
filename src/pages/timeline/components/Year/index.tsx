import React from 'react';
import { YearItem } from './styles';

interface YearProps {
  value: string;
}

export function Year({ value }: YearProps) {
  return (
    <YearItem>
      <span>{value}</span>
    </YearItem>
  );
}