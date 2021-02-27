import React from "react";
import { FormattedMessage } from "react-intl";
import { Display2, H6 } from "baseui/typography";
import { Button } from "baseui/button";
import Background from "../../static/bg2.jpg";
import FullScreenWrapper from "../../components/fullscreenwrapper";

export default function Landing() {
  return (
    <FullScreenWrapper backgroundimage={`url(${Background})`}>
      <Display2 color="white" maxWidth="500px" margin="0 auto">
        <FormattedMessage id="landingTitle" />
      </Display2>
      <H6 color="white">
        <FormattedMessage id="landingSubtitle" />
      </H6>
      <Button disabled>
        <FormattedMessage id="detailButton" />
      </Button>
    </FullScreenWrapper>
  );
}
