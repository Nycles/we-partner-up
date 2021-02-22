/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"

import { Button } from "../../common/Button/Button"
import { signOut } from "../../../firebase/auth"

export const Home = () => {
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>Home page</h1>

      <Button text="Sign out" action={signOut} />
    </div>
  )
}
