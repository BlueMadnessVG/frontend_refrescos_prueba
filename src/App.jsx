import { useState } from "react";
import styles from "./App.module.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/home/Home";
import Aside from "./components/static/aside";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div id={styles.app} className="h-screen gap-2">
          <aside className="[grid-area:aside] ">
            <Aside />
          </aside>

          <main className="[grid-area:main]">
            <Home />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
