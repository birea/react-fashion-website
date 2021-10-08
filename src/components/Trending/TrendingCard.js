/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TrendingCard = ({ cardImg, price, discount, cartItem }) => {
  return (
    <div css={styles} className="trendingCard">
      <div className="trendingBg">
        <img src={cardImg} alt="model" />
      </div>
      <div className="trendingDesc">
        <a href="#/">Young Woman Wearing Dress</a>
        <div className="trendingInfo">
          <div className="trendingPrice">
            {discount && <span>{discount}</span>}
            <p>{price}</p>
          </div>
          <div className="trendingRating">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
      </div>
      {cartItem && (
        <div className="cartWrap">
          <div className="cartInfo">
            <a href="#/">
              ADD TO CART
              <i className="fas fa-plus fa-sm"></i>
            </a>
          </div>
          <i className="far fa-heart"></i>
        </div>
      )}
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 380px;
  color: #000;
  .trendingBg {
    overflow: hidden;
    width: 100%;
    height: 580px;
    img {
      width: 100%;
      height: 100%;
      display: block;
      transition: transform 600ms ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .trendingDesc {
    padding: 24px;
    a {
      text-decoration: none;
      display: inline-block;
      color: #000;
      font-size: 17px;
      font-weight: 300;
    }
    .trendingInfo {
      padding: 17px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .trendingPrice {
        display: flex;
        font-size: 19px;
        span {
          color: #b3b3b3;
          font-weight: 500;
          margin-right: 14px;
          text-decoration: line-through;
        }
      }
    }
    .trendingRating {
      i {
        color: #808080;
        &:not(:last-of-type) {
          margin-right: 4px;
        }
      }
    }
  }
  .cartWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .cartInfo {
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: #000;
        font-size: 15px;
        font-weight: 300;
      }
      i {
        margin-left: 5px;
      }
    }
  }
  @media (max-width: 750px) {
    max-width: 100%;
  }
  @media (min-width: 751px) and (max-width: 1360px) {
    max-width: 96%;
  }
`;

export default TrendingCard;
