import React from "react";
import { Header, Button } from "semantic-ui-react";
import styled from "styled-components";
// import Torogoz from "../Imgs/torogoz.png";

const Intro = props => {
  return (
    <StyledDiv>
      <ColoredHeader as="h1"> {props.header} </ColoredHeader>

      <p style={{ color: "white" }}>{props.paragraph}</p>

      {props.button && (
        <Button
          // basic
          // inverted
          onClick={() => {
            props.history.push({
              pathname: "/projects",
              state: { transition: "fade", duration: 300 }
            });
          }}
        >
          Get to know me more
        </Button>
      )}
    </StyledDiv>
  );
};

const ColoredHeader = styled(Header)`
  color: #ffdd68;
`;

const StyledDiv = styled.div`
  /* background-image: url("./torogoz.png"); */
  @media (min-width: 200px) and (max-width: 700px) {
    padding: 10%;
    margin-bottom: 35%;
    box-sizing: border-box;
  }
`;

export default Intro;
