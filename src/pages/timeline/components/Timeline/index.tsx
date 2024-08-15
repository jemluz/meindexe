import { Item } from "../Item";
import { Year } from "../Year";
import { Container, MomentContainer, Wrapper, YearList, YearNav } from "./styles";
import useTimelineScroll from "./utils";

export default function Timeline() {
  useTimelineScroll()

  const years = [
    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
    '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012',
    '2013', '2014', '2015', '2016', '2017', '2018'
  ];

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
  );
}