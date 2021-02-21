/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"
import logo from "../../assets/img/logo.png"

export const Header: React.FC = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.header}>
        <img css={styles.img} src={logo} alt="logo" />

        <nav css={styles.nav}>
          <a href="# ">Find partner</a>
          <a href="# ">Blog</a>
          <a href="# ">Log in</a>

          <button css={styles.btn}>Post a pitch</button>
        </nav>
      </div>
    </div>
  )
}
