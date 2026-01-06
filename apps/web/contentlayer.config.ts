import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const HeroSlide = defineDocumentType(() => ({
  name: 'HeroSlide',
  filePathPattern: `hero-slides/**/*.mdx`,
  fields: {
    type: { type: 'string', required: true },
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: true },
    bg: { type: 'string', required: true },
    bgAlt: { type: 'string', required: true },
    ctaLabel: { type: 'string', required: true },
    ctaLink: { type: 'string', required: true },
    priority: { type: 'number', required: true },
    locale: { type: 'string', required: true },
    showAwsBadge: { type: 'boolean', default: false },
  },
}))

export const Testimonial = defineDocumentType(() => ({
  name: 'Testimonial',
  filePathPattern: `testimonials/**/*.mdx`,
  fields: {
    type: { type: 'string', required: true },
    name: { type: 'string', required: true },
    title: { type: 'string', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [HeroSlide, Testimonial],
})