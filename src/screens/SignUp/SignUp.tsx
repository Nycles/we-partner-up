/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"

import { Form } from "../../components/Form/Form"

export const SignUp: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.title__wrapper}>
        <h1 css={styles.title}>Create account</h1>
      </div>
      <Form
        btnText="Create account"
        action={(email: string, password: string) => {
          console.log(email, password)
        }}
      />
    </div>
  )
}
