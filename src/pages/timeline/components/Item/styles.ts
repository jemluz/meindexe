import { styled } from '../../../../styles/stitches.config'

export const Header = styled('header', {
  display: 'flex',
})

export const Dot = styled('span', {
  width: '1rem',
  height: '1rem',
  border: '2px solid gray',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px',
})

export const LilleDot = styled('span', {
  width: '.5rem',
  height: '.5rem',
  backgroundColor: 'blue',
  borderRadius: '50%',
})

export const YearHeading = styled('h2', {
  fontWeight: 'normal',
})
