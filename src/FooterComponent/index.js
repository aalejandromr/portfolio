import React from "react";
import styled from "styled-components";
import { Grid, Header } from "semantic-ui-react";

export default function Footer() {
  return (
    <StyledFooter stackable columns={4} textAlign="left">
      <Grid.Column width={4}>
        <Header as="h2"> Opens Source Contributions </Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <Header as="h2"> Point of Contact </Header>
      </Grid.Column>
    </StyledFooter>
  );
}

const StyledFooter = styled(Grid)`
  &&& {
    h2 {
      color: white;
    }
    background: #181c1e;
    padding: 5% 5% 5% 5%;
  }
`;
