import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  // '@font-face': [
  //   {
  //     fontFamily: 'Changa',
  //     src: 'url(https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap)',
  //     fontWeight: '200 800',
  //     fontStyle: 'normal',
  //   },
  //   {
  //     fontFamily: 'Nova Square',
  //     src: 'url(https://fonts.googleapis.com/css2?family=Nova+Square&display=swap)',
  //     fontWeight: '400',
  //     fontStyle: 'normal',
  //   }
  // ],

  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$white',
    color: '$black',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$changa'
  },
})
