// packages/ui/src/hero-carousel.tsx
'use client';

import React, { FC } from 'react';

export const HeroCarousel: FC<{ slides: any[] }> = ({ slides }) => {
  return React.createElement(
    'div',
    null,
    slides.map((s, i) =>
      React.createElement('div', { key: i }, s.title)
    )
  );
};