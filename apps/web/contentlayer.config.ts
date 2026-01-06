import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Testimonial = defineDocumentType(() => ({
  name: 'Testimonial',
  filePathPattern: `testimonials/**/*.mdx`,
  fields: {
    name: { type: 'string', required: true },
    title: { type: 'string', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Testimonial],
})