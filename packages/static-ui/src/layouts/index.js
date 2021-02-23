import React, { useState, useEffect } from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider, styled } from "baseui";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { isEmpty } from "lodash";

import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider } from "react-intl";
import "intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-pluralrules/polyfill";

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

const loadLocaleData = async (code) => {
  if (!code) {
    return { messages: {} };
  }
  const messages = await import(`../languages/${code}`);
  await import(`@formatjs/intl-pluralrules/locale-data/${code}`);
  await import(`@formatjs/intl-relativetimeformat/locale-data/${code}`);
  await import(`intl/locale-data/jsonp/${code}`);

  return { messages };
};

export default function Layout({ children }) {
  const { engine } = useStyletronEngine();
  const [intlData, setIntlData] = useState({ messages: {} });
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `);
  // eslint-disable-next-line
  const url = typeof location !== "undefined" ? location.pathname : "/";
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/");
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
    (item) => ({
      ...item,
      link: item.link.replace(`/${defaultLangKey}/`, "/"),
      isDefault: item.langKey === defaultLangKey,
    })
  );
  useEffect(() => {
    if (langKey) {
      loadLocaleData(langKey).then((result) => {
        setIntlData(result);
      });
    }
  }, [langKey]);

  if (!engine || isEmpty(intlData.messages)) return null;
  return (
    <IntlProvider locale={langKey} messages={intlData.messages}>
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
              <NavBar langsMenu={langsMenu} />
              <Content>{children}</Content>
            </StyledApp>
          </BaseProvider>
        </StyletronProvider>
      </LayoutContext.Provider>
    </IntlProvider>
  );
}
