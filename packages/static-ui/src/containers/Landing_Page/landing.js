import React from "react";
import { FormattedMessage } from "react-intl";
import { Display2, H6 } from "baseui/typography";
import { Button } from "baseui/button";
import { styled } from "baseui";
import Background from "../../static/bg2.jpg";
import FullScreenWrapper from "../../components/fullscreenwrapper";

const LandingWrapper = styled("div", {
  minHeight: "100vh",
  paddingTop: "3rem",
  paddingLeft: "3rem",
  paddingRight: "3rem",
});

export default function Landing() {
  return (
    <FullScreenWrapper backgroundimage={`url(${Background})`}>
      <LandingWrapper>
        <Display2 color="white" maxWidth="500px" margin="0 auto">
          <FormattedMessage id="landingTitle" />
        </Display2>
        <H6 color="white">
          <FormattedMessage id="landingSubtitle" />
        </H6>
        <Button disabled>
          <FormattedMessage id="detailButton" />
        </Button>
      </LandingWrapper>
    </FullScreenWrapper>
  );
}
