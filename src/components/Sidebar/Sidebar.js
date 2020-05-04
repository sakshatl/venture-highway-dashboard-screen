import React from "react";

import "./sidebar.css"
class Sidebar extends React.Component {
  render() {
    return(
      <div>
        <ul className="sidenav sidenav-fixed hide-on-med-and-down">
          <div style={{marginTop: "50px"}}>
            <li style={{borderLeft: "4px solid #3949ab", padding: "1px"}}><a href="/" ><i style={{fontSize: "30px"}} className="material-icons center">home</i></a></li>
          </div>
        </ul>
      </div>
    )
  }
}
export default Sidebar;