import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
          <Link to="/search">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <Search path="/search" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
