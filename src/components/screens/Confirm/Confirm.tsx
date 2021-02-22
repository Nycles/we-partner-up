/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"
import envelope from "../../../assets/svg/envelope.svg"

import { Button } from "../../common/Button/Button"

export const Confirm = () => {
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <h1 css={styles.title}>Confirm account</h1>

        <div css={styles.subtitle__wrapper}>
          <span css={styles.subtitle}>
            Please confirm your email by clicking on the link in the confirmation email that we sent to
          </span>
          <span css={styles.subtitle__email}> email</span>
        </div>

        <div css={styles.btn__wrapper}>
          <Button text="Resend" />
        </div>

        <span css={styles.signOut}>Sign out</span>
      </div>
      <div>
        <img css={styles.svg} src={envelope} alt="envelope" />
      </div>
    </div>
  )
}
