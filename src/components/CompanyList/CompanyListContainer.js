import React from 'react';
import CompanyCard from "./CompanyCard";

import "./companyList.css"

class CompanyListContainer extends React.Component {
  state = {
    companies : [
      {
        title: "SigNoz",
        subtitle: "Founded in 2019, Bangalore",
        status: "UnFunded",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi mollitia optio quas reiciendis voluptates. Dolorem dolorum facilis laborum mollitia nesciunt rem ullam veniam voluptas. Alias illum quis quos!",
        rating: "5/5",
        chief: "Mukul Bhambhani"
      },
      {
        title: "Hoi Foods",
        subtitle: "Founded in 2017, Gurugram",
        status: "$953.33 k",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi mollitia optio quas reiciendis voluptates. Dolorem dolorum facilis laborum mollitia nesciunt rem ullam veniam voluptas. Alias illum quis quos!",
        rating: "5/5",
        chief: "Damini Bhargawa"
      },
      {
        title: "City Mall",
        subtitle: "Founded in 2019, Unknown",
        status: "$927.77 k",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi mollitia optio quas reiciendis voluptates. Dolorem dolorum facilis laborum mollitia nesciunt rem ullam veniam voluptas. Alias illum quis quos!",
        rating: "5/5",
        chief: "Priya Mohan"
      },
      {
        title: "GroMo",
        subtitle: "Founded in 2019, Gurugram",
        status: "$957.5 k",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi mollitia optio quas reiciendis voluptates. Dolorem dolorum facilis laborum mollitia nesciunt rem ullam veniam voluptas. Alias illum quis quos!",
        rating: "5/5",
        chief: "Assign Chief"
      }
    ]
  }

  render() {
    const companies = this.state.companies;

    const renderCompanies = (companies) ? ( companies.map((company, index) => {
      return(
        <div>
          <CompanyCard company={company} />
        </div>
      )
    } ) ): ( <p>Loading compnaies ...</p>)

    return (
      <div>
        <h6 className="grey-text">Total list of 23111 startups </h6>
        <div className="companyList">
          {renderCompanies}
        </div>
      </div>
    )
  }
}


export default CompanyListContainer;