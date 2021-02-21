/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"
import { Button } from "../Button/Button"

export const Form = () => {
  return (
    <form onSubmit={() => console.log("Hello")}>
      <div>
        <label>Email</label>

        <div>
          <input css={styles.input} type="email" />
        </div>
      </div>

      <div css={{ marginTop: 28 }}>
        <label>Password</label>
        <label css={styles.label__subtitle}> (min 8 symbols)</label>

        <div>
          <input css={styles.input} type="password" />
        </div>
      </div>

      <div css={styles.btn__wrapper}>
        <Button />
      </div>
    </form>
  )
}
