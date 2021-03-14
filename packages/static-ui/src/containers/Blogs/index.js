import * as React from "react";
import { get } from "lodash";
import { FormattedMessage } from "react-intl";
import { Avatar } from "baseui/avatar";
import { useStyletron, expandBorderStyles } from "baseui/styles";
import { Display2, H6, Label1 } from "baseui/typography";
import { styled } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

import {
  Card,
  StyledBody,
  StyledAction,
  StyledContents,
  StyledTitle,
} from "baseui/card";
import { Button } from "baseui/button";
import HTML2React from "html2react";

import FeaturedImage from "../../static/default_featured_image.jpeg";
import FullScreenWrapper from "../../components/fullscreenwrapper";

const BlogWrapper = styled("div", {
  minHeight: "100vh",
  backgroundColor: "#130E56",
  paddingTop: "3rem",
  paddingLeft: "3rem",
  paddingRight: "3rem",
});

const BlogPostCard = ({ item }) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        paddingTop: "12px",
        paddingBottom: "12px",
      })}
    >
      <Card
        overrides={{
          Root: {
            style: {
              maxWidth: "400px",
              maxHeight: "800px",
              borderTopWidth: "0px",
              borderLeftWidth: "0px",
              borderRightWidth: "0px",
              paddingBottom: "6px",
            },
          },
          HeaderImage: {
            style: { width: "100%", objectFit: "cover", maxHeight: "200px" },
          },
          Title: {
            style: { color: "green" },
          },
        }}
        key={get(item, "uri")}
        headerImage={get(item, "featuredImage.url", FeaturedImage)}
      >
        <StyledTitle>{get(item, "title", "Default Blog")}</StyledTitle>
        <StyledContents>{HTML2React(get(item, "excerpt", ""))}</StyledContents>
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
        <StyledAction>
          <Button
            $as="a"
            href={get(item, "uri", "/")}
            overrides={{
              BaseButton: { style: { width: "90%" } },
            }}
          >
            <FormattedMessage id="detailButton" />
          </Button>
        </StyledAction>
      </Card>
    </div>
  );
};

// markup
const Blog = ({ nodes }) => {
  return (
    <FullScreenWrapper>
      <BlogWrapper>
        <Display2 color="white" maxWidth="500px" margin="0 auto">
          <FormattedMessage id="blogTitle" />
        </Display2>
        <H6 color="white">
          <FormattedMessage id="blogSubtitle" />
        </H6>
        <Grid>
          {nodes.map((item) => (
            <Cell span={[12, 4, 4]} key={item.uri}>
              <BlogPostCard item={item} />
            </Cell>
          ))}
        </Grid>
      </BlogWrapper>
    </FullScreenWrapper>
  );
};

export default Blog;
