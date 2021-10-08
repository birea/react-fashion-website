/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "infinite-react-carousel";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import TestimonialCard from "./TestimonialCard";
import PersonOne from "../../img/personOne.jpg";
import PersonTwo from "../../img/personTwo.jpg";
import PersonThree from "../../img/personThree.jpg";

const Testimonials = () => (
  <section css={styles} className="testimonials">
    <Title overlayTitle="TESTIMONY" />
    <Container>
      <Slider
        dots={true}
        slidesToShow={1}
        autoplayScroll={1}
        autoplay={true}
        autoplaySpeed="2200"
        arrows={false}
        className="slider"
      >
        <TestimonialCard userImg={PersonOne} />
        <TestimonialCard userImg={PersonTwo} />
        <TestimonialCard userImg={PersonThree} />
        <TestimonialCard userImg={PersonOne} />
        <TestimonialCard userImg={PersonOne} />
      </Slider>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 60px 0;
  background: #f8f9fa;
  .container {
    max-width: 740px;
  }
  @media (max-width: 940px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Testimonials;
