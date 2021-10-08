/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <div className="aboutDesc">
      <h2>
        MODIST <br /> ONLINE <br /> FASHION SHOP
      </h2>
      <p>
        On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and" and the
        Little Blind Text should turn around and return to its own, safe
        country. But nothing the copy said could convince her and so it didn’t
        take long until a few insidious Copy Writers ambushed her, made her
        drunk with Longe and Parole and dragged her into their agency, where
        they abused her for their.
      </p>
      <p>
        When she reached the first hills of the Italic Mountains, she had a last
        view back on the skyline of her hometown Bookmarksgrove, the headline of
        Alphabet Village and the subline of her own road, the Line Lane. Pityful
        a rethoric question ran over her cheek, then she continued her way.
      </p>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 580px;
  height: 820px;
  display: flex;
  .aboutDesc {
    width: 100%;
    margin: auto;
    h2 {
      font-size: 70px;
      font-weight: 500;
      line-height: 1;
      padding-bottom: 60px;
    }
    p {
      color: gray;
      font-size: 15px;
      font-weight: 500;
      line-height: 2.2;
      &:last-of-type {
        margin: 20px 0 0 0;
      }
    }
  }
  @media (max-width: 900px) {
    max-width: 100%;
    height: 540px;
    .aboutDesc {
      h2 {
        font-size: 20px;
        padding-bottom: 10px;
        line-height: 1;
        br {
          display: none;
        }
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1300px) {
    justify-content: space-between;
    max-width: 90%;
    .aboutDesc {
      max-width: 84%;
      h2 {
        font-size: 30px;
        padding-bottom: 20px;
        line-height: 1.3;
        br {
          display: none;
        }
      }
    }
  }
`;

export default AboutInfo;
