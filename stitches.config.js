import { createStitches } from '@stitches/react';

// from https://nordtheme.com
const nord = [
  "#2e3440",
  "#3b4252",
  "#434c5e",
  "#4c566a",
  "#d8dee9",
  "#e5e9f0",
  "#eceff4",
  "#8fbcbb",
  "#88c0d0",
  "#81a1c1",
  "#5e81ac",
  "#bf616a",
  "#d08770",
  "#ebcb8b",
  "#a3be8c",
  "#b48ead"
]

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
      pink: '#ff80bf', // vibrant non-nord pink
      background: nord[0],
      command: nord[0],
      hover: nord[3],
      secondary: nord[4],
      primary: nord[6],
      green: nord[7],
      cyan: nord[8],
      blue: nord[9],
      darkBlue: nord[10],
      red: nord[11], 
      orange: nord[12],
      yellow: nord[13],
      darkGreen: nord[14],
      purple: nord[15],
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
    background: "$background",
    scrollbarColor: "$hover $background", 
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