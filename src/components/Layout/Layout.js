import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

class Layout extends React.Component{
  render() {
    return(
      <div className="layout">
        <Navbar />
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;