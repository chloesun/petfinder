//this do the rendering to the DOM, and anything that brower-specific
import React from "react";
//hyrate look for existing markup to take over an existing
//applicaiton, whereas render is this is blank, replace
//everything inside of it.
import { hydrate } from "react-dom";
import App from "./App";

//this is the entry point to the application
hydrate(<App />, document.getElementById("root"));
