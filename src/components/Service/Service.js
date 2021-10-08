/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import ServiceCard from "./ServiceCard";

const Service = () => (
  <section css={styles} className="service">
    <Title
      titleText="WE WANT YOU TO EXPRESS YOURSELF"
      overlayTitle="SERVICES"
    />
    <Container>
      <ServiceCard serviceTitle="REFUND POLICY" />
      <ServiceCard serviceTitle="PREMIUM PACKAGING" />
      <ServiceCard serviceTitle="SUPERIOR QUALITY" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0 160px 0;
  background: #f8f9fa;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 60px 0 0 0;
  }
  @media (max-width: 850px) {
    .title {
      h4 {
        font-size: 20px;
      }
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 851px) and (max-width: 1350px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Service;
