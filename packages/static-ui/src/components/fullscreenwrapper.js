import { styled } from "baseui";

const FullScreenWrapper = styled("div", ({ $theme, ...props }) => ({
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: props.backgroundcolor || $theme.colors.backgroundPrimary,
  backgroundImage: props.backgroundimage || "none",
  paddingTop: "12rem",
  paddingBottom: "12rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}));

export default FullScreenWrapper;
