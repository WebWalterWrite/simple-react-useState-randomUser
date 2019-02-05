import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Homepage from "./components/Homepage";
import Users from "./components/Users/Users";

const Header = () => (
  <header>
   <Link to={"/"}>
   <img src="https://res.cloudinary.com/di39frvde/image/upload/v1549308676/378f70e8-38da-4a2d-8a17-f977a25e9cf1.png" alt="UseMeet" width="150"/>
     </Link>
  </header>
);

const Footer = () => (
  <footer>
    <p>Show in github</p>
  </footer>
);

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

const App = () => (
  
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/profils/:type" component={Users} />
      </Switch>
      </Layout>
    </Router>

);

export default App;
