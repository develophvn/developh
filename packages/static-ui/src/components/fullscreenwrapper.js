import { styled } from "baseui";

const FullScreenWrapper = styled("div", ({ $theme, ...props }) => ({
  minHeight: "100vh",
  width: "100vw",
  backgroundImage: props.backgroundimage || "none",
  backgroundColor: props.backgroundcolor || $theme.colors.backgroundPrimary,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}));

export default FullScreenWrapper;
