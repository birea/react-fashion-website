/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import TrendingCard from "../Trending/TrendingCard";
import ProductOne from "../../img/productOne.jpg";
import ProductTwo from "../../img/productTwo.jpg";
import ProductThree from "../../img/productThree.jpg";
import ProductFour from "../../img/productFour.jpg";

const Products = () => (
  <section css={styles} className="products" id="shop">
    <Title titleText="Products" overlayTitle="PRODUCTS" />
    <Container>
      <TrendingCard cartItem={true} price="$120" cardImg={ProductOne} />
      <TrendingCard cartItem={true} price="$120" cardImg={ProductTwo} />
      <TrendingCard cartItem={true} price="$120" cardImg={ProductThree} />
      <TrendingCard cartItem={true} price="$120" cardImg={ProductFour} />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 80px 0;
  background: #f8f9fa;
  .title {
    h4 {
      top: 42%;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    padding: 40px 0 0 0;
    .trendingCard {
      max-width: 400px;
      background: #fff;
    }
  }
  @media (max-width: 820px) {
    .container {
      flex-direction: column;
      align-items: center;
      padding: 10px 0 0 0;
      .trendingCard {
        max-width: 480px;
        &:not(:last-of-type) {
          margin-bottom: 30px;
        }
      }
    }
  }
  @media (min-width: 821px) and (max-width: 1150px) {
    .container {
      flex-wrap: wrap;
      padding: 10px 0 0 0;
      .trendingCard {
        max-width: 48%;
        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 40px;
        }
      }
    }
  }
  @media (min-width: 1151px) and (max-width: 1860px) {
    .container {
      flex-wrap: wrap;
      padding: 10px 0 0 0;
      .trendingCard {
        max-width: 32%;
        .trendingBg {
          height: 440px;
        }
        &:last-of-type {
          margin-top: 30px;
        }
      }
    }
  }
`;
export default Products;
