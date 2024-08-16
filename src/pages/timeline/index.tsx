import { Item } from './components/Item'
import { Year } from './components/Year'
import {
  Container,
  MomentContainer,
  Wrapper,
  YearList,
  YearNav,
} from './styles'
import useTimelineScroll from './utils'

export default function Timeline() {
  useTimelineScroll()

  const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']

  return (
    <Wrapper className="timeline">
      <YearNav className="timeline__nav">
        <YearList>
          {years.map((year) => (
            <Year key={year} value={year} />
          ))}
        </YearList>
      </YearNav>
      <Container className="timeline__section">
        <MomentContainer className="wrapper">
          {years.map((year) => (
            <Item key={year} year={year} />
          ))}
        </MomentContainer>
      </Container>
    </Wrapper>
  )
}
