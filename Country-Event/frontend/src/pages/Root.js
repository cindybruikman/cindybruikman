import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default RootLayout;
