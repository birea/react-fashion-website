/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroInfo = () => (
  <div css={styles} className="heroInfo">
    <h2>LE STYLIST</h2>
    <div className="heroDesc">
      <span></span>
      <p>WEAR YOUR DRESS</p>
      <span></span>
    </div>
    <a href="#trending">
      <div className="scroll">
        <i className="fas fa-angle-down fa-2x"></i>
      </div>
    </a>
  </div>
);

const styles = css`
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 640px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 130px;
    line-height: 1;
    font-weight: 700;
  }
  .heroDesc {
    padding: 50px 0;
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 40px;
      height: 1px;
      margin: 0 20px;
      background: #fff;
    }
    p {
      font-size: 21px;
      line-height: 1;
    }
  }
  a {
    text-decoration: none;
    .scroll {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      display: flex;
      margin: 140px 0 0 0;
      i {
        color: #000;
        margin: auto;
        animation: animateScroll 1s infinite;
        transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
      }
    }
  }
  @keyframes animateScroll {
    from {
      transform: translateY(-14px);
      opacity: 0.8;
    }
    to {
      transform: translateY(14px);
      opacity: 0.2;
    }
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 70px;
    }
    .heroDesc {
      padding: 20px 0;
      p {
        font-size: 18px;
      }
    }
    a {
      .scroll {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

export default HeroInfo;
