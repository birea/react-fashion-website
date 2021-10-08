/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ServiceCard = ({ serviceTitle }) => (
  <div css={styles} className="serviceCard">
    <div className="box"></div>
    <span>{serviceTitle}</span>
    <p>
      Even the all-powerful Pointing has no control about the blind texts it is
      an almost unorthographic.
    </p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .box {
    width: 36px;
    height: 48px;
    border: 2px solid #000;
  }
  span {
    margin: 44px 0 22px 0;
    font-size: 18px;
  }
  p {
    color: gray;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
  }
  @media (max-width: 850px) {
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 851px) and (max-width: 1350px) {
    max-width: 47%;
    &:last-of-type {
      margin-top: 50px;
    }
  }
`;

export default ServiceCard;
