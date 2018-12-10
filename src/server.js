import express from "express";
import React from "react";
//take node application to generate HTML as a
//string which we can insert into our HTML file
import { renderToString } from "react-dom/server";
//client side routing, execute reach/router code inside of node
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

//read html that we generate from build process
const html = fs.readFileSync("dist/index.html").toString();

//split using "not rendered" as delimiter
const parts = html.split("not rendered");

const app = express();
//anytime anyone make a request to /dist on our server
//look at our dist directory, insert that statically
//all of HTML, CSS, images will come from that dist directory
app.use("/dist", express.static("dist"));
//request handler
app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
