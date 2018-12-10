import React from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
  handleSearchSubmit() {
    //because everything being stored via context in app
    //it's going to live across navigation, it's already living
    //up in the app parent
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
