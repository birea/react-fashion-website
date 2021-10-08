/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const BlogCard = ({ blogImg }) => (
  <div css={styles} className="blogCard">
    <div className="blogImg">
      <img src={blogImg} alt="blog" />
    </div>
    <div className="blogInfo">
      <h2>
        Even the all-powerful Pointing has no control about the blind texts
      </h2>
      <div className="blogDesc">
        <a href="#/">Dec 6, 2018</a>
        <a href="#/">Admin</a>
        <a href="#/">
          <i className="far fa-comment-alt"></i>3
        </a>
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 380px;
  .blogImg {
    width: 100%;
    height: 260px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .blogInfo {
    h2 {
      padding: 24px 0 14px 0;
      color: #000;
      font-size: 21px;
      font-weight: 500;
      line-height: 1.4;
      cursor: pointer;
      transition: color 400ms ease-in-out;
      &:hover {
        color: #f1b8c4;
      }
    }
    .blogDesc {
      padding: 10px 0 0 0;
      a {
        text-decoration: none;
        display: inline-block;
        color: #b3b3b3;
        margin-right: 12px;
        transition: color 400ms ease-in-out;
        font-weight: 500;
        &:hover {
          color: #cccccc;
        }
        i {
          margin-right: 4px;
        }
      }
    }
  }
  @media (max-width: 910px) {
    max-width: 100%;
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
    .blogImg {
      height: 400px;
    }
  }
  @media (min-width: 911px) and (max-width: 1350px) {
    max-width: 48%;
    &:last-of-type {
      margin-top: 30px;
    }
    .blogImg {
      height: 400px;
    }
  }
`;

export default BlogCard;
