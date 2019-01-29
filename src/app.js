import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllUsers from "./components/AllUsers";
import User from "./components/User";

const Header = () => (
  <header>
    <h1>React UseEffect</h1>
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
  <Layout>
    <Router>
      <Switch>
        <Route path="/" component={AllUsers} />
        <Route path="/user/:" component={User} />
      </Switch>
    </Router>
  </Layout>
);

export default App;
