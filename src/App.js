import React from "react";
import { Container, Grid } from "@material-ui/core";
//pages & components
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
// Css Here
import "./App.css";
//router doom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
              <Footer />
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
