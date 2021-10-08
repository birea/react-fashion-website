/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TestimonialCard = ({ userImg }) => (
  <div css={styles} className="testimonialCard">
    <div
      style={{ background: `url(${userImg}) no-repeat center/cover` }}
      className="userBg"
    >
      <div className="quote">
        <i className="fas fa-quote-left fa-lg"></i>
      </div>
    </div>
    <p>
      A small river named Duden flows by their place and supplies it with the
      necessary regelialia. It is a paradisematic country, in which roasted
      parts of sentences fly into your mouth.
    </p>
    <h4>Roger Scott</h4>
    <span>Customer</span>
  </div>
);

const styles = css`
  width: 100%;
  padding: 60px 0;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .userBg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    .quote {
      position: absolute;
      bottom: -10px;
      right: 0;
      background: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      i {
        margin: auto;
        color: #999;
      }
    }
  }
  p {
    color: #808080;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.8;
    padding: 40px 0;
  }
  h4 {
    color: #000;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
  }
  span {
    color: #000;
    margin: 16px 0 0 0;
    font-weight: 300;
  }
  @media (max-width: 940px) {
    p {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`;

export default TestimonialCard;
