interface PreviewProjectProps {
  year: string
  month: string
  title: string
  type: string
  image: string
  content: string[]
  languages?: string[]
  projectUrl: string
}

export const previewProjects: PreviewProjectProps[] = [
  {
    year: '2017',
    month: 'Janeiro',
    title: 'Aurora',
    type: '[app + site]',
    image: '',
    content: [
      'Esse foi o projeto da faculdade que me ensinou a pensar como uma programadora.',
      '“Como eu vou imitar uma aplicação mobile em uma linguagem que foi projetada para desenhos?”',
    ],
    languages: ['.pde', '.html', '.css', '.js'],
    projectUrl: '',
  },
  {
    year: '2017',
    month: 'Dezembro',
    title: 'Monique Luz',
    type: '[branding]',
    image: '',
    content: [
      'Esse foi o projeto da faculdade que me ensinou a pensar como uma programadora.',
      '“Como eu vou imitar uma aplicação mobile em uma linguagem que foi projetada para desenhos?”',
    ],
    projectUrl: '',
  },
]
