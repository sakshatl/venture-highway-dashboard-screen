import React from "react";

import "./tabList.css"

class TabList extends React.Component {
  render() {
    return(
      <div className="tabList">
        <div>
          <ul className="tabs transparent">
            <li className="tab"><a href="/"> Recommendations </a></li>
            <li className="tab"><a href="/">Overview</a></li>
          </ul>
        </div>
        <div className="right">
          <span className="btn addStartupCta right z-depth-0 hide-on-med-and-down">ADD STARTUP</span>
        </div>
      </div>
    )
  }
}

export default TabList;