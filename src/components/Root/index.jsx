import React from "react";

import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { CssBaseline } from "@material-ui/core";

import client from "../../graphql/client";
import routes from "../../routes";

const Root = () => (
  <ApolloProvider client={client}>
    <CssBaseline />
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </ApolloProvider>
);

export default Root;
