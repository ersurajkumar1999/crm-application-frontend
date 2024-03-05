import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
// import { Provider } from 'react-redux'
// import store from "./store";
// import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Oswald', 'Rubik'].join(','),
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#7731D8",
    },
  },

  overrides: {
    MuiInput: {
      root: {
        color: "orange",
        "&$focused": {
          color: "blue",
        },
      },
    },
  },
});
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      {/* <GoogleOAuthProvider clientId="125939043148-pia42325rovru2vvoh2f7fjqho7c2djl.apps.googleusercontent.com"> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </GoogleOAuthProvider> */}
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);