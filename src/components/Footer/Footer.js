/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CardContainer from "./CardContainer";

const Footer = () => (
  <footer css={styles} id="contact">
    <CardContainer />
    <div className="copyright">
      <p>
        Copyright &copy;2020 All rights reserved | This template is made with
        <i className="fas fa-heart"></i> by
        <a
          href="https://colorlib.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colorlib
        </a>
      </p>
    </div>
  </footer>
);

const styles = css`
  width: 100%;
  background: #f8f9fa;
  padding: 120px 0;
  .copyright {
    text-align: center;
    color: #000;
    padding: 120px 0 0 0;
    p {
      font-size: 18px;
      font-weight: 500;
      i {
        margin: 0 6px;
      }
      a {
        text-decoration: none;
        display: inline-block;
        color: #f1b8c4;
        margin-left: 6px;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 1350px) {
    .copyright {
      max-width: 80%;
      margin: 0 auto;
    }
  }
`;

export default Footer;
