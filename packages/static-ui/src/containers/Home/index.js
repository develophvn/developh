import * as React from "react";
import { styled } from "baseui";
import Landing from "./landing";
import OfferInfo from "./offerinfo";
import AboutInfo from "./aboutinfo";

const Centered = styled("div", {
  textAlign: "center",
});

// markup
const Home = ({ offers, aboutInfo }) => {
  return (
    <Centered>
      <Landing />
      <OfferInfo offers={offers} />
      <AboutInfo aboutInfo={aboutInfo} />
    </Centered>
  );
};

export default Home;
