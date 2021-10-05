import * as React from "react";
import { styled } from "baseui";
import Landing from "./landing";
import OfferInfo from "./offerinfo";

const Centered = styled("div", {
  textAlign: "center",
});

// markup
const Home = ({ offers }) => {
  return (
    <Centered>
      <Landing />
      <OfferInfo offers={offers} />
    </Centered>
  );
};

export default Home;
