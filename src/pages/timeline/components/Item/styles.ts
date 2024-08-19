import { styled } from '../../../../styles/stitches.config'

export const Project = styled('article', {
  marginBottom: '3.75rem',
})

export const Header = styled('header', {
  display: 'flex',
})

export const MomentTag = styled('div', {
  display: 'flex',
  background: '$gray100',
  width: 'fit-content',
  alignItems: 'center',
  padding: '0 $md 0 0 ',
  borderRight: '3px solid $black',
  borderRadius: '$sm 0px 0px $sm',
})

export const Dot = styled('span', {
  width: '$md',
  height: '$md',
  border: '4px solid $black',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
  marginLeft: '-12px',
})

export const LilleDot = styled('span', {
  width: '.6rem',
  height: '.6rem',
  backgroundColor: '$gray300',
  borderRadius: '50%',
  margin: '4px',
})

export const Year = styled('h2', {
  fontWeight: 'normal',
})

export const Month = styled('h2', {
  fontWeight: 'normal',
  marginLeft: '$md',
})

export const PreviewContainer = styled('section', {
  display: 'flex',
  padding: '$md',
})

export const ResumeColumn = styled('div', {
  paddingLeft: '$lg',
  p: {
    maxWidth: '500px',
    marginBottom: '$lg',
  },
})
