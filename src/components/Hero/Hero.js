/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import HeroOverlay from "./HeroOverlay";
import HeroInfo from "./HeroInfo";
import HeroBg from "../../img/heroBg.jpg";
import Nav from "./Nav/Nav";

const Hero = () => (
  <section css={styles} className="hero" id="home">
    <HeroOverlay />
    <Nav />
    <HeroInfo />
  </section>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url('${HeroBg}') no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media(max-width: 1020px) {
    background-position: 100% 100%;
  }
`;

export default Hero;
