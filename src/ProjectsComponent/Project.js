import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Project = props => {
  return (
    <Grid.Column
      mobile={16}
      tablet={8}
      largeScreen={4}
      textAlign="center"
      verticalAlign="middle"
    >
      <Image
        src="https://picsum.photos/id/0/5616/3744"
        rounded
        size={"medium"}
        centered
      />
      <Header as="h2"> Project Name </Header>{" "}
      <Link> Lambda School Project </Link>
    </Grid.Column>
  );
};

export default Project;
