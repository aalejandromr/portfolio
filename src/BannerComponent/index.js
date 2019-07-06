import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Intro from "./IntroComponent";
import Me from "./MeComponent";
import styled from "styled-components";
import { Transition } from "react-transition-group";

const Banner = props => {
  return (
    <StyledGrid
      reversed={`${props.reversed ? "computer" : false}`}
      verticalAlign={"middle"}
    >
      <Grid.Row>
        <Grid.Column largeScreen={8} mobile={16} tablet={8}>
          <Me visible={props.visible} />
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
            {...props}
          />
        </Grid.Column>
      </Grid.Row>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  position: absolute;
  background: ${props => props.reversed !== "computer" && "#e1e9ee"};
  height: 100vh;
  &&& {
    padding: 0% 5%;
  }
`;

export default Banner;
