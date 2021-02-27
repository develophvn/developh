import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Display2, Display3, H6, Label1, Paragraph1 } from "baseui/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faSlack } from "@fortawesome/free-brands-svg-icons";
import { Button } from "baseui/button";
import { Card as BaseCard, StyledBody } from "baseui/card";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";

import FullScreenWrapper from "../../components/fullscreenwrapper";
import Card from "../../components/card";
import UsersBubble from "../../components/usersbubble";

const Contacts = [
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
    title: "Email: contact@develophvn.tech",
    icon: faEnvelope,
    link: "mailto:contact@develophvn.tech",
  },
  {
    title: "Fanpage: facebook.com/develophvn",
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
          textAlign: "left",
        },
      },
    }}
    startEnhancer={() => <FontAwesomeIcon icon={item.icon} />}
    href={item.link}
    target="_blank"
  >
    {item.title}
  </Button>
);

export default function Contact({ aboutInfo, users }) {
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
      <BaseCard
        overrides={{
          Root: {
            style: {
              textAlign: "left",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "12px",
            },
          },
          Body: {
            style: {
              marginLeft: "0px",
            },
          },
        }}
      >
        <StyledBody>
          <Grid>
            {Contacts.map((item) => (
              <Cell key={item.title} span={[12, 12, 12]}>
                <ContactButton item={item} />
              </Cell>
            ))}
          </Grid>
        </StyledBody>
      </BaseCard>
      <Display3 color="white">
        <FormattedMessage id="leaderSectionTitle" />
      </Display3>
      <UsersBubble users={users} />
    </FullScreenWrapper>
  );
}
