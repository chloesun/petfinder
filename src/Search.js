import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: ""
    };
  }

  //   handleLocationChange = event => {};

  render() {
    return (
      <div className="search">
        <label htmlFor="locaiton">
          Location
          <input
            id="location"
            value={this.state.location}
            placehoder="Location"
          />
        </label>
      </div>
    );
  }
}

export default Search;
