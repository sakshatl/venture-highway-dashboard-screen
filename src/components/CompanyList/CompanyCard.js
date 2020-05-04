import React from "react";

import './companyCard.css'

class CompanyCard extends React.Component{
  render() {
    const company = this.props.company;
    return(
      <div className="companyCard">
        <div className="cardHeader">
          <div>
            <h4 className="companyTitle">{company.title}
              <br/>
              <span className="companySubtitle">{company.subtitle}</span>
            </h4>
          </div>
          <div>
            <p className="grey-text right-align">TO MEET</p>
          </div>
        </div>
        <div className="cardContent">
          <h5 className="companyStatus">{company.status}</h5>
          <p className="companyContent">{company.content}</p>
        </div>
        <div className="cardFooter">
          <div>
            <p>{company.rating}</p>
          </div>
          <div>
            <div className="companyChiefDetails">
              <p className="right-align"><span className="grey-text">Chief</span>
                <br/>
                {company.chief}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyCard;