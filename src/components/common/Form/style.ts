import { css } from "@emotion/react"

const styles = {
  input: css`
    width: 100%;

    padding: 12px 20px;
    border: 0.5px solid #c7c7c7;
    border-radius: 3px;

    margin-top: 4px;
    margin-bottom: 4px;

    &:placeholder {
      opacity: 0.4;
    }
    &[type="password"] {
      font-weight: 900;
      letter-spacing: 0.15em;
    }
  `,
  label: css`
    opacity: 0.75;
  `,
  label__error: css`
    color: darkred;
  `,
  label__subtitle: css`
    opacity: 0.4;
  `,
  btn__wrapper: css`
    margin-top: 40px;
  `,
}

export default styles
