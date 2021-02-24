import React from "react";
import { FormattedMessage } from "react-intl";
import { Display2, Paragraph2, Label2 } from "baseui/typography";
import { Button } from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Card from "../../components/card";
import FullScreenWrapper from "../../components/fullscreenwrapper";

export default function OfferInfo({ offers }) {
  return (
    <FullScreenWrapper>
      <Display2 maxWidth="500px" margin="0 auto">
        <FormattedMessage id="offerInfoTitle" />
      </Display2>
      <Block marginTop="4rem" marginBottom="4rem">
        <Grid>
          {offers.map((item) => (
            <Cell key={item.title} span={[12, 4, 4]}>
              <Card>
                <Label2 color="#130E56">{item.title}</Label2>
                <Paragraph2>{item.description}</Paragraph2>
              </Card>
            </Cell>
          ))}
        </Grid>
      </Block>
      <Button disabled>
        <FormattedMessage id="detailButton" />
      </Button>
    </FullScreenWrapper>
  );
}
