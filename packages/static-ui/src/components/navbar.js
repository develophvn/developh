import React from "react";
import PropTypes from "prop-types";
import LogoBlue from "../static/LogoBlue.svg";
import LogoWhite from "../static/LogoWhite.svg";
import {WEBSITE_INFO} from "../config";

const {leftRoutes, rightRoutes, home} = WEBSITE_INFO;

function NavBar({title, langsMenu}) {
  return (
      <div data-animation="over-right" className="navbar w-nav" data-easing2="ease-in-out" data-easing="ease-in-out"
           data-collapse="small" data-w-id="5a5c6bee-12dd-e8e8-8904-eeac984ec527" role="banner" data-duration="300"
           data-doc-height="1">
        <div className="container nav w-container"><a href={home.route} className="brand w-nav-brand">
          <img
              src={LogoWhite}
              loading="lazy" style={{opacity: 1}} data-w-id="6d81b76d-6420-928a-864e-57f9dc46de6d" alt
              className="image"/>
          <img
              src={LogoBlue}
              loading="lazy" style={{opacity: 0}} data-w-id="e44c2661-7e38-5b5d-6ddc-2f72d9ce9c38" alt
              className="image-7"/></a>
          <nav role="navigation" className="nav-menu w-nav-menu">

            {leftRoutes.map(({label, route}) =>
                <a style={{color: "#FFFFFF"}} href={route} key={label} className="nav-button w-nav-link">{label}</a>
            )}

            <div data-w-id="6a193bb3-c766-3b47-ded9-add2226ec613" className="div-block"></div>

            {rightRoutes.map(({label, route}) =>

                <a style={{color: "#FFFFFF"}} href={route} key={label} className="nav-button w-nav-link">{label}</a>
            )}

          </nav>
          <div data-w-id="5a5c6bee-12dd-e8e8-8904-eeac984ec531" className="menu-button w-nav-button">
            <div style={{backgroundColor: "#FFFFFF"}} className="hamburgur-bar"></div>
            <div style={{backgroundColor: "#FFFFFF"}} className="hamburgur-bar"></div>
            <div style={{backgroundColor: "#FFFFFF"}} className="hamburgur-bar"></div>
          </div>
        </div>
      </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: WEBSITE_INFO.title,
};

export default NavBar;
