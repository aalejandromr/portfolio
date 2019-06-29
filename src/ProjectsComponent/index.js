import React from "react";
import { Grid } from "semantic-ui-react";
import Project from "./Project";

const ProjectsContainer = props => {
  return (
    <Grid>
      <Grid.Row textAlign="center" columns={1}>
        {[1, 2, 2, 2, 2, 2, 2, 2].map(e => (
          <Project />
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ProjectsContainer;
