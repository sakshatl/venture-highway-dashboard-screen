import React from "react";

class SelectOption extends React.Component {
  render() {
    return(
      <select>
        <option disabled selected>Select your option</option>
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
      </select>
    )
  }
}

export default SelectOption;