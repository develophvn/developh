import React from "react";
import { connect, styled } from "frontity";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import { get } from "lodash";
import { useGetContent } from "./utils/hooks";
import { NavbarIconUrl } from "./static/constants";

const StyledApp = styled.div`
  width: 100vw;
`;

const StyledLandingBox = styled.div`
  width: 60%;
  text-align: center;
  margin: 0 auto;

  padding: 0.5rem;
  border-bottom: 2px solid black;
`;

const MainLogo = styled.img`
  height: 50px;
`;

const LandingBox = ({ frontityState }) => (
  <StyledLandingBox>
    <MainLogo src={NavbarIconUrl} alt="logo" />
    <h1>{get(frontityState, "title")}</h1>
    <h3>{get(frontityState, "description")}</h3>
  </StyledLandingBox>
);

const App = ({ state }) => {
  const { content } = useGetContent(state.router.link, state);

  console.log(content, state);

  return (
    <StyledApp>
      <LandingBox frontityState={get(state, "frontity")} />
      <h2>{get(content, "page.title.rendered")}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: get(content, "page.content.rendered"),
        }}
      />
    </StyledApp>
  );
};

const Root = connect(App);

export default {
  name: "developh-theme",
  roots: {
    theme: Root,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};
