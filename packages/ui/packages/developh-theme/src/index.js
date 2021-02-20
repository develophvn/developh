import { connect, Global, css } from "frontity";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import DefaultTheme from "./containers/Default";
import AnimateCss from "./static/assets/styles/animate.min.css";
import ComponentsCss from "./static/assets/styles/components.min.css";
import CustomStylesCss from "./static/assets/styles/custom-styles.css";
import EditorFeCss from "./static/assets/styles/editor-fe.min.css";
import FontAwesomeCss from "./static/assets/styles/font-awesome.min.css";
import PostAndPagesCss from "./static/assets/styles/post-and-pages.min.css";
import AdminIconCss from "./static/assets/styles/admin-icon.css";
import WpBlockCss from "./static/assets/styles/wp-block-library.css";

import HomeTheme from "./containers/Home";

const App = ({ state }) => {
  // if (state.router.link === "/") {
  //   return <HomeTheme />;
  // }

  return (
    <>
      <Global styles={css(PostAndPagesCss)} />
      <Global styles={css(AnimateCss)} />
      <Global styles={css(ComponentsCss)} />
      <Global styles={css(CustomStylesCss)} />
      <Global styles={css(EditorFeCss)} />
      <Global styles={css(FontAwesomeCss)} />
      <Global styles={css(AdminIconCss)} />
      <Global styles={css(WpBlockCss)} />
      <DefaultTheme />
    </>
  );
};

export default {
  name: "developh-theme",
  roots: {
    theme: connect(App),
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
