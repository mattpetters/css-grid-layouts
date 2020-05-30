import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Twitter } from "./pages/Twitter";
import { createBrowserHistory } from "history";
import "./index.css";
import { Slack } from "./pages/Slack";
import { Facebook } from "./pages/Facebook";

const Index = () => (
  <div style={{ margin: "10px" }}>
    <h1>css-grid layouts</h1>
    <Link to="/facebook">Facebook</Link>
    <br />
    <Link to="/twitter">Twitter</Link>
    <br />
    <Link to="/slack">Slack</Link>
    <br />
  </div>
);

const App = () => {
  const history = createBrowserHistory();
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/twitter">
            <Twitter />
          </Route>
          <Route path="/slack">
            <Slack />
          </Route>
          <Route path="/facebook">
            <Facebook />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
