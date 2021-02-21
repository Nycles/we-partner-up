/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"

interface IProps {
  text: string
  action?: () => {}
  disabled?: boolean
}

export const Button = (props: IProps) => {
  return (
    <button css={styles.btn} disabled={props.disabled}>
      {props.text}
    </button>
  )
}
