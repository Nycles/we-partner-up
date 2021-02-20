import { css } from "@emotion/react"
import { defaultStyles as ds } from "../../common/styles"

const styles = {
  wrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: ${ds.colors.white};
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1300px;
    height: 60px;
  `,
  img: css`
    width: 148px;
    height: 79px;
  `,
  nav: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    & a {
      font-size: 16px;
      color: ${ds.colors.darkGray};
      text-decoration: none;
    }
  `,
  btn: css`
    width: 162px;
    height: 42px;

    font-family: Montserrat;
    color: ${ds.colors.white};
    font-size: 18px;
    font-weight: 700;

    cursor: pointer;
    border: 0;
    border-radius: 5px;
    background-color: ${ds.colors.blue};
  `,
}

export default styles
