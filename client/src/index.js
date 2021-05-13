import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import "./bootstrap.min.css";
import App from "./App";

export const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
