import React from 'react';

interface YearProps {
  value: string;
}

export function Year({ value }: YearProps) {
  return (
    <li>
      <span>{value}</span>
    </li>
  );
}