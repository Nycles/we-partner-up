import { css } from "@emotion/react"
import { defaultStyles as ds } from "../../common/styles"

const styles = {
  btn: css`
    width: 430px;
    height: 50px;

    border: 0;
    border-radius: 35px;
    cursor: pointer;

    background-color: ${ds.colors.blue};

    &:disabled {
      cursor: default;
      opacity: 75%;
    }
  `,
}

export default styles
