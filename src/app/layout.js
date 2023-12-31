"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { persistor, store } from "../redux/store";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Lato, sans-serif", // Fuente predeterminada para todo el texto
      h2: {
        fontFamily: "Rufina,  serif", // Fuente para los h2
      },
      h3: {
        fontFamily: "Rufina,  serif", // Fuente para los h2
      },
      h4: {
        fontFamily: "Rufina,  serif", // Fuente para los h2
      },
      h5: {
        fontFamily: "Rufina,  serif", // Fuente para los h2
      },
      h6: {
        fontFamily: "Rufina,  serif", // Fuente para los h2
      },
      subtitle1: {
        fontFamily: "Lato, sans-serif", // Fuente para los subtitle1 (los mantendremos como la fuente predeterminada)
      },
      body2: {
        fontFamily: "Lato, sans-serif", // Fuente para los subtitle1 (los mantendremos como la fuente predeterminada)
      },
    },
    palette: {
      primary: {
        light: "#dce4df",
        main: "#A9BDB1",
        dark: "#76847b",
        contrastText: "#fff",
      },
      success: {
        light: "#dce4df",
        main: "#A9BDB1",
        dark: "#76847b",
        contrastText: "#fff",
      },
    },
  });

  return (
    <html lang="en">
      <head>
        <title>Tlali</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Rufina:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {children}
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
