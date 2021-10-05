import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBlog, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";

export const WEBSITE_INFO = {
  title: "Developh Vietnam",
  routes: [
    {
      label: "Home",
      route: "/landing_page",
      icon: () => <FontAwesomeIcon icon={faHome} />,
    },
    {
      label: "Blogs",
      route: "/blogs",
      icon: () => <FontAwesomeIcon icon={faBlog} />,
    },
    {
      label: "Contact",
      route: "/contact",
      icon: () => <FontAwesomeIcon icon={faPhone} />,
    },
  ],
};
