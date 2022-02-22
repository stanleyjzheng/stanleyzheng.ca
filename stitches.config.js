import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: { 
      yellow: '#EBCB8B', // nord aurora yellow
      pink: '#ff80bf', // default pink
      purple: '#B48EAD', // nord aurora purple
      red: '#BF616A', // nord aurora red
      orange: '#D08770', // nord aurora orange
      green: '#8FBCBB', // nord frost cyan
      darkGreen: '#a3be8c', // nord aurora green
      blue: '#81a1c1', //nord frost light blue
      darkBlue: '#5e81ac', //nord frost dark blue
      cyan: '#88C0D0', // nord aurora blue
      primary: '#eceff4', // nord snow storm white
      secondary: '#d8dee9', // nord snow storm gray
      background: '#2e3440', // nord darkest slate gray
      hover: '#4c566a', // nord lightest slate gray
      gradient1: '#e66465', // from firefox
      gradient2: '#9198e5', // from firefox
      command: 'rgba(46, 52, 64, 0.8)',
    },
    fonts: {
      body: 'Biotif, sans-serif',
      code: 'Fira Code, monospace',
      heading: 'Neuzeit Grotesk Bold, sans-serif',
    },
    space: {
      navHeightDesktop: '60px',
      navHeightMobile: '110px',
    },
    transitions: {
      duration: '0.2s'
    },
    radii: {
      borderRadius: '8px',
    },
  },
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 760px)',
    bp3: '(max-width: 780px)',
    bp4: '(max-width: 1024px)',
  }
});

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body'
  },
  '::selection': {
    background: "$hover",
  },
  'html, body': {
    margin: "0",
    padding: "0",
    WebkitFontSmoothing: "antialiased",
    background: "$background"
  },
  'kbd': {
    color: "$background",
    background: "$secondary",
    padding: "1px 5px",
    borderRadius: "4px",
    transition: "background $duration ease-in-out",
    fontFamily: "$code",
    fontSize: "14px"
  },
  'svg': {
    width: "32px",
    height: "32px",
    fill: "white"
  },
  'figure': {
    margin: 0,
  },
  'twitterwidget': {
    margin: "0 auto",
  },
  'code': {
    background: "#151417",
    borderRadius: "$borderRadius",
    color: "$primary",
    fontFamily: "$code",
    fontSize: "15px"
  },
  ':not(pre) > code': {
    padding: "4px"
  },
  "h1": {
    fontFamily: "$heading",
    fontSize: "48px",
    lineHeight: "50px",
    margin: "0 0 20px",
    color: "$primary"
  },
  "h2": {
    color: "$primary",
    margin: "60px 0 0",
    fontSize: "24px"
  },
  "h3, h3 a": {
    color: "$primary",
    fontSize: "18px",
    margin: "20px 0 0"
  },
  "ul": {
    margin: 0,
  },
  "img": {
    borderRadius: "8px",
    minWidth: "100%",
    maxWidth: "100%"
  },
  "p": {
    margin: "20px 0",
    color: "$secondary"
  },
  "strong": {
    color: "$primary",
    fontWeight: 500
  },
  "blockquote": {
    borderLeft: "4px solid $hover",
    color: "$secondary",
    fontStyle: "italic",
    margin: "0",
    paddingLeft: "20px"
  },
  "a": {
    borderBottom: "1px solid $primary",
    color: "$primary",
    textDecoration: "none",
    transition: "opacity $duration ease-in-out"
  },
  "a:hover, a:focus": {
    opacity: '0.8',
  },
  '@font-face': [
    {
      fontFamily: 'Neuzeit Grotesk Bold',
      src: `url("/static/font/NeuzeitGrotesk-Bold.woff2") format("woff2"),
        url("/static/font/NeuzeitGrotesk-Bold.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Fira Code',
      src: `url("/static/font/FiraCode-Regular.woff2") format("woff2"),
        url("/static/font/FiraCode-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Bold.woff2") format("woff2"),
        url("/static/font/Biotif-Bold.woff") format("woff")`,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Book.woff2") format("woff2"),
        url("/static/font/Biotif-Book.woff") format("woff")`,
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Regular.woff2") format("woff2"),
        url("/static/font/Biotif-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-RegularItalic.woff2") format("woff2"),
        url("/static/font/Biotif-RegularItalic.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
})

globalStyles()