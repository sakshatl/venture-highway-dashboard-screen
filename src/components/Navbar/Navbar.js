import React from "react";

import "./navbar.css"
import NavbarSearch from "./NavbarSearch";

class Navbar extends React.Component{
  render() {
    return(
      <div>
        <nav className="nav-wrapper hide-on-med-and-down">
          <NavbarSearch />
          <div>
            <ul className="right">
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
              <li className="grey-text"><span className="digit">2322</span> TO MEET</li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar