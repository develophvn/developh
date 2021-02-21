import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { styled } from "baseui";
import HTML2React from "html2react";

const WordpressPostWrapper = styled("div", {
  paddingTop: "5rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  textAlign: "left",
});

export default function WordpressPost({
  data: {
    wpPost: { title, content, id },
  },
}) {
  console.log(title, content, id);
  return (
    <WordpressPostWrapper>
      <Helmet title={title} defer={false} />
      {HTML2React(content)}
    </WordpressPostWrapper>
  );
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;
