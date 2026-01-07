// src/Carousel/HeroCarousel.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function HeroCarousel({ slides }) {
  return /* @__PURE__ */ jsx("div", { children: slides.map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: s.title }),
    s.subtitle && /* @__PURE__ */ jsx("p", { children: s.subtitle }),
    /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title })
  ] }, i)) });
}

// src/Form/Button.tsx
function Button() {
}

// src/Form/Input.tsx
function Input() {
}

// src/Form/Textarea.tsx
function Textarea() {
}
export {
  Button,
  HeroCarousel,
  Input,
  Textarea
};
