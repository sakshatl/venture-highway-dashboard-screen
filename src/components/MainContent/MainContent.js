import React from "react";
import FilterOptionsContainer from "../FilterOptions/FilterOptionsContainer";
import CompanyListContainer from "../CompanyList/CompanyListContainer";

import "./mainContent.css";

import M from 'materialize-css';
import TabList from "../TabList/TabList";

class MainContent extends React.Component{
  componentDidMount() {
    M.Tabs.init(document.querySelectorAll(".tabs"));
  }

  render() {
    return(
      <div>
        <TabList />
        <div className="mainContent card-panel">
          <FilterOptionsContainer />
          <CompanyListContainer />
        </div>
      </div>

    )
  }
}

export default MainContent;