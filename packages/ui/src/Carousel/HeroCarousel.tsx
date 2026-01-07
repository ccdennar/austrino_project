'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { HeroSlide } from '@austrino/types'
import { CtaButton } from '../Form/Button'
import 'swiper/css'
import 'swiper/css/effect-fade'

export const HeroCarousel = ({ slides }: { slides: HeroSlide[] }) => (
  <Swiper
    modules={[A11y, Autoplay, EffectFade]}
    effect="fade"
    speed={600}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    fadeEffect={{ crossFade: true }}
    loop
    className="h-screen w-full"
  >
    {slides.map((s) => (
      <SwiperSlide key={s._id}>
        <div className="relative h-full w-full">
          <Image src={s.bg} alt={s.bgAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="relative z-10 flex h-full items-center justify-center px-6 text-white">
            <div className="max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">{s.title}</h1>
              <p className="mb-8 text-lg md:text-xl">{s.subtitle}</p>
              <CtaButton href={s.ctaLink}>{s.ctaLabel}</CtaButton>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)