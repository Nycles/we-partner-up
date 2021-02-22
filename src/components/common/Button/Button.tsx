/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"

interface IProps {
  text: string
  action?(): any
  disabled?: boolean
  loading?: boolean
}

export const Button = (props: IProps) => {
  return (
    <button css={styles.btn} disabled={props.disabled || props.loading} onClick={props.action}>
      {props.loading ? "..." : props.text}
    </button>
  )
}
