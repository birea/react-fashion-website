/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroOverlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  width: 50%;
  min-height: 100vh;
  background: #f1b8c4;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
`;

export default HeroOverlay;
