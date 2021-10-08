import * as React from "react";
import Home from "../containers/Home";

const Data = {
  hero: {},
  aboutUs: {},
  event: {},
  footer: {}
}

// markup
const IndexPage = () => {
  return <Home data={Data}/>;
};

export default IndexPage;
