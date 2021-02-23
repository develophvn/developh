import * as React from "react";
import { useStyletron } from "styletron-react";
import { styled } from "baseui";
import {
  Display2,
  H6,
  Label2,
  Paragraph2,
  Label1,
  Paragraph1,
} from "baseui/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faSlack } from "@fortawesome/free-brands-svg-icons";
import { Button, SHAPE } from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";

const Centered = styled("div", {
  textAlign: "center",
});

const LeftAlignCard = styled("div", {
  width: "360px",
  height: "200px",
  textAlign: "left",
  borderColor: "transparent",
});

const CenterAlignCard = styled("div", {
  width: "360px",
  height: "200px",
  textAlign: "center",
  borderColor: "transparent",
  margin: "0 auto",
});

const DevelophOffer = [
  {
    title: "Developh Classes",
    description:
      "An inclusive education platform for anyone aspiring to become coders or designers in the near future.",
  },
  {
    title: "Mentoring Session",
    description:
      "Developh mentors are willing to answer your code questions, fix bugs and practice mock interviews with you.",
  },
  {
    title: "TechTalk Series",
    description:
      "Experts from big corporates are invited to share their personal Tech journeys and orientate your career paths.",
  },
  {
    title: "Outsourcing",
    description:
      "Developh internal team offer utsourcing services ( web applications ) to other organizations.",
  },
  {
    title: "Hackathon",
    description:
      "A playground of tech enthusiasts to transform ideas into demo products in just 24 to 36 hours.",
  },
  {
    title: "Career Fair",
    description:
      "Developh provides suitable working opportunities from trusted companies for students.",
  },
];

const AboutUs = [
  {
    title: "Our Missions",
    description:
      "We aim to inspire the youth to master technology skills in our inclusive education platform and together tackle real-world issues.",
  },
  {
    title: "Our Team",
    description:
      "At Developh Vietnam, our team bonds as teammates and friends. Together, we create magic and keep the organization on track.",
  },
];

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

// markup
const IndexPage = () => {
  const [css] = useStyletron();
  return (
    <Centered>
      <div
        className={css({
          minHeight: "100vh",
          backgroundColor: "#130E56",
          paddingTop: "12rem",
        })}
      >
        <Display2 color="white" maxWidth="500px" margin="0 auto">
          Cẩm nang cho công nghệ mới
        </Display2>
        <H6 color="white">Chúng tôi dạy công nghệ cho tất cả mọi người</H6>
        <Button disabled>Học về những khoá học</Button>
      </div>
      <div
        className={css({
          minHeight: "100vh",
          width: "100%",
          background: "white",
          paddingTop: "12rem",
        })}
      >
        <Display2 maxWidth="500px" margin="0 auto">
          We offer inclusive education for IT and design leaners
        </Display2>
        <div className={css({ margin: "25px auto" })}>
          <Grid>
            {DevelophOffer.map((item) => (
              <Cell key={item.title} span={[3, 3, 4]}>
                <LeftAlignCard>
                  <Label2 color="#130E56">{item.title}</Label2>
                  <Paragraph2>{item.description}</Paragraph2>
                </LeftAlignCard>
              </Cell>
            ))}
          </Grid>
        </div>

        <Button disabled>Learn More</Button>
      </div>
      <div
        className={css({
          height: "100vh",
          backgroundColor: "#B7A0FF",
          paddingTop: "12rem",
        })}
      >
        <Display2 color="white" maxWidth="800px" margin="0 auto">
          We bring creative solutions by the use of technology to build a better
          society
        </Display2>
        <div className={css({ margin: "0 auto" })}>
          <Grid>
            {AboutUs.map((item) => (
              <Cell key={item.title} span={6}>
                <CenterAlignCard>
                  <Label1 color="white">{item.title}</Label1>
                  <Paragraph1 color="grey">{item.description}</Paragraph1>
                </CenterAlignCard>
              </Cell>
            ))}
          </Grid>
        </div>
        <H6 color="white">
          Join us in creating a brighter future for the people, the technology,
          and the world.
        </H6>
        <div className={css({ margin: "0 auto" })}>
          <Grid>
            {Contacts.map((item) => (
              <Cell key={item.title} span={[1, 2, 3]}>
                <Button
                  $as="a"
                  shape={SHAPE.pill}
                  startEnhancer={() => <FontAwesomeIcon icon={item.icon} />}
                  href={item.link}
                  target="_blank"
                >
                  {item.title}
                </Button>
              </Cell>
            ))}
          </Grid>
        </div>
      </div>
    </Centered>
  );
};

export default IndexPage;
