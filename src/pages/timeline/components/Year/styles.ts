import { styled } from '../../../../styles/stitches.config'

export const YearItem = styled('li', {
  margin: '15px 0',
  paddingLeft: 0,
  listStyleType: 'none',
  color: '#bfc1c3',
  cursor: 'pointer',
  transition: 'all .3s ease-out',
  fontSize: '1.2rem',

  '&.active': {
    background: '$orangeBg',
    padding: '.1rem 1.2rem',
    color: '$orange',
    borderBottom: '1px dotted transparent',
    transform: 'scale(1.2)',
    fontSize: '1.4rem',
  },

  '&:hover': {
    color: '#000',
  },
})
