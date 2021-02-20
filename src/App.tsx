/** @jsxImportSource @emotion/react */

import React from "react"
import { Global } from "@emotion/react"
import { globalStyles } from "./common/styles"

export const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
    </div>
  )
}
