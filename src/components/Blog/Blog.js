/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import BlogCard from "./BlogCard";
import BlogOne from "../../img/blogOne.jpg";
import BlogTwo from "../../img/blogTwo.jpg";
import BlogThree from "../../img/blogThree.jpg";

const Blog = () => (
  <section css={styles} className="blog" id="blog">
    <Title titleText="RECENT BLOG" overlayTitle="BLOG" />
    <Container>
      <BlogCard blogImg={BlogOne} />
      <BlogCard blogImg={BlogTwo} />
      <BlogCard blogImg={BlogThree} />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 70px 0 180px 0;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 30px 0 0 0;
  }
  @media (max-width: 910px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 911px) and (max-width: 1350px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Blog;
