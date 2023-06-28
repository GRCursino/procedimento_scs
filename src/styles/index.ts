import { createStitches } from '@stitches/react';

export const { 
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme 
} = createStitches({
  theme: {
    colors: {
      black: '#1b1c1e',

      blue900: '#0071b6',
      blue600: '#5faec9',
      blue300: '#0092d3',

      gray300: '#f5f5f5',
      gray200: '#f7f7f8',

      white: '#FFFFFF'
    },

    fontSizes: {
      md: '1rem',     // 16px
      lg: '1.25rem',  // 20px
      xl: '1.5rem',   // 24px
    }
  }
})