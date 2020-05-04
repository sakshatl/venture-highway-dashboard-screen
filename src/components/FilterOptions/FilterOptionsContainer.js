import React from 'react';
import SelectOption from "./SelectOption";

import './filterOption.css'

class FilterOptionsContainer extends React.Component {
  render() {
    return (
      <div className="filterOptions">
        <h6 className="grey-text">Filters</h6>
        <div className="selectOption">
          <label>STAGES</label>
          <SelectOption />
        </div>

        <div className="selectOption">
          <label>STAGES</label>
          <SelectOption />
        </div>

        <div className="selectOption">
          <label>STAGES</label>
          <SelectOption />
        </div>

        <div className="selectOption">
          <label>STAGES</label>
          <SelectOption />
        </div>

        <div className="selectOption">
          <label>STAGES</label>
          <SelectOption />
        </div>

        <div className="selectOption">
          <label>STAGES</label>
          <SelectOption />
        </div>

        <div style={{marginTop: "50px"}} className="center">
          <span className="btn applyFilterCta z-depth-0">APPLY FILTERS</span>
        </div>

      </div>
    )
  }
}


export default FilterOptionsContainer;