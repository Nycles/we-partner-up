/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"

interface IProps {
  text: string
  action?: () => {}
}

export const Button = (props: IProps) => {
  return <button css={styles.btn}>{props.text}</button>
}
