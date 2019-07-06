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
      <TorogozBackground>
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
      </TorogozBackground>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  position: absolute;

  background-color: ${props =>
    props.reversed !== "computer" ? "#e1e9ee" : "#CD776A"};
  height: 100vh;
  &&& {
    padding: 0% 5%;
  }
`;

const TorogozBackground = styled(Grid.Row)`
  background-image: url("torogoz.png");
  background-repeat: no-repeat;
  background-position: 0% 110%;
  background-size: 124px;
`;

export default Banner;
