/** @jsxImportSource @emotion/react */

import React, { useState } from "react"
import styles from "./style"
import { Button } from "../Button/Button"

interface IProps {
  btnText: string
  action(email: string, password: string): any
}

interface IError {
  a?: any
  code: string
  message: string
}

export const Form = (props: IProps) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errors, setErrors] = useState({ email: "", password: "" })

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    props.action(email, password).then((response: IError) => {
      if (response) {
        doSetErrors(response)
      }
    })

    setEmail("")
    setPassword("")
  }

  const doSetErrors = ({ code, message }: IError) => {
    switch (code) {
      case "auth/invalid-email":
        setErrors({ email: message, password: "" })
        break
      case "auth/weak-password":
        setErrors({ password: message, email: "" })
        break
      default:
        alert(message)
    }
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label css={styles.label}>Email</label>

        <div>
          <input
            css={styles.input}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label css={styles.label__error}>{errors.email}</label>
      </div>

      <div css={{ marginTop: 28 }}>
        <label css={styles.label}>Password</label>
        <label css={styles.label__subtitle}> (min 8 symbols)</label>

        <div>
          <input
            css={styles.input}
            type="password"
            placeholder="••••••••••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label css={styles.label__error}>{errors.password}</label>
      </div>

      <div css={styles.btn__wrapper}>
        <Button text={props.btnText} disabled={!email || password.length < 8} />
      </div>
    </form>
  )
}
