/** @jsxImportSource @emotion/react */

import React, { useState } from "react"
import styles from "./style"
import { Button } from "../Button/Button"

interface IProps {
  btnText: string
  action(email: string, password: string): any
}

export const Form = (props: IProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    props.action(email, password)

    setEmail("")
    setPassword("")
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>Email</label>

        <div>
          <input css={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div css={{ marginTop: 28 }}>
        <label>Password</label>
        <label css={styles.label__subtitle}> (min 8 symbols)</label>

        <div>
          <input css={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      <div css={styles.btn__wrapper}>
        <Button text={props.btnText} disabled={!email || password.length < 8} />
      </div>
    </form>
  )
}
