import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import Lorem from "react-lorem-component";

class Testimonials extends React.Component {
  render() {
    return (
      <Grid columns={3} stackable divided>
        <Grid.Row>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Lorem count={1} />
            <Icon name="quote left" /> <Header as="h3"> Bojorquez </Header>
          </Grid.Column>

          <Grid.Column textAlign="center" verticalAlign="middle">
            <Lorem count={1} />
            <Icon /> <Header as="h3"> Bojorquez </Header>
          </Grid.Column>

          <Grid.Column textAlign="center" verticalAlign="middle">
            <Lorem count={1} />
            <Icon /> <Header as="h3"> Bojorquez </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Testimonials;
