import Image from 'next/image'
import { PreviewProjectProps } from '../../../../utils/projectsData'
import {
  Dot,
  Header,
  LilleDot,
  MomentTag,
  Month,
  PreviewContainer,
  Project,
  ResumeColumn,
  Year,
} from './styles'
import { randomUUID } from 'crypto'

export function Item({
  year,
  month,
  previewImage,
  content,
}: PreviewProjectProps) {
  return (
    <Project className="project">
      <Header>
        <MomentTag>
          <Dot>
            <LilleDot />
          </Dot>
          <Year>{year}</Year>
        </MomentTag>
        <Month>{month}</Month>
      </Header>
      <PreviewContainer>
        <Image
          src={previewImage}
          height={240}
          quality={100}
          priority
          alt="Imagens do projeto aurora"
        />
        <ResumeColumn>
          {content.map((phrase) => {
            const id = String(randomUUID)
            return <p key={id}>{phrase}</p>
          })}
        </ResumeColumn>
      </PreviewContainer>
    </Project>
  )
}
