import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import Users from "./components/Users";

const Header = () => (
  <header>
    <h1>Dev2Rev</h1>
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
        <Route path="/" component={Homepage} />
        <Route path="/profils/:type" component={Users} />
      </Switch>
    </Router>
  </Layout>
);

export default App;
