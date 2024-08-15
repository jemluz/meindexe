interface ItemProps {
  year: string
}

export function Item({ year }: ItemProps) {
  return (
    <div>
      <h2 className="milestone">{year}</h2>
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
