import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Intro from "./IntroComponent";
import Me from "./MeComponent";
import styled from "styled-components";

const Banner = props => {
  return (
    <StyledGrid reversed={`${props.reversed ? "computer" : false}`}>
      <Grid.Row>
        <Grid.Column largeScreen={8} mobile={16} tablet={8}>
          <Me />
        </Grid.Column>
        <Grid.Column
          largeScreen={8}
          mobile={16}
          tablet={8}
          verticalAlign="middle"
          textAlign="center"
        >
          <Intro
            header={props.header}
            button={props.button}
            paragraph={props.paragraph}
          />
        </Grid.Column>
      </Grid.Row>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  background: ${props => props.reversed !== "computer" && "#e1e9ee"};
`;

export default Banner;
