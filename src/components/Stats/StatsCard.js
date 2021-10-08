/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StatsCard = ({ statsNum, statsText }) => (
  <div css={styles} className="statsCard">
    <p>{statsNum}</p>
    <span>{statsText}</span>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 320px;
  text-align: center;
  p {
    font-size: 30px;
    line-height: 1;
    color: #000;
    font-weight: 600;
  }
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
    margin: 12px 0 0 0;
    display: block;
  }
  @media (max-width: 740px) {
    max-width: 40%;
    margin: 18px 0;
  }
`;

export default StatsCard;
