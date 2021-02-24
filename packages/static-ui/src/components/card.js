import { styled } from "baseui";

const Card = styled("div", ({ $theme, ...props }) => ({
  width: props.width || "250px",
  height: props.height || "200px",
  textAlign: props.textalign || "left",
  borderColor: "transparent",
  margin: "0 auto",
}));

export default Card;
