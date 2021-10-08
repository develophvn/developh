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
  event: {
    title: "Since the foundation, we have organized various events tailored for developers of different levels and interests",
    events: [
      {
        image: "blog_images/60cdbad25aaef478952fbc4e_109124381_172045777665203_5641674283593689954_n.jpeg",
        title: "Developh’s Fullstack Coding Class",
        date: "May 01 2020",
        link: "#"
      },
      {
        image: "blog_images/60cdbad1558b6c56db63a532_94197204_2045343552277739_451954795763204096_n.jpeg",
        title: "Tech Talks INTO",
        date: "May 10 2020",
        link: "https://www.facebook.com/events/2848424778581476/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D"
      },
      {
        image: "blog_images/60cdbad23fb64cf63f277a2d_124348327_202381101298337_8409323548489703418_n.jpeg",
        title: "Unicode: Into the Tech World",
        date: "November 28 2020",
        link: "https://www.facebook.com/events/1070462483385271/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
      },
      {
        image: "blog_images/60cdbad27d6b227c2901ace9_152032347_265495371653576_8386793872028597589_n.jpeg",
        title: "EmPower: Uncovering UX/UI World",
        date: "Mars 07 2021",
        link: "https://www.facebook.com/events/739583093596043?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
      }
    ]
  },
  footer: {
    title: "We nurture young change-makers through technology and education",
    info: [
      {
        description: "At Developh Vietnam, our team bonds as teammates and friends. Together, we create magic and keep the organization on track.",
        button: "Connect With Us",
        link: "https://www.facebook.com/develophvn"
      },
      {
        description: "Join us to create a brighter future with technology and innovation, for the people and the world.",
        button: "Support Us",
        link: "https://www.paypal.com/paypalme/Linh137"
      }
    ]
  }
}

// markup
const IndexPage = () => {
  return <Home data={Data}/>;
};

export default IndexPage;
