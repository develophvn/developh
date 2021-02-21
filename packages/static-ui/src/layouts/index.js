import React, { useState, useEffect } from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider, styled } from "baseui";
import { Helmet } from "react-helmet";
import Theme from "../styles/theme";

import NavBar from "../components/navbar";
import { WEBSITE_INFO } from "../config";

export const LayoutContext = React.createContext({});

const StyledApp = styled("div", {
  position: "relative",
  height: "100vh",
});

const Content = styled("div", {
  position: "absolute",
  top: 0,
  zIndex: 0,
  textAlign: "center",
  height: "100%",
  width: "100%",
});

const Themes = {
  Default: Theme,
  Dark: DarkTheme,
};

const useStyletronEngine = () => {
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import("styletron-engine-atomic").then((styletron) => {
      const clientEngine = new styletron.Client();
      setEngine(clientEngine);
    });
  }, []);

  return { engine };
};

export default function Layout({ children }) {
  const { engine } = useStyletronEngine();

  if (!engine) return null;
  return (
    <LayoutContext.Provider>
      <StyletronProvider value={engine}>
        <style>{`
          @font-face {
            font-family: "Circular Std";
            src: url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff2") format("woff2");
          }
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
        <BaseProvider theme={Themes.Default}>
          <Helmet title={WEBSITE_INFO.title} defer={false} />
          <StyledApp>
            <NavBar />
            <Content>{children}</Content>
          </StyledApp>
        </BaseProvider>
      </StyletronProvider>
    </LayoutContext.Provider>
  );
}
