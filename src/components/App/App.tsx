/** @jsxImportSource @emotion/react */

import React from "react"
import styles from "./style"
import { Global } from "@emotion/react"
import { globalStyles } from "../../common/styles"
import { Header } from "../common/Header/Header"

import { AuthProvider } from "../contexts/AuthContext"
import { Navigation } from "../screens/Navigation"

export const App: React.FC = () => {
  return (
    <div>
      <Global styles={globalStyles} />

      <AuthProvider>
        <Header />

        <div css={styles.content__container}>
          <Navigation />
        </div>
      </AuthProvider>
    </div>
  )
}
