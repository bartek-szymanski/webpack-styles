const properties = [
  'all',

  /* layout */
  'box-sizing',
  'content',

  /* position */
  'position',

  'top',
  'bottom',
  'left',
  'right',

  'z-index',

  'float',
  'clear',

  /* display */
  'display',
  'vertical-align',

  /* flex */
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',

  'align-content',
  'align-items',
  'align-self',

  'justify-content',
  'justify-items',
  'justify-self',

  'order',

  /* grid */
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',

  'row-gap',
  'gap',

  /* margin */
  'margin',
  'margin-top',
  'margin-bottom',
  'margin-left',
  'margin-right',

  /* padding */
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',

  /* size */
  'width',
  'min-width',
  'max-width',

  'height',
  'min-height',
  'max-height',

  'overflow',
  'overflow-wrap',

  'object-fit',
  'object-position',

  /* visibility */
  'opacity',
  'visibility',

  /* columns */
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'columns',
  'column-span',
  'column-width',

  /* background */
  'background',
  'background-image',
  'background-position',
  'background-size',
  'background-repeat',
  'background-origin',
  'background-clip',
  'background-attachment',
  'background-color',
  'background-blend-mode',

  'filter',
  'box-shadow',

  'clip',
  'clip-path',

  'mask',
  'mask-border',
  'mask-border-mode',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-border-slice',
  'mask-border-source',
  'mask-border-width',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'mask-type',

  /* border */
  'border',
  'border-width',
  'border-style',
  'border-color',

  'border-top',
  'border-top-width',
  'border-top-style',
  'border-top-color',

  'border-bottom',
  'border-bottom-width',
  'border-bottom-style',
  'border-bottom-color',

  'border-left',
  'border-left-width',
  'border-left-style',
  'border-left-color',

  'border-right',
  'border-right-width',
  'border-right-style',
  'border-right-color',

  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',

  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',

  /* rounded */
  'corners',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',

  /* table */
  'border-spacing',
  'border-collapse',
  'table-layout',

  /* transform */
  'transform',
  'transform-box',
  'transform-origin',

  /* list */
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',

  /* typography */

  'color',

  'font',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-weight',

  'letter-spacing',
  'line-break',
  'line-height',

  'text-align',
  'text-align-all',
  'text-align-last',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-indent',
  'text-justify',
  'text-orientation',
  'text-overflow',
  'text-shadow',
  'text-transform',
  'text-underline-position',

  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',

  'white-space',

  /* transition */
  'transition',
  'transition-property',
  'transition-duration',
  'transition-timing-function',
  'transition-delay',

  /* animation */
  'animation',
  'animation-name',
  'animation-duration',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'animation-play-state',

  'will-change',

  /* scroll */
  'scroll-margin',
  'scroll-margin-block',
  'scroll-margin-block-end',
  'scroll-margin-block-start',
  'scroll-margin-bottom',
  'scroll-margin-inline',
  'scroll-margin-inline-end',
  'scroll-margin-inline-start',
  'scroll-margin-left',
  'scroll-margin-right',
  'scroll-margin-top',
  'scroll-padding',
  'scroll-padding-block',
  'scroll-padding-block-end',
  'scroll-padding-block-start',
  'scroll-padding-bottom',
  'scroll-padding-inline',
  'scroll-padding-inline-end',
  'scroll-padding-inline-start',
  'scroll-padding-left',
  'scroll-padding-right',
  'scroll-padding-top',
  'scroll-snap-align',
  'scroll-snap-stop',
  'scroll-snap-type',

  /* voice */
  'voice-balance',
  'voice-duration',
  'voice-family',
  'voice-pitch',
  'voice-range',
  'voice-rate',
  'voice-stress',
  'voice-volume',

  /* other */
  'cursor',
  'volume',
  'azimuth',
  'box-decoration-break',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'caret-color',
  'color-interpolation-filters',
  'contain',
  'counter-increment',
  'counter-reset',
  'cue',
  'cue-after',
  'cue-before',
  'direction',
  'elevation',
  'empty-cells',
  'flood-color',
  'flood-opacity',
  'globalcompositeoperation',
  'glyph-orientation-vertical',
  'hanging-punctuation',
  'hyphens',
  'image-orientation',
  'image-rendering',
  'isolation',
  'lighting-color',
  'mix-blend-mode',
  'orphans',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'pause',
  'pause-after',
  'pause-before',
  'pitch',
  'pitch-range',
  'place-content',
  'place-items',
  'place-self',
  'play-during',
  'quotes',
  'resize',
  'rest',
  'rest-after',
  'rest-before',
  'richness',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'speak',
  'speak-as',
  'speak-header',
  'speak-numeral',
  'speak-punctuation',
  'speech-rate',
  'stress',
  'tab-size',
  'unicode-bidi',
  'widows',
]

module.exports = properties;