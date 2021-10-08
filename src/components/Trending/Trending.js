/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Slider from "infinite-react-carousel";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import TrendingCard from "./TrendingCard";
import ProductOne from "../../img/productOne.jpg";
import ProductTwo from "../../img/productTwo.jpg";
import ProductThree from "../../img/productThree.jpg";
import ProductFour from "../../img/productFour.jpg";
import ProductFive from "../../img/productFive.jpg";
import ProductSix from "../../img/productSix.jpg";

const Trending = () => {
  const [media, setMedia] = useState("");

  return (
    <section css={styles} className="trending" id="trending">
      <Title titleText="TRENDING" overlayTitle="Trending" />
      <Container>
        <Slider
          onResize={(e) => setMedia(e.target.innerWidth)}
          dots={true}
          slidesToShow={media < 750 ? 1 : media > 750 && media < 1360 ? 2 : 3}
          centerMode={media > 750 && media < 1360 ? true : false}
          centerPadding={media > 750 && media < 1360 ? 0 : 50}
          autoplayScroll={1}
          autoplay={true}
          autoplaySpeed={2200}
          arrows={false}
          className="slider"
        >
          <TrendingCard cardImg={ProductOne} price="$80" discount="$120" />
          <TrendingCard cardImg={ProductTwo} price="$120" />
          <TrendingCard cardImg={ProductThree} price="$120" />
          <TrendingCard cardImg={ProductFour} price="$80" discount="$120" />
          <TrendingCard cardImg={ProductFive} price="$120" />
          <TrendingCard cardImg={ProductSix} price="$80" discount="$120" />
        </Slider>
      </Container>
    </section>
  );
};

const styles = css`
  padding: 100px 0;
  width: 100%;
  .container {
    padding: 30px 0 0 0;
    .slider {
      width: 100%;
    }
  }
`;

export default Trending;
