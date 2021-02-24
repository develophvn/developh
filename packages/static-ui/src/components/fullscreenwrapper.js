import { styled } from "baseui";

const FullScreenWrapper = styled("div", ({ $theme, ...props }) => ({
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: props.backgroundcolor || $theme.colors.backgroundPrimary,
  paddingTop: "12rem",
  paddingBottom: "12rem",
}));

export default FullScreenWrapper;
