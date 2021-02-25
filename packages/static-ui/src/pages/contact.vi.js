import * as React from "react";
import { graphql } from "gatsby";
import Contact from "../containers/Contact";

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
const ContactPage = ({
  data: {
    allWpUser: { nodes },
  },
}) => {
  return <Contact users={nodes} aboutInfo={AboutInfo} />;
};

export const query = graphql`
  query WpUserVi {
    allWpUser {
      nodes {
        email
        description
        lastName
        firstName
        nickname
        name
        avatar {
          url
          width
          size
          scheme
          rating
          height
          foundAvatar
          forceDefault
          extraAttr
          default
        }
      }
    }
  }
`;

export default ContactPage;
