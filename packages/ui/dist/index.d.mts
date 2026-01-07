import * as react_jsx_runtime from 'react/jsx-runtime';

interface Props {
    slides: Array<{
        title: string;
        subtitle?: string;
        image: string;
    }>;
}
declare function HeroCarousel({ slides }: Props): react_jsx_runtime.JSX.Element;

declare function Button(): void;

declare function Input(): void;

declare function Textarea(): void;

export { Button, HeroCarousel, Input, Textarea };
