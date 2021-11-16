import * as React from "react";
import Home from "../containers/Home";

const Data = {
  hero: {
    images: {
      bg: {
        front: {
          src: "/images/home/pins.webp",
          srcset: [
            {on: "500w", src: "/images/home/pins-500.webp"},
            {on: "1600w", src: "/images/home/pins-1600.webp"},
            {on: "2000w", src: "/images/home/pins-2000.webp"},
            {on: "2455w", src: "/images/home/pins-2455.webp"}
          ]
        },
        cover: [
          "/images/home/Web_Cover.webp",
          "/images/home/Web_Cover.webp"
        ]
      }
    }
  },
  aboutUs: {
    title: "Sooo, who are we?",
    description: "Founded in 2020, the two founders envision a future where technology education is inclusive and Developh Vietnam is the core to unleash full potential of aspiring software engineers.",
    offers: [
      {
        title: "Developh Class",
        icon: "/images/Icon_1.svg",
        description:
            "An inclusive education platform for anyone aspiring to become coders or designers in the near future.",
      },
      {
        title: "Mentoring Session",
        icon: "/images/Icon_2.svg",
        description:
            "Developh mentors are willing to answer your code questions, fix bugs and practice mock interviews with you.",
      },
      {
        title: "TechTalk Series",
        icon: "/images/Icon_3.svg",
        description:
            "Experts from big corporates are invited to share their personal Tech journeys and orientate your career paths.",
      },
      {
        title: "Outsourcing",
        icon: "/images/Icon_4.svg",
        description:
            "Developh internal team offer utsourcing services ( web applications ) to other organizations.",
      },
      {
        title: "Hackathon",
        icon: "/images/Icon_5.svg",
        description:
            "A playground of tech enthusiasts to transform ideas into demo products in just 24 to 36 hours.",
      },
      {
        title: "Career Fair",
        icon: "/images/Icon_6.svg",
        description:
            "Developh provides suitable working opportunities from trusted companies for students.",
      },
    ]
  },
  event: {
    title: "Since the foundation, we have organized various events tailored for developers of different levels and interests",
    events: [
      {
        image: "/images/home/web-wallpaper.webp",
        title: "Design of Things",
        startDate: "Sep 05 2021",
        endDate: "Oct 10 2021",
        link: "#",
        tags: [
          {title: "Design", color: "#0669ff"},
          {title: "Mentoring Program", color: "#0AB88A"}
        ]
      },
      {
        image: "/images/home/diy-program-01.webp",
        title: "Do it Yourself Program",
        startDate: "Jul 15 2021",
        endDate: "Oct 30 2021",
        link: "https://www.facebook.com/events/2848424778581476/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
        tags: [
          {title: "Tech", color: "#0669ff"},
          {title: "Mentoring Program", color: "#0AB88A"}
        ]
      },
      {
        image: "/images/home/empower.webp",
        title: "EmPower: Uncovering UX/UI World",
        startDate: "Mar 07 2021",
        endDate: "May 07 2021",
        link: "https://www.facebook.com/events/739583093596043?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D",
        tags: [
          {title: "Design", color: "#0669ff"},
          {title: "Special Event", color: "#0AB88A"}
        ]
      },
      {
        image: "/images/home/unicode.webp",
        title: "Unicode: Into the Tech World",
        startDate: "November 28 2020",
        endDate: "Dev 06 2020",
        link: "https://www.facebook.com/events/1070462483385271/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D",
        tags: [
          {title: "Tech", color: "#0669ff"},
          {title: "Special Event", color: "#0AB88A"}
        ]
      }
    ]
  },
  testimonial: {
    title: "...and we has received a lot of support from everyone",
    testimonials: [
      {
        avatar: "/images/home/hanhlinh.webp",
        name: "Linh Hanh Nguyen",
        position: "Mentee @ Design of Things",
        color: "#FF9502",
        statement: "Awesome! I think this is the best course I have signed up for this year, really learned a lot! I feel like I'm alive!"
      },
      {
        avatar: "/images/home/duong.webp",
        name: "Thuy Duong Le Nguyen",
        position: "Mentee @ Design of Things",
        color: "#FF9502",
        statement: "I really appreciate that Developh allows everyone to make their own first products and give very detailed feedback!"
      },
      {
        avatar: "/images/home/quan.webp",
        name: "Hoang Minh Quan",
        position: "Mentee @ Do it Yourself Program",
        color: "#0669FF",
        statement: "The mentors are very enthusiastic, in addition to the lecture, we also shared more practical experience in the industry. Worth participating!"
      },
      {
        avatar: "/images/home/quan.webp",
        name: "Hoang Doan Nguyen",
        position: "Participant @ Unicode: Into the Tech World",
        color: "#0AB88A",
        statement: "I received very useful shares, it helps me have a better overview of fullstack development and will definitely be useful in the future!"
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
