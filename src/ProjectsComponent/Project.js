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
      <Image.Group>
        <StyledImage src={`${imgPath}`} rounded centered fluid />
      </Image.Group>

      <a href={projectUrl} style={{ color: "white" }}>
        <Header as="h2" color="inverted">
          {projectName}
        </Header>
      </a>
    </StyledGridColumn>
  );
};

const StyledImage = styled(Image)`
  &&& {
    max-height: 400px;
    max-width: 600px;
    height: auto;
    width: auto;
  }
`;

const StyledGridColumn = styled(Grid.Column)`
  & {
    padding: 5%;
    box-sizing: border-box;
  }
  @media (min-width: 375px) and (max-width: 700px) {
    /* margin-bottom: 10%;
    background-position: 0% 120%;
    z-index: 100; */
    &&&&& {
      padding: 10%;
    }
  }
`;

export default Project;
