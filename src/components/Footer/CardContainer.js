/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";

const CardContainer = () => (
  <div className="cardContainer" css={styles}>
    <Container>
      <div className="card one">
        <h2>MODIST</h2>
        <div className="iconContainer">
          <div className="icon">
            <i className="fab fa-twitter fa-lg"></i>
          </div>
          <div className="icon">
            <i className="fab fa-facebook-f fa-lg"></i>
          </div>
          <div className="icon">
            <i className="fab fa-instagram fa-lg"></i>
          </div>
        </div>
      </div>
      <div className="card two">
        <h2>MENU</h2>
        <a href="#/">Shop</a>
        <a href="#/">About</a>
        <a href="#/">Journal</a>
        <a href="#/">Contact Us</a>
      </div>
      <div className="card three">
        <h2>HELP</h2>
        <div className="row">
          <a href="#/">Shipping Information</a>
          <a href="#/">FAQs</a>
        </div>
        <div className="row">
          <a href="#/">Returns & Exchange</a>
          <a href="#/">Contact</a>
        </div>
        <div className="row">
          <a href="#/">Terms & Conditions</a>
        </div>
        <div className="row">
          <a href="#/">Privacy Policy</a>
        </div>
      </div>
      <div className="card four">
        <h2>HAVE A QUESTIONS?</h2>
        <div className="row">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            203 Fake St. Mountain View, <br /> San Francisco, California, USA
          </p>
        </div>
        <div className="row">
          <i className="fas fa-phone"></i>
          <a href="#/"> +2 392 3929 210</a>
        </div>
        <div className="row">
          <i className="fas fa-envelope"></i>
          <a href="#/">info@yourdomain.com</a>
        </div>
      </div>
    </Container>
  </div>
);

const styles = css`
  .container {
    display: flex;
    justify-content: space-between;
    .card {
      width: 100%;
      max-width: 300px;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h2 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 34px;
      }
      a {
        text-decoration: none;
        display: inline-block;
        color: #000;
      }
      &.one {
        .iconContainer {
          padding: 40px 0 0 0;
          display: flex;
          .icon {
            width: 53px;
            height: 53px;
            background: rgba(0, 0, 0, 0.02);
            border-radius: 50%;
            display: flex;
            margin-right: 14px;
            i {
              margin: auto;
              color: #000;
            }
          }
        }
      }
      &.two {
        max-width: 140px;
        a {
          &:not(:last-of-type) {
            margin-bottom: 36px;
          }
        }
      }
      &.three {
        .row {
          display: flex;
          justify-content: space-between;
          &:not(:last-of-type) {
            margin-bottom: 36px;
          }
        }
      }
      &.four {
        .row {
          display: flex;
          align-items: center;
          i {
            margin-right: 20px;
          }
          p {
            line-height: 1.8;
          }
          &:not(:last-of-type) {
            margin-bottom: 26px;
          }
          &:first-of-type {
            align-items: flex-start;
            i {
              padding: 6px 0 0 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: 720px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (min-width: 721px) and (max-width: 1280px) {
    .container {
      flex-wrap: wrap;
      .card {
        max-width: 45%;
        &.two {
          max-width: 45%;
        }
      }
    }
  }
  @media (max-width: 1350px) {
    .container {
      max-width: 80%;
      .card {
        &:not(:last-of-type) {
          margin-bottom: 60px;
        }
      }
    }
  }
`;

export default CardContainer;
