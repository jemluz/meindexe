// stitches.config.ts
import { createStitches } from '@stitches/react'
// eslint-disable-next-line camelcase
import { Changa, Nova_Square } from 'next/font/google'

const changa = Changa({ subsets: ['latin'], weight: ['200', '800'] })
const square = Nova_Square({ subsets: ['latin'], weight: ['400'] })

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#333',
      orange: '#F58D13',
      orangeBg: '#F58D1320',
      red: '#EF5330',
      pink: '#DF69DB',
      green: '#73A66E',
      blue: '#3880D6',
      // Adicione mais cores conforme necessário
    },
    fonts: {
      changa: changa.style.fontFamily,
      square: square.style.fontFamily,
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
})
