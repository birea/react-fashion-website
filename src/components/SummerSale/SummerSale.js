/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import SummerBg from "../../img/summerBg.jpg";

const SummerSale = () => (
  <section css={styles} className="summerSale">
    <Container>
      <h2>SUMMER SALE</h2>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 70vh;
  background: url('${SummerBg}') no-repeat center/cover;
  display: flex;
  align-items: center;
  .container {
    h2 {
      font-size: 110px;
      font-weight: 800;
      line-height: 1;
      color: #fff;
    }
  }
  @media(max-width: 640px) {
    .container{
      h2{
        font-size: 60px;
      }
    }
  }
`;

export default SummerSale;
