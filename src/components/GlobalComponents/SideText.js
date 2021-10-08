/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SideText = () => (
  <div css={styles} className="sideText">
    <p>MODIST - TIME TO GET DRESS</p>
    <p>SINCE - 1985</p>
  </div>
);

const styles = css`
  p {
    z-index: 1;
    position: fixed;
    font-size: 20px;
    line-height: 1;
    font-weight: 300;
    top: 50%;
    transform: translateY(-50%);

    &:first-of-type {
      transform: rotate(-90deg);
      left: -110px;
    }
    &:last-of-type {
      transform: rotate(90deg);
      right: -34px;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default SideText;
