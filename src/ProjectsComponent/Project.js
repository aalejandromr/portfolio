import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Project = ({ projectName, projectUrl, imgPath }) => {
  return (
    <StyledGridColumn
      mobile={16}
      tablet={8}
      largeScreen={8}
      textAlign="center"
      verticalAlign="middle"
    >
      <StyledImage src={`${imgPath}`} rounded size={"medium"} centered />
      <Header as="h2"> {projectName} </Header>
      <a href={projectUrl}> Lambda School Project </a>
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
