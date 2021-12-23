import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Header from "../components/Header";
import ScrollToTop from "../components/scrollToTop";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Cursor from "../components/Cursor";

const index = () => {
  return (
    <Router>
      <Cursor />
      <ScrollToTop />
      <Header />
      <Nav />
      <NavMobile />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
