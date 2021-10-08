/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AboutImg from "../../img/aboutBg.jpg";

const AboutBg = ({ showModal, setShowModal }) => (
  <div css={styles} className="aboutBg">
    <div className="play" onClick={() => setShowModal(!showModal)}>
      <i className="fas fa-play fa-2x"></i>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 540px;
  display: flex;
  background: url('${AboutImg}') no-repeat center/cover;
  .play {
    margin: auto;
    width: 110px;
    height: 110px;
    background: #f1b8c4;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    i {
      color: #fff;
      margin: auto;
    }
  }
  @media (max-width: 900px) {
    max-width: 100%;
    height: 420px;
    .play{
      width: 70px;
      height: 70px;
    }
  }
`;

export default AboutBg;
