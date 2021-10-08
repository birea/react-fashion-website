/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import StatsBg from "../../img/statsBg.jpg";
import StatsCard from "./StatsCard";

const Stats = () => (
  <section css={styles} className="stats">
    <Container>
      <StatsCard statsNum="10,000" statsText="Happy Customers" />
      <StatsCard statsNum="100" statsText="Branches" />
      <StatsCard statsNum="1,000" statsText="Partner" />
      <StatsCard statsNum="100" statsText="Awards" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 34vh;
  background: url('${StatsBg}') no-repeat center/cover;
  display: flex;
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
  }
  @media(max-width: 740px) {
    .container{
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;

export default Stats;
