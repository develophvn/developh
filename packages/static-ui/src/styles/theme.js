import { createTheme } from "baseui";

const primitivies = {
  primary: "#130E56",
  accent: "#8356FF",
};

const overrides = {
  colors: {
    colorPrimary: "#ffffff",
    borderAccent: "#E5E5E5",
  },
  primaryFontFamily: "CircularStd",
};

const theme = createTheme(primitivies, overrides);

export default theme;
