import React from "react";

class NavbarSearch extends React.Component {
  render() {
    return(
      <div>
        <form action="">
          <div className="input-field">
            <i className="material-icons prefix indigo-text">search</i>
            <input id="searchBar" type="text"  placeholder="Search for a startup by name or website " />
          </div>
        </form>
      </div>
    )
  }
}

export default NavbarSearch;