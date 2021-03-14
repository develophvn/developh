import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { styled } from "baseui";
import { H1, Paragraph1 } from "baseui/typography";
import HTML2React from "html2react";
import BlogContentWrapper from "../components/blogcontentwrapper";

const WordpressPostWrapper = styled("div", {
  paddingTop: "3rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingBottom: "5rem",
  textAlign: "left",
  maxWidth: "900px",
  margin: "0 auto",
});

export default function WordpressPost({
  data: {
    wpPost: { title, content },
  },
}) {
  return (
    <WordpressPostWrapper>
      <Helmet title={title} defer={false} />
      <BlogContentWrapper>
        <H1>{title}</H1>
        {HTML2React(content, {
          p: Paragraph1,
        })}
      </BlogContentWrapper>
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
