import { css } from "@emotion/react"
import { defaultStyles as ds } from "./common/styles"

const styles = {
  content__container: css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: calc(100vh - 80px);

    background-color: ${ds.colors.lightGray};
  `,
}

export default styles
