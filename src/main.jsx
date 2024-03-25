import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux'
import store from "./store";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const toggleDarkMode = false;
console.log("import.meta.env==>", import.meta.env.VITE_APP_GOOGLE_CLIENT_ID);
const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Oswald', 'Rubik'].join(','),
  },
  palette: {
    mode: toggleDarkMode ? 'dark' : 'light',
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#7731D8",
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#000', // Change the color to whatever you desire
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "orange",
          "&$focused": {
            color: "blue",
          },
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);