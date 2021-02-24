import * as React from "react";
import { get } from "lodash";
import { List } from "react-virtualized";
import { FormattedMessage } from "react-intl";
import { Avatar } from "baseui/avatar";
import { useStyletron, expandBorderStyles } from "baseui/styles";
import { Display2, H6, Label1 } from "baseui/typography";
import { styled } from "baseui";
import {
  Card,
  StyledBody,
  StyledAction,
  StyledContents,
  StyledHeaderImage,
} from "baseui/card";
import { Button } from "baseui/button";
import HTML2React from "html2react";

const BlogWrapper = styled("div", {
  minHeight: "100vh",
  backgroundColor: "#130E56",
  paddingTop: "6rem",
  paddingLeft: "3rem",
  paddingRight: "3rem",
});

const BlogPostCard = ({ item }) => {
  const [css] = useStyletron();
  return (
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
            height: "240px",
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
      <StyledContents>{HTML2React(get(item, "excerpt", ""))}</StyledContents>
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
  );
};

// markup
const Blog = ({ nodes }) => {
  const [css] = useStyletron();
  console.log(nodes);
  const rowRenderer = React.useCallback(
    ({
      index, // Index of row
      isScrolling, // The List is currently being scrolled
      isVisible, // This row is visible within the List (eg it is not an overscanned row)
      key, // Unique key within array of rendered rows
      parent, // Reference to the parent List (instance)
      style, // Style object to be applied to row (to position it);
      // This must be passed through to the rendered row element.
    }) => (
      <div key={key} style={style}>
        <BlogPostCard item={nodes[index]} key={key} />
      </div>
    ),
    [nodes]
  );

  return (
    <BlogWrapper>
      <Display2 color="white" maxWidth="500px" margin="0 auto">
        <FormattedMessage id="blogTitle" />
      </Display2>
      <H6 color="white">
        <FormattedMessage id="blogSubtitle" />
      </H6>
      <div
        className={css({
          textAlign: "left",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        })}
      >
        <List
          height={800}
          width="100%"
          rowCount={nodes.length}
          rowHeight={250}
          rowRenderer={rowRenderer}
        />
      </div>
    </BlogWrapper>
  );
};

export default Blog;
