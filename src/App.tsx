/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"
import { Global } from "@emotion/react"
import { globalStyles } from "./common/styles"
import { Header } from "./components/Header/Header"
import { Home } from "./screens/Home/Home"

export const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header />
      <div css={styles.content__container}>
        <Home />
      </div>
    </div>
  )
}
