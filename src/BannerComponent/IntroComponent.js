import React from "react";
import { Header, Button } from "semantic-ui-react";
import styled from "styled-components";

const Intro = props => {
  return (
    <StyledDiv>
      <Header as="h1"> {props.header} </Header>

      <p>{props.paragraph}</p>

      {props.button && <Button basic> Get to know me more </Button>}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media (min-width: 200px) and (max-width: 700px) {
    padding: 10%;
    box-sizing: border-box;
  }
`;

export default Intro;
