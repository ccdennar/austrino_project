'use client'
import { HeroCarousel } from '@austrino/ui'
import { HeroSlide } from '@austrino/types'

export const HeroSection = ({ slides }: { slides: HeroSlide[] }) => (
  <section>
    <HeroCarousel slides={slides} />
  </section>
)