/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react"
import styles from "./style"
import envelope from "../../../assets/svg/envelope.svg"

import { Button } from "../../common/Button/Button"
import { sendEmailVerification } from "../../../firebase/auth"
import { useAuth } from "../../contexts/AuthContext"
import { auth } from "../../../firebase/firebase"

export const Confirm = () => {
  const [timerSeconds, setTimerSeconds] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const { doSignOut, email, doSetIsEmailVerified }: any = useAuth()

  const doSendEmailVerification = async () => {
    setLoading(true)

    try {
      await sendEmailVerification()
      const timerDeathTime = new Date().getTime() + 60000
      localStorage.setItem("lastTimerDeathTime", `${timerDeathTime}`)
      setTimerSeconds(60)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const initializingTimer = () => {
    const dateDeath = Number(localStorage.getItem("lastTimerDeathTime"))
    const currentDate = new Date().getTime()

    if (!dateDeath) {
      doSendEmailVerification()
    } else if (dateDeath > currentDate) {
      setTimerSeconds(Math.round((dateDeath - currentDate) / 1000))
      setLoading(false)
    } else setLoading(false)
  }

  useEffect(initializingTimer, [])

  useEffect(() => {
    const id = setInterval(async () => {
      const user = auth.currentUser

      if (user) {
        await user.reload()
        if (user.emailVerified) {
          doSetIsEmailVerified(true)
          clearInterval(id)
        }
      }
    }, 4000)
  }, [])

  useEffect(() => {
    if (timerSeconds) setTimeout(() => setTimerSeconds(timerSeconds - 1), 1000)
  }, [timerSeconds])

  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <h1 css={styles.title}>Confirm account</h1>

        <div css={styles.subtitle__wrapper}>
          <span css={styles.subtitle}>
            Please confirm your email by clicking on the link in the confirmation email that we sent to
          </span>
          <span css={styles.subtitle__email}> {email}</span>
        </div>

        <div css={styles.btn__wrapper}>
          <Button
            text={timerSeconds ? `Resend in ${timerSeconds}s` : "Resend"}
            action={doSendEmailVerification}
            disabled={Boolean(timerSeconds)}
            loading={loading}
          />
        </div>

        <span css={styles.signOut} onClick={doSignOut}>
          Sign out
        </span>
      </div>
      <div>
        <img css={styles.svg} src={envelope} alt="envelope" />
      </div>
    </div>
  )
}
