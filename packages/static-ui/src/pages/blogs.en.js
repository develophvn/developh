import * as React from "react";
import { get } from "lodash";
import { graphql } from "gatsby";
import languages from "../languages";
import Blog from "../containers/Blogs";

// markup
const BlogPage = ({
  data: {
    allWpPost: { nodes },
  },
}) => {
  const showingNodes = React.useMemo(
    () =>
      nodes.filter(
        (item) =>
          get(item, "tags.nodes", []).some(
            (tag) => tag.name === languages.defaultLangKey
          ) ||
          languages.langs.every((lang) =>
            get(item, "tags.nodes", []).every((tag) => tag.name !== lang)
          )
      ),
    [nodes]
  );
  return <Blog nodes={showingNodes} />;
};

export const query = graphql`
  query AllWpPostEN {
    allWpPost {
      nodes {
        uri
        title
        excerpt
        author {
          node {
            username
            firstName
            lastName
            avatar {
              url
            }
            email
            description
          }
        }
        featuredImage {
          node {
            uri
            title
            sourceUrl
          }
        }
        status
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default BlogPage;
