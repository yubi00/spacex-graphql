import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "../components/Launches";
import Launch from "../components/Launch";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Route path='/' exact component={Launches} />
        <Route path='/launch/:id' component={Launch} />
      </div>
    </Router>
  );
};

export default AppRouter;
