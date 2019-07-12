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
      <Image.Group size={"big"}>
        <StyledImage src={`${imgPath}`} rounded centered fluid />
      </Image.Group>

      <Header as="h2"> {projectName} </Header>
      <a href={projectUrl}> Lambda School Project </a>
    </StyledGridColumn>
  );
};

const StyledImage = styled(Image)`
  &&& {
    /* min-height: 250px; */
    height: auto;
    width: auto;
  }
`;

const StyledGridColumn = styled(Grid.Column)`
  & {
    padding: 5%;
    box-sizing: border-box;
    background-color: #4682b4;
  }
`;

export default Project;
