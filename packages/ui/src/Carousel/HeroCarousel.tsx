// packages/ui/src/Carousel/HeroCarousel.tsx
'use client';

import { FC } from 'react';

export const HeroCarousel: FC<{ slides: any[] }> = ({ slides }) => (
  <div>
    {slides.map((s, i) => (
      <div key={i}>{s.title}</div>
    ))}
  </div>
);