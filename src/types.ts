/// <reference types="astro/astro-jsx" />

/** Any supported HTML or SVG element name, as defined by the HTML specification */
export type HTMLTag = keyof astroHTML.JSX.DefinedIntrinsicElements
/** The built-in attributes for any known HTML or SVG element name */
export type HTMLAttributes<Tag extends HTMLTag> = Omit<
  astroHTML.JSX.IntrinsicElements[Tag],
  keyof astroHTML.JSX.AstroBuiltinAttributes
>
