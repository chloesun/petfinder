import React from "react";

const SearchContext = React.createContext({
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  //dummy methods, not really implementation, just
  //describe to react what these look like
  //only useful for testing purpose
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

//named exports
export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
