import { useEffect } from 'react'

const useTimelineScroll = () => {
  useEffect(() => {
    let stickyTop = 0
    let scrollTarget: number | false = false

    const timeline = document.querySelector('.timeline__nav') as HTMLElement
    const moments = Array.from(timeline.querySelectorAll('li'))
    const milestones = Array.from(
      document.querySelectorAll('.timeline__section .project'),
    ) as HTMLElement[]

    const offsetTop = parseInt(window.getComputedStyle(timeline).top || '0', 10)

    const TIMELINE_VALUES = {
      start: 390,
      step: 30,
    }

    // Ajusta a posição da linha do tempo quando a janela é redimensionada.
    // necessário remover o fixed para a posição ser recalculada sem interferencia
    const handleResize = () => {
      timeline.classList.remove('fixed')
      stickyTop =
        timeline.getBoundingClientRect().top + window.scrollY - offsetTop
      handleScroll()
    }

    // Adiciona ou remove a classe fixed à linha do tempo dependendo da posição de rolagem do usuário.
    const handleScroll = () => {
      if (window.scrollY > stickyTop) {
        timeline.classList.add('fixed')
      } else {
        timeline.classList.remove('fixed')
      }
    }

    // Rola suavemente para o marco correspondente quando um item de momento é clicado.
    const handleItemClick = (index: number) => {
      const currentMoment = moments[index]
      const milestone = milestones[index]

      if (!currentMoment.classList.contains('active') && milestone) {
        scrollTarget = index
        const scrollTargetTop =
          milestone.getBoundingClientRect().top + window.scrollY - 80

        window.scrollTo({
          top: scrollTargetTop,
          behavior: 'smooth',
        })

        window.addEventListener(
          'scroll',
          () => {
            scrollTarget = false
          },
          { once: true },
        )
      }
    }

    // Atualiza a posição da linha do tempo e destaca o item ativo com base na posição de rolagem.
    const handleWindowScroll = () => {
      const viewLine = window.scrollY + window.innerHeight / 3

      console.log({
        scrollY: window.scrollY,
        innerHeight: window.innerHeight,
        viewLine,
      })

      let active = -1

      if (scrollTarget === false) {
        milestones.forEach((milestone, index) => {
          if (
            milestone.getBoundingClientRect().top + window.scrollY - viewLine >
            0
          ) {
            return
          }
          active = index
        })
      } else {
        active = scrollTarget
      }

      timeline.style.top = `${
        -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start
      }px`

      moments.forEach((moment) => moment.classList.remove('active'))
      if (active !== -1) {
        moments[active].classList.add('active')
      } else {
        moments[0].classList.add('active')
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    handleResize()

    moments.forEach((moment, index) => {
      const span = moment.querySelector('span')
      if (span) {
        span.addEventListener('click', () => handleItemClick(index))
      }
    })

    window.addEventListener('scroll', handleWindowScroll)
    handleWindowScroll()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])
}

export default useTimelineScroll
