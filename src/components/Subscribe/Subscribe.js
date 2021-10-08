/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";

const Subscribe = () => (
  <section css={styles} className="subscribe">
    <Title titleText="SUBSCRIBE TO OUR NEWSLETTER" overlayTitle="Subscribe" />
    <Container>
      <div className="email">
        <input type="email" placeholder="Enter email address" />
        <button>Subscribe</button>
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0 150px 0;
  .title {
    letter-spacing: 1.4px;
  }
  .container {
    max-width: 420px;
    padding: 20px 0 0 0;
    .email {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      input,
      button {
        height: 100%;
        border: none;
        outline: none;
      }
      input {
        width: 70%;
        padding: 0 14px;
        border: 1px solid #000;
        color: #111;
        &::placeholder {
          color: #111;
        }
      }
      button {
        background: #000;
        color: #fff;
        width: 30%;
        font-size: 17px;
      }
    }
  }
  @media (max-width: 940px) {
    .title {
      h4 {
        font-size: 20px;
      }
    }
  }
`;

export default Subscribe;
