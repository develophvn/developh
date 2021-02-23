import * as React from "react";
import { get } from "lodash";
import { graphql } from "gatsby";
import { Avatar } from "baseui/avatar";
import { useStyletron, expandBorderStyles } from "baseui/styles";
import { Display2, H6, Label1 } from "baseui/typography";
import languages from "../languages";
import {
  Card,
  StyledBody,
  StyledAction,
  StyledContents,
  StyledHeaderImage,
} from "baseui/card";
import { Button } from "baseui/button";
import HTML2React from "html2react";

// markup
const BlogPage = ({
  data: {
    allWpPost: { nodes },
  },
}) => {
  console.log(nodes);
  const [css] = useStyletron();
  return (
    <div
      className={css({
        minHeight: "100vh",
        backgroundColor: "#130E56",
        paddingTop: "6rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      })}
    >
      <Display2 color="white" maxWidth="500px" margin="0 auto">
        Welcome to our blogs
      </Display2>
      <H6 color="white">Here are some of our thoughts</H6>
      <div
        className={css({
          textAlign: "left",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        })}
      >
        {nodes
          .filter(
            (item) =>
              get(item, "tags.nodes", []).some(
                (tag) => tag.name === languages.defaultLangKey
              ) ||
              languages.langs.every((lang) =>
                get(item, "tags.nodes", []).every((tag) => tag.name !== lang)
              )
          )
          .map((item) => (
            <Card
              key={get(item, "uri")}
              title={get(item, "title", "Default Blog")}
              overrides={{
                Root: {
                  style: {
                    margin: "0 auto",
                    marginTop: "12px",
                    marginBottom: "12px",
                    maxWidth: "900px",
                  },
                },
              }}
            >
              {item.featuredImage && (
                <StyledHeaderImage src={get(item, "featuredImage.url", "")} />
              )}
              <StyledBody>
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: ".25rem",
                  })}
                >
                  <Avatar
                    overrides={{
                      Root: {
                        style: ({ $theme }) => ({
                          ...expandBorderStyles($theme.borders.border500),
                          marginRight: "12px",
                        }),
                      },
                    }}
                    name={`${get(item, "author.node.lastName")} ${get(
                      item,
                      "author.node.firstName"
                    )}`}
                    size="scale1000"
                    src={get(item, "author.node.avatar.url")}
                  />
                  <div
                    className={css({
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      padding: ".25rem",
                    })}
                  >
                    <Label1>
                      {get(item, "author.node.lastName")}{" "}
                      {get(item, "author.node.firstName")}
                    </Label1>
                  </div>
                </div>
              </StyledBody>
              <StyledContents>
                {HTML2React(get(item, "excerpt", ""))}
              </StyledContents>
              <StyledAction>
                <Button
                  $as="a"
                  href={get(item, "uri", "/")}
                  overrides={{
                    BaseButton: { style: { width: "100%" } },
                  }}
                >
                  Details
                </Button>
              </StyledAction>
            </Card>
          ))}
      </div>
    </div>
  );
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
