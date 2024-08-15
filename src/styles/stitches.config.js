// stitches.config.ts
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#333',
      // Adicione mais cores conforme necessário
    },
    fonts: {
      changa: 'Changa, sans-serif',
      novaSquare: 'Nova Square, sans-serif',
      // Adicione mais fontes conforme necessário
    },
    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '32px',
      xl: '64px',
      // Adicione mais espaçamentos conforme necessário
    },
    radii: {
      sm: '6px',
      md: '12px',
      lg: '24px',
      // Adicione mais raios de borda conforme necessário
    },
    // Adicione mais temas conforme necessário
  },
});
