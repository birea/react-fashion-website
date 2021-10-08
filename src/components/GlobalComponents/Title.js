/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = ({ titleText, overlayTitle }) => (
  <div css={styles} className="title">
    <h2>{overlayTitle}</h2>
    <h4>{titleText}</h4>
  </div>
);

const styles = css`
  position: relative;
  text-align: center;
  h2 {
    font-size: 150px;
    line-height: 1;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.04);
  }
  h4 {
    font-size: 34px;
    font-weight: 400;
    line-height: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 34px 0 0 0;
  }
  @media (max-width: 940px) {
    h2 {
      font-size: 70px;
    }
    h4 {
      padding: 8px 0 0 0;
    }
  }
`;

export default Title;
