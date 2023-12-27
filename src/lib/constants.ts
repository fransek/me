export const ROUTES = {
  'About me': '/',
  Projects: '/projects',
  Work: '/work',
  Education: '/education',
  Blog: '/blog',
} as const

export type Route = (typeof ROUTES)[keyof typeof ROUTES]
