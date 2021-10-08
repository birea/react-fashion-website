/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import AboutBg from "./AboutBg";
import AboutInfo from "./AboutInfo";

const About = ({ showModal, setShowModal }) => {
  return (
    <section css={styles} className="about" id="about">
      <Container>
        <AboutBg showModal={showModal} setShowModal={setShowModal} />
        <AboutInfo />
      </Container>
    </section>
  );
};
const styles = css`
  width: 100%;
  background: #f8f9fa;
  .container {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default About;
