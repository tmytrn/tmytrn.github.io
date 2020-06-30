import React from "react";
import AirbnbJournals from './AirbnbJournals';
import "./App.css";
import PortfolioHeader from './PortfolioHeader';

const Project = (props) => {
    console.log(props);

    if(props.match.params.projectId == "AirbnbJournals"){
        return (
            <div>
                <PortfolioHeader/>
                <AirbnbJournals/>
            </div>
        );
    }
}

export default Project;