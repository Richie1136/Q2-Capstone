import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/themes/globalStyles";
import { lightTheme, darkTheme } from "./components/themes/Themes";
import { useDarkMode } from "./components/darkMode/useDarkMode";
import Toggle from "./components/toggler/Toggler";
import Input from "./components/input/Input";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">

          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Navigation />

          <Switch>
            <Route exact path="/"></Route>
            <Route path="/dinosaur">                  </Route>
            <Route path="/user"></Route>
            <Route path="/library"></Route>
            <Route path="/extractor"></Route>
            <Route path="/input">
              <Input />
            </Route>
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;

