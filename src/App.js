import React from  "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import login from "./login";
import Adduser from "./Components/Adduser";
import Edituser from "./Components/Edituser";
import { BrowserRouter as Router, Switch,Route, Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
    <Router>
    <Navbar />

     <Switch>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/about" component={About} />
          <Route exact path= "/service" component={Service} />
          <Route exact path= "/contact" component={Contact} />
          <Route exact path= "/adduser" component={Adduser} />
          <Route exact path= "/edituser" component={Edituser} />
          <Route exact path= "/login" component={login}/>
          <Redirect to="/" />

     </Switch>

     </Router> 

      </>
  );
};

export default App;
