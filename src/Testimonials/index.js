import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import Lorem from "react-lorem-component";
import styled from "styled-components";

class Testimonials extends React.Component {
  render() {
    return (
      <DivContainer>
        <Header as="h2"> Testimonials </Header>
        <Grid columns={3} stackable divided>
          <Grid.Row>
            <Grid.Column textAlign="left" verticalAlign="middle">
              <Grid columns={2}>
                <Grid.Column width={2}>
                  <Icon name="quote left" corner="bottom left" />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Lorem count={1} />
                </Grid.Column>
              </Grid>
              <StyledHeaderH3 as="h3"> Bojorquez </StyledHeaderH3>
              <StyledHeaderH5 as="h5"> Telus International </StyledHeaderH5>
            </Grid.Column>

            <Grid.Column textAlign="left" verticalAlign="middle">
              <Grid columns={2}>
                <Grid.Column width={2}>
                  <Icon name="quote left" corner="bottom left" />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Lorem count={1} />
                </Grid.Column>
              </Grid>
              <StyledHeaderH3 as="h3"> Bojorquez </StyledHeaderH3>
              <StyledHeaderH5 as="h5"> Telus International </StyledHeaderH5>
            </Grid.Column>

            <Grid.Column textAlign="left" verticalAlign="middle">
              <Grid columns={2}>
                <Grid.Column width={2}>
                  <Icon name="quote left" corner="bottom left" />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Lorem count={1} />
                </Grid.Column>
              </Grid>
              <StyledHeaderH3 as="h3"> Bojorquez </StyledHeaderH3>
              <StyledHeaderH5 as="h5"> Telus International </StyledHeaderH5>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DivContainer>
    );
  }
}

const DivContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0% 5%;
`;

const StyledHeaderH3 = styled(Header)`
  margin-bottom: 0;
  padding-left: 5%;
`;

const StyledHeaderH5 = styled(Header)`
  margin-top: 0;
  padding-left: 5.5%;
`;

export default Testimonials;
