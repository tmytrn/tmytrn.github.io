import React from "react";
import "./App.css";
import PortfolioHeader from './PortfolioHeader';
import Project from './Project';
import PA from './images/PA_Logo_wide.jpg'
import Journals from './images/AirbnbJournals.png';
import FilmReview from './images/FilmReview.png';
import CB from './images/CB.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Portfolio({ match }) {
  const style = {
    backgroundColor: "rgb(190, 191, 210)"
}
  const projectsData = [
    { name: "Public Announcement", id: "PA", imageUrl: PA, role: "Web Development", description: "Developed features for the Public Announcement homepage product." },
    { name: "Airbnb Journals", id: "AirbnbJournals", imageUrl: Journals, role: "Product Design", description: "Second Place project for the Airbnb + College Adobe Creative Jam (April 2020)." },
    { name: "Film Review Case Study", id: "LCS", imageUrl: FilmReview, role: "Product Design", description: "Letterboxd redesign focused on film discovery and discussion." },
    { name: "Chorizo Burrito", id: "CB", imageUrl: CB, role: "Web Design/Development", description: "A blog inspired by PublicAnnouncement.org that I designed and developed." }
  ];

  const projectsList = projectsData.map((project) => {
    return (

      <div class="fl w-100 w-50-l pb5">
        <article class="project">
          <Link to={`${match.url}/${project.id}`}>
            <img
              src={project.imageUrl}
              class="w-100 dim"
              alt="image"
            ></img>
          </Link>
          <p class="f6 subtitle">{project.role}</p>
          <Link to={`${match.url}/${project.id}`} class="color link">
            <h1 class="f3 project-title fw6">{project.name}</h1>
          </Link>
          <p class="f5 measure project-description">
            {project.description}
          </p>
        </article>
      </div>

    );
  });

  return (
    <div className="App" style={style}>
      <PortfolioHeader />
      <div class="w-100 center ph3 ph4-m ph5-l">
        <div class="cf project-wrapper">
          {projectsList}
        </div>
        <Route exact path={match.url} />
        <Route path={`${match.url}/:projectId`} render={(props) => <Project {...props} />}/>
      </div>
    </div>

  );
}

export default Portfolio;
