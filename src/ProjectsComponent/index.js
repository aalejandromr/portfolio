import React from "react";
import { Grid } from "semantic-ui-react";
import Project from "./Project";
import { Transition } from "react-transition-group";
import styled from "styled-components";

// const duration = 300;
// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0
// };

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 0 }
// };

const ProjectsContainer = props => {
  return (
    <StyledGrid>
      <Grid.Row textAlign="center" columns={1}>
        {[1, 2, 2, 2, 2, 2, 2, 2].map(e => (
          <Project />
        ))}
      </Grid.Row>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  position: absolute;
`;

export default ProjectsContainer;
