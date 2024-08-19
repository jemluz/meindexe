import { Dot, Header, LilleDot, YearHeading } from './styles'

interface ItemProps {
  year: string
}

export function Item({ year }: ItemProps) {
  return (
    <div className="project">
      <Header>
        <Dot>
          <LilleDot />
        </Dot>
        <YearHeading>{year}</YearHeading>
      </Header>
      <p>
        Esse foi o projeto da faculdade que me ensinou a pensar como uma
        programadora.
      </p>
      <p>
        “Como eu vou imitar uma aplicação mobile em uma linguagem que foi
        projetada para desenhos?”
      </p>
    </div>
  )
}
