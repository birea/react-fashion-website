/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Container from "../../GlobalComponents/Container";
import Menu from "./Menu";

const Nav = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  
  return (
    <nav css={styles}>
      <Container>
        <h2>MODIST</h2>
        <i
          onClick={() => setHiddenMenu(!hiddenMenu)}
          id="burgerMenu"
          className={hiddenMenu ? "fas fa-braille fa-lg" : "fas fa-times fa-lg"}
        ></i>
        <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} />
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 54px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-weight: 300;
      font-size: 23px;
      line-height: 1;
      color: #000;
    }
    #burgerMenu {
      cursor: pointer;
      color: #d44d69;
      display: none;
    }
  }
  @media (max-width: 700px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
`;

export default Nav;
