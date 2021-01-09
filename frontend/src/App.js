import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Links from "./components/navigation/Links";
import useAuth from "./hooks/useAuth";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";
import Profile from "../src/screens/Profile";
import logo from "../src/assets/stegorock.gif";

function App() {
  const auth = useAuth();

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  // Please dont do this
  async function loginNow() {
    try {
      const email = prompt("Enter your email");
      await auth.login(email);
    } catch (err) {
      console.error(err);
      // maybe updat some sort of state to let the user know that it failed =]
    }
  }

  if (auth.loading || auth.loggingIn || auth.loggingOut) {
    // User is currently trying to log in or something..
    return <img src={logo} alt="Loading......." />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          {auth.loggedIn ? (
            <div>
              You are logged-in.
              <br />
              <button onClick={() => auth.logout()}>Logout</button>
            </div>
          ) : (
            <div>
              <button onClick={loginNow}>Login Now</button>
            </div>
          )}

          <Navigation />
          <Links />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
