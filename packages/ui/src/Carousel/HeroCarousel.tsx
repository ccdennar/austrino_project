import React from 'react';

interface Props {
  slides: Array<{
    title: string;
    subtitle?: string;
    image: string;
  }>;
}

export default function HeroCarousel({ slides }: Props) {
  return (
    <div>
      {slides.map((s, i) => (
        <div key={i}>
          <h2>{s.title}</h2>
          {s.subtitle && <p>{s.subtitle}</p>}
          <img src={s.image} alt={s.title} />
        </div>
      ))}
    </div>
  );
}