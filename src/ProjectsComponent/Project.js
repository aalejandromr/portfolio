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
`;

export default Project;
