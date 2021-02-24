import * as React from "react";
import Home from "../containers/Home";

const DevelophOffer = [
  {
    title: "Khoá học Developh",
    description:
      "An inclusive education platform for anyone aspiring to become coders or designers in the near future.",
  },
  {
    title: "Khoá học với Gia sư",
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

const AboutInfo = [
  {
    title: "Về sứ mệnh",
    description:
      "We aim to inspire the youth to master technology skills in our inclusive education platform and together tackle real-world issues.",
  },
  {
    title: "Về Team",
    description:
      "At Developh Vietnam, our team bonds as teammates and friends. Together, we create magic and keep the organization on track.",
  },
];

// markup
const IndexPage = () => {
  return <Home aboutInfo={AboutInfo} offers={DevelophOffer} />;
};

export default IndexPage;
