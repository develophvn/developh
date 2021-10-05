import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { get, isEmpty, cloneDeep } from "lodash";
import { useStyletron } from "styletron-react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown, Delete } from "baseui/icon";
import { FormattedMessage } from "react-intl";
import Logo from "../static/LogoBlue.svg";

import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { Link, navigate } from "gatsby";
import { WEBSITE_INFO } from "../config";
import languages from "../languages";

const LanguageMap = {
  vi: {
    label: "🇻🇳 Tiếng Việt",
  },
  en: {
    label: "🇺🇸 English",
  },
  default: {
    label: "Unknown",
  },
};

const defaultMainItems = WEBSITE_INFO.routes;

const searchItem = (items, criteriaFn) => {
  for (const item of items) {
    if (criteriaFn(item)) {
      return item;
    } else if (item.children) {
      const foundInChildren = searchItem(item.children, criteriaFn);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return null;
};

const isItemMatchedURL = (item, url, currentLang) =>
  item.route &&
  !item.isLanguageChange &&
  (item.route === url ||
    item.route === `${url}/` ||
    `/${currentLang.langKey}${item.route}` === url ||
    `/${currentLang.langKey}${item.route}` === `${url}/`);

const NavBar = ({ title, langsMenu }) => {
  const data = useStaticQuery(graphql`
    query NavBarQuery {
      allWpPage {
        nodes {
          title
          uri
        }
      }
    }
  `);
  const morePages = useMemo(() => get(data, "allWpPage.nodes", []), [data]);
  const [css] = useStyletron();
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const currentLang = useMemo(() => langsMenu.find((item) => item.selected), [
    langsMenu,
  ]);
  const [mainItems, setMainItems] = React.useState(cloneDeep(defaultMainItems));
  useEffect(() => {
    const items = cloneDeep(defaultMainItems);
    if (!isEmpty(morePages)) {
      items.push({
        icon: ChevronDown,
        label: <FormattedMessage id="moreWordpressPages" />,
        navExitIcon: Delete,
        children: morePages
          .filter((page) =>
            !currentLang.isDefault
              ? page.uri.includes(`/${currentLang.langKey}-`)
              : !languages.langs.some((lang) => page.uri.includes(`/${lang}-`))
          )
          .map((page) => ({
            icon: () => <FontAwesomeIcon icon={faLink} />,
            label: page.title,
            route: page.uri,
          })),
      });
    }
    if (langsMenu.length > 1) {
      items.push({
        icon: ChevronDown,
        label: <FormattedMessage id="selectLanguages" />,
        navExitIcon: Delete,
        children: langsMenu.map((item) => ({
          ...item,
          icon: () => <FontAwesomeIcon icon={faLanguage} />,
          label: (LanguageMap[item.langKey] || LanguageMap.default).label,
          route: item.link,
          isLanguageChange: true,
        })),
      });
    }
    setMainItems(() => {
      const currentItem = searchItem(items, (item) =>
        isItemMatchedURL(item, url, currentLang)
      );
      if (currentItem) {
        return setItemActive(items, currentItem);
      }
      return items;
    });
  }, [morePages, langsMenu, currentLang, url]);
  useEffect(() => {
    if (url) {
      setMainItems((prev) => {
        const currentItem = searchItem(prev, (item) =>
          isItemMatchedURL(item, url, currentLang)
        );
        if (currentItem) {
          return setItemActive(prev, currentItem);
        }
        return prev;
      });
    }
  }, [url, currentLang]);

  if (mainItems.length === defaultMainItems.length) {
    return null;
  }
  return (
    <AppNavBar
      overrides={{
        Root: {
          style: {
            position: "sticky",
            top: 0,
            zIndex: 50,
          },
        },
        MobileDrawer: {
          props: {
            overrides: {
              Root: {
                style: {
                  zIndex: 99,
                  paddingTop: "5rem",
                },
              },
            },
          },
        },
      }}
      title={
        <Link
          className={css({
            textDecoration: "none",
          })}
          to={currentLang.isDefault ? "/" : `/${currentLang.langKey}/`}
          replace={false}
        >
          <img
            className={css({ paddingTop: "5px" })}
            src={Logo}
            alt="LogoDevelophVN"
          />
        </Link>
      }
      mainItems={mainItems}
      onMainItemSelect={(item) => {
        setMainItems((prev) => setItemActive(prev, item));
        if (item.route) {
          if (item.isLanguageChange) {
            const newRoute = window.location.pathname.replace(
              /\/[a-z][a-z]\//,
              "/"
            );
            navigate(item.isDefault ? newRoute : `/${item.langKey}${newRoute}`);
          } else {
            navigate(
              currentLang.isDefault
                ? item.route
                : `/${currentLang.langKey}${item.route}`
            );
          }
        }
      }}
    />
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: WEBSITE_INFO.title,
};

export default NavBar;
