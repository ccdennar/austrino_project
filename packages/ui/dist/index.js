"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  HeroCarousel: () => HeroCarousel,
  Input: () => Input,
  Textarea: () => Textarea
});
module.exports = __toCommonJS(index_exports);

// src/Carousel/HeroCarousel.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function HeroCarousel({ slides }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: s.title }),
    s.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.subtitle }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: s.image, alt: s.title })
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  HeroCarousel,
  Input,
  Textarea
});
