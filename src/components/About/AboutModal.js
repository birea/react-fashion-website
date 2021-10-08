/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AboutModal = ({ showModal, setShowModal }) => (
  <div css={styles} className={(showModal ? "hidden" : "") + " aboutModal"}>
    <div className="iframeContainer">
      <iframe
        src="https://player.vimeo.com/video/45830194?autoplay=1"
        frameBorder="0"
      ></iframe>
      <i className="fas fa-times fa-lg" onClick={() => setShowModal(true)}></i>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  height: 100%;
  position: fixed;
  background: red;
  display: flex;
  z-index: 20;
  background: rgba(0, 0, 0, 0.7);
  &.hidden {
    display: none;
  }
  .iframeContainer {
    position: relative;
    margin: auto;
    width: 860px;
    height: 480px;
    iframe {
      width: 100%;
      height: 100%;
    }
    i {
      color: #fff;
      cursor: pointer;
      position: absolute;
      top: -30px;
      right: 0;
      z-index: 300;
    }
  }
  @media (max-width: 818px) {
    .iframeContainer {
      max-width: 94%;
      i {
        top: -25px;
        right: 0px;
      }
    }
  }
  @media (min-width: 819px) and (max-width: 920px) {
    .iframeContainer {
      max-width: 706px;
    }
  }
  @media (max-width: 920px) {
    .iframeContainer {
      height: 420px;
      min-height: 420px;
      width: 100%;
    }
  }
`;

export default AboutModal;
