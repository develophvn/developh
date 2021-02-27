import { createTheme } from "baseui";

const primitivies = {
  primary: "#130E56",
  accent: "#8356FF",
  primaryFontFamily: "CircularStd",
};

const overrides = {
  colors: {
    colorPrimary: "#ffffff",
    borderAccent: "#E5E5E5",
  },
};

const theme = createTheme(primitivies, overrides);

export default theme;
