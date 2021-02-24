import React from "react";
import { FormattedMessage } from "react-intl";
import { Display2, H6 } from "baseui/typography";
import { Button } from "baseui/button";
import FullScreenWrapper from "../../components/fullscreenwrapper";

export default function Landing() {
  return (
    <FullScreenWrapper backgroundcolor="#130E56">
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
