import * as React from "react";
import Home from "../containers/Home";

const Data = {
  hero: {
    images: {
      bg: {
        src: "./images/611634f1f5543c66e7859c9f_pins_png.png"
      }
    }
  },
  aboutUs: {},
  event: {},
  footer: {}
}

// markup
const IndexPage = () => {
  return <Home data={Data}/>;
};

export default IndexPage;
