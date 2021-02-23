import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { styled } from "baseui";
import HTML2React from "html2react";

const WordpressPageWrapper = styled("div", {
  paddingTop: "10rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  textAlign: "left",
});

export default function WordpressPage({
  data: {
    wpPage: { title, content, id },
  },
}) {
  return (
    <WordpressPageWrapper>
      <Helmet title={title} defer={false} />
      {HTML2React(content)}
    </WordpressPageWrapper>
  );
}

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;
