import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./layout/Menu";
import Header from "./layout/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import PortfolioPage from "./portfolio/PortfolioPage";

function App() {  

  return (
    <>
      <Menu />
      <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
        </Switch>
     </>
  );
}

export default App;
