import React from "react";
import { styled } from "frontity";
import Image from "@frontity/components/image";

const ContentImage = (props) => {
  if (props.width && props.height) {
    return (
      <Container height={props.height} width={props.width}>
        <Image {...props} />
      </Container>
    );
  } else {
    return <Image {...props} />;
  }
};

const image = {
  test: ({ node }) => node.component === "img",
  processor: ({ node }) => {
    if (node.parent?.component === "noscript") return null;

    if (node.props["data-src"]) {
      node.props.src = node.props["data-src"];
    }

    if (node.props["data-srcset"]) {
      node.props.srcSet = node.props["data-srcset"];
    }

    node.component = ContentImage;

    return node;
  },
};

export default image;

const Container = styled.span`
  noscript > img {
    position: absolute;
    height: 100%;
  }
`;
