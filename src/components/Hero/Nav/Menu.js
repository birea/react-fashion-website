/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Menu = ({ hiddenMenu, setHiddenMenu }) => {
  const links = [
    {
      text: "Home",
      href: "#home",
    },
    {
      text: "Shop",
      icon: "fas fa-caret-down",
      href: "#shop",
    },
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Blog",
      href: "#blog",
    },
    {
      text: "Contact",
      href: "#contact",
    },
    {
      icon: "fas fa-shopping-cart",
    },
  ];

  return (
    <div css={styles} className={(hiddenMenu ? "" : "showMenu") + " menu"}>
      {links.map((link, index) => (
        <a key={index} onClick={() => setHiddenMenu(true)} href={link.href}>
          {link.text}
          {link.icon && <i className={link.icon}></i>}
        </a>
      ))}
    </div>
  );
};

const styles = css`
  a {
    text-decoration: none;
    display: inline-block;
    color: #000;
    font-size: 16px;
    &:not(:last-of-type) {
      margin-right: 40px;
    }
    i {
      padding: 2px 0 0 6px;
    }
  }
  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    left: -500px;
    transition: left 700ms ease-in-out;
    z-index: 5;
    width: 100%;
    padding: 54px 60px;
    max-width: 360px;
    min-height: 100vh;
    background: #d44d69;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &.showMenu {
      left: 0;
    }
    a {
      color: #fff;
      width: 100%;
      font-size: 30px;
      line-height: 1;
      margin-bottom: 30px;
      i {
        display: none;
      }
    }
  }
`;

export default Menu;
