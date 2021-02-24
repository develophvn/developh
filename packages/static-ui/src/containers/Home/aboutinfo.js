import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Display2, H6, Label1, Paragraph1 } from "baseui/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faSlack } from "@fortawesome/free-brands-svg-icons";
import { Button, SHAPE } from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";

import FullScreenWrapper from "../../components/fullscreenwrapper";
import Card from "../../components/card";

const Contacts = [
  {
    title: "Email",
    icon: faEnvelope,
    link: "mailto:contact@develophvn.tech",
  },
  {
    title: "Slack",
    icon: faSlack,
    link: "https://develophvietnam.slack.com",
  },
  {
    title: "Website",
    icon: faGlobe,
    link: "https://www.develophvn.tech",
  },
  {
    title: "Fanpage",
    icon: faFacebook,
    link: "https://www.facebook.com/develophvn",
  },
];

const ContactButton = ({ item }) => (
  <Button
    $as="a"
    overrides={{
      Root: {
        style: {
          marginTop: "12px",
        },
      },
    }}
    shape={SHAPE.pill}
    startEnhancer={() => <FontAwesomeIcon icon={item.icon} />}
    href={item.link}
    target="_blank"
  >
    {item.title}
  </Button>
);

export default function AboutInfo({ aboutInfo }) {
  return (
    <FullScreenWrapper backgroundcolor="#B7A0FF">
      <Display2 color="white" maxWidth="800px" margin="0 auto">
        <FormattedMessage id="contactTitle" />
      </Display2>
      <Block marginTop="4rem" marginBottom="4rem">
        <Grid>
          {aboutInfo.map((item) => (
            <Cell key={item.title} span={[12, 12, 6]}>
              <Card textalign="center">
                <Label1 color="white">{item.title}</Label1>
                <Paragraph1 color="grey">{item.description}</Paragraph1>
              </Card>
            </Cell>
          ))}
        </Grid>
      </Block>
      <H6 color="white">
        <FormattedMessage id="contactSubtitle" />
      </H6>
      <Grid>
        {Contacts.map((item) => (
          <Cell key={item.title} span={[12, 4, 3]}>
            <ContactButton item={item} />
          </Cell>
        ))}
      </Grid>
    </FullScreenWrapper>
  );
}
