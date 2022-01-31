import { ThemeProvider } from "styled-components"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { AppWrapper } from "./pageStyles"
import theme from "./theme"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Characters from "./components/Character/Characters"
import Read from "./components/Read/Read"
import CharacterProfile from "./components/Character/CharacterProfile/CharacterProfile"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/characters">
                <Characters />
              </Route>
              <Route
                exact
                path="/characters/:id"
                component={CharacterProfile}
              />
              <Route exact path="/read">
                <Read />
              </Route>
            </Switch>
          </Router>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
