import React from "react";
import Header from "../components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/footer";
import "./App.css";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
