import Typography from "typography";

const MOBILE_MEDIA_QUERY = "@media only screen and (max-width:480px)";

const colors = {
  white: "#ffffff",
  primary: "#494949",
  dark: "#20232a",
  grey: "#eeeeee",
  darkDrey: "#776666",
  gold: "#e67700",
  royalBlue: "#2e53a4",
  gatsby: "rgb(102, 51, 153)",
  gatsbyLight: "rgb(233, 228, 238)"
};

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.7,
  headerWeight: 600,

  headerFontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],

  bodyFontFamily: [
    "Istok Web",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],

  bodyColor: colors.primary,
  scaleRatio: 2.441,

  overrideStyles: () => ({
    h1: {
      fontSize: "2rem"
    },

    h2: {
      fontSize: "1.5rem"
    },

    h3: {
      fontSize: "1.17rem"
    },

    h4: {
      fontSize: "1rem"
    },

    body: {
      fontSize: "18px"
    },

    a: {
      
      textDecoration: "none"
    },

    "a:hover": {
      
    },

    [MOBILE_MEDIA_QUERY]: {
      h1: {
        fontSize: "1.75rem"
      }
    }
  })
});

export default typography;
