import { allHeroSlides } from 'contentlayer/generated'

export const getHeroSlides = (locale: string) =>
  allHeroSlides.filter((s) => s.locale === locale).sort((a, b) => a.priority - b.priority)