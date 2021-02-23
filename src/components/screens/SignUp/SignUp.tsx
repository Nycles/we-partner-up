/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"

import { Form } from "../../common/Form/Form"
import { signUp } from "../../../firebase/auth"

export const SignUp: React.FC = () => {
  const doSignUp = async (email: string, password: string) => {
    try {
      await signUp(email, password)
    } catch (error) {
      return error
    }
  }

  return (
    <div css={styles.container}>
      <div css={styles.title__wrapper}>
        <h1 css={styles.title}>Create account</h1>
      </div>

      <Form btnText="Create account" action={doSignUp} />
    </div>
  )
}
