import React, { Fragment } from "react";

import { renderRoutes } from "react-router-config";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ route: { routes } }) => {
  return (
    <Fragment>
      <Header />
      <main>{renderRoutes(routes)}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
