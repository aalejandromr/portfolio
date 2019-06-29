import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Project = props => {
  return (
    <StyledGridColumn
      mobile={16}
      tablet={8}
      largeScreen={4}
      textAlign="center"
      verticalAlign="middle"
    >
      <StyledImage
        src="https://picsum.photos/id/0/5616/3744"
        rounded
        size={"medium"}
        centered
      />
      <Header as="h2"> Project Name </Header>{" "}
      <Link> Lambda School Project </Link>
    </StyledGridColumn>
  );
};

const StyledImage = styled(Image)`
  &&& {
    min-height: 250px;
  }
`;

const StyledGridColumn = styled(Grid.Column)`
  & {
    padding: 5%;
    box-sizing: border-box;
  }
`;

export default Project;
