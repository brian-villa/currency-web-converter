import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"
import "./index.css"

import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#424242",
      light: "#616161",
      dark: "#212121",
    },
    secondary: {
      main: "#9e9e9e",
      light: "#fafafa",
      dark: "#757575",
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

