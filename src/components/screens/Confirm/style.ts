import { css } from "@emotion/react"

const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1142px;
  `,
  content: css`
    text-align: center;
    width: 430px;
  `,
  title: css`
    font-weight: 800;
    font-size: 36px;
    margin-bottom: 20px;
  `,
  subtitle__wrapper: css`
    width: 300px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
  `,
  subtitle: css`
    opacity: 40%;
  `,
  subtitle__email: css`
    opacity: 75%;
  `,
  btn__wrapper: css`
    margin-bottom: 15px;
  `,
  signOut: css`
    cursor: pointer;
    color: ds.colors.darkBlue;
    opacity: 75%;
    text-decoration: underline;
  `,
  svg: css`
    width: 473px;
    height: 416px;
  `,
}

export default styles
