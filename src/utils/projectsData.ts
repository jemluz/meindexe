import { randomUUID } from 'crypto'
import { StaticImageData } from 'next/image'

import AuroraPreview from '../assets/aurora-preview.png'

export interface PreviewProjectProps {
  id: () => string
  year: string
  month: string
  title: string
  type: string
  previewImage: StaticImageData
  content: string[]
  languages?: string[]
  projectUrl: string
}

export const previewProjects: PreviewProjectProps[] = [
  {
    id: () => randomUUID(),
    year: '2017',
    month: 'Janeiro',
    title: 'Aurora',
    type: '[app + site]',
    previewImage: AuroraPreview,
    content: [
      'Esse foi o projeto da faculdade que me ensinou a pensar como uma programadora.',
      '“Como eu vou imitar uma aplicação mobile em uma linguagem que foi projetada para desenhos?”',
    ],
    languages: ['.pde', '.html', '.css', '.js'],
    projectUrl: '',
  },
  {
    id: () => randomUUID(),
    year: '2017',
    month: 'Dezembro',
    title: 'Monique Luz',
    type: '[branding]',
    previewImage: AuroraPreview,
    content: [
      'Esse foi o projeto da faculdade que me ensinou a pensar como uma programadora.',
      '“Como eu vou imitar uma aplicação mobile em uma linguagem que foi projetada para desenhos?”',
    ],
    projectUrl: '',
  },
]
