import React from "react";
import { Grid } from "semantic-ui-react";
import Project from "./Project";
import { Transition } from "react-transition-group";
import styled from "styled-components";

const projects = [
  {
    projectName: "Event Planner",
    projectUrl: "https://corporate-event-planner.netlify.com/",
    notes:
      "Username: AlejandroTheAnimal, password: password. (I'm using heroku free deployments, so first login might be really slow)",
    imgPath: "corporateEventPlanner.png"
  },
  {
    projectName: "Friends App",
    projectUrl: "https://http-ajax-project.netlify.com/",
    notes: "Don't think it twice, manage your friends!",
    imgPath: "friendsApp.png"
  },
  {
    projectName: "A simple pagination App",
    projectUrl: "https://start-wars-lists.netlify.com/",
    notes: "Show case of how pagination systems should work",
    imgPath: "paginationApp.png"
  },
  {
    projectName: "TODO App",
    projectUrl: "https://react-todo-app-jr.netlify.com/",
    notes: "Yet another TODO App, so helpful!",
    imgPath: "todoApp.png"
  },
  {
    projectName: "Bussiness Card Organizer",
    projectUrl: "https://jovial-lumiere-78a58c.netlify.com/",
    notes: "Organize your bussiness cards! (UI Project)",
    imgPath: "bco.png"
  }
];

const ProjectsContainer = props => {
  return (
    <StyledGrid>
      <Grid.Row textAlign="center" columns={1}>
        {projects.map(e => (
          <Project {...e} />
        ))}
      </Grid.Row>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  position: absolute;
`;

export default ProjectsContainer;
