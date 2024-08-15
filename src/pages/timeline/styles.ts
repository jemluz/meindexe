import { styled } from "../../styles/stitches.config";

// timeline
export const Wrapper = styled('div', {
    position: 'relative',
	maxWidth: '980px',
	margin: '0 auto',
})

export const YearNav = styled('nav', {
    position: 'fixed',
    zIndex: 99,
    top: 0,
    transition: 'top .3s ease-out',
})

export const YearList = styled('ul', {
    listStyle: 'none',
    listStylePosition: 'inside',
    margin: '15px 0',
})

export const Container = styled('section', {
    marginLeft: '100px',
    marginTop: '100px',
})

// wrapper
export const MomentContainer = styled('main', {
    position: 'relative',
    maxWidth: '980px',
    margin: '0 auto',
})

