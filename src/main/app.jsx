import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../common/template/dependencies.js";

import SideBar from "../common/template/Sidebar/SideBar";
import Header from "../common/template/Header/Header";
import Footer from "../common/template/Footer/Footer";
import Message from "../common/Message/Message";
import Routes from "../components/Routes/Routes";

export default props => (
  <Router>
    <React.Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <div id="content">
          <div className="container-fluid">
            <Routes />
          </div>
          <Message />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  </Router>
);
