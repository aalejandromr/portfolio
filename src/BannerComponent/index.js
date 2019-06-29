import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Intro from "./IntroComponent";
import Me from "./MeComponent";

const Banner = props => {
  return (
    <Grid reversed="computer">
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
          <Intro />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Banner;
