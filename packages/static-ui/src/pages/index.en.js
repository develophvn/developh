import * as React from "react";
import Home from "../containers/Home";

const Data = {
  hero: {
    images: {
      bg: {
        src: "./images/611634f1f5543c66e7859c9f_pins_png.png"
      }
    }
  },
  aboutUs: {
    title: "Sooo, who are we?",
    description: "Founded in 2020, the two founders envision a future where technology education\n              is inclusive and Developh Vietnam is the core to unleash full potential of aspiring software engineers.",
    offers: [
      {
        title: "Developh Class",
        icon: "./others/60cd6b0f3ce5ae7a78c6bb13_Icon_1.svg",
        description:
            "An inclusive education platform for anyone aspiring to become coders or designers in the near future.",
      },
      {
        title: "Mentoring Session",
        icon: "./others/60cd6b107a998880c6c98307_Icon_2.svg",
        description:
            "Developh mentors are willing to answer your code questions, fix bugs and practice mock interviews with you.",
      },
      {
        title: "TechTalk Series",
        icon: "./others/60cd6b103e9cf4a2674714be_Icon_3.svg",
        description:
            "Experts from big corporates are invited to share their personal Tech journeys and orientate your career paths.",
      },
      {
        title: "Outsourcing",
        icon: "./others/60cd6b0f2b4936135f504e19_Icon_4.svg",
        description:
            "Developh internal team offer utsourcing services ( web applications ) to other organizations.",
      },
      {
        title: "Hackathon",
        icon: "./others/60cd6b1008b297b4281edd78_Icon_5.svg",
        description:
            "A playground of tech enthusiasts to transform ideas into demo products in just 24 to 36 hours.",
      },
      {
        title: "Career Fair",
        icon: "./others/60cd6b10e3a3100e393d7db3_Icon_6.svg",
        description:
            "Developh provides suitable working opportunities from trusted companies for students.",
      },
    ]
  },
  event: {},
  footer: {}
}

// markup
const IndexPage = () => {
  return <Home data={Data}/>;
};

export default IndexPage;
