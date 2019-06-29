import React from "react";
import { Header, Button } from "semantic-ui-react";

const Intro = props => {
  return (
    <>
      <Header as="h1"> {props.header} </Header>

      <p>{props.paragraph}</p>

      {props.button && <Button basic> Get to know me more </Button>}
    </>
  );
};

export default Intro;
