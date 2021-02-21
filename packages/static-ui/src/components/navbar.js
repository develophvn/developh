import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { get, isEmpty } from "lodash";
import { useStyletron } from "styletron-react";
import { useWindowScroll } from "react-use";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown, Delete } from "baseui/icon";

import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { Link, navigate } from "gatsby";
import { WEBSITE_INFO } from "../config";

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

const NavBar = ({ title, defaultMainItems }) => {
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
  const { y } = useWindowScroll();
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const [mainItems, setMainItems] = React.useState(defaultMainItems);

  useEffect(() => {
    if (!isEmpty(morePages)) {
      setMainItems(() => [
        ...defaultMainItems,
        {
          icon: ChevronDown,
          label: "More",
          navExitIcon: Delete,
          children: morePages.map((page) => ({
            icon: () => <FontAwesomeIcon icon={faLink} />,
            label: page.title,
            route: page.uri,
          })),
        },
      ]);
    }
  }, [morePages, defaultMainItems]);

  useEffect(() => {
    if (url) {
      setMainItems((prev) => {
        const currentItem = searchItem(
          prev,
          (item) =>
            item.route && (item.route === url || item.route === `${url}/`)
        );
        if (currentItem) {
          return setItemActive(prev, currentItem);
        }
        return prev;
      });
    }
  }, [url]);

  if (!isEmpty(morePages) && mainItems.length === 1) {
    return null;
  }

  return (
    <AppNavBar
      overrides={{
        Root: {
          style: {
            position: "fixed",
            top: 0,
            zIndex: 2,
            ...(y === 0 && url && url === "/"
              ? { backgroundColor: "transparent" }
              : {}),
          },
        },
        MainMenuItem: {
          style: {
            color: y === 0 && url && url === "/" ? "white" : "#",
            ":hover": {
              color: y === 0 && url && url === "/" ? "grey" : "inherit",
            },
          },
        },
        MobileDrawer: {
          props: {
            overrides: {
              Root: {
                style: {
                  zIndex: 10,
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
            color: y === 0 && url && url === "/" ? "white" : "inherit",
            textDecoration: "none",
          })}
          to={get(defaultMainItems, "0.route", "/")}
          replace={false}
        >
          {title}
        </Link>
      }
      mainItems={mainItems}
      onMainItemSelect={(item) => {
        setMainItems((prev) => setItemActive(prev, item));
        if (item.route) {
          navigate(item.route);
        }
      }}
    />
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  defaultMainItems: PropTypes.array,
};

NavBar.defaultProps = {
  title: WEBSITE_INFO.title,
  defaultMainItems: WEBSITE_INFO.routes,
};

export default NavBar;
