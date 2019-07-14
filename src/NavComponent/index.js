import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = props => {
  return (
    <Container>
      <Wrapper>
        <StyledNav>
          <StyledAnchor to="/">←</StyledAnchor>
          <StyledAnchor to="/projects">Projects</StyledAnchor>
          {/* <StyledAnchor to="/education">Education</StyledAnchor>
          <StyledAnchor to="/working-with-me">Testimonials</StyledAnchor> */}
        </StyledNav>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  z-index: 100;
`;

const Wrapper = styled.div`
  transform: translateY(0%);
  z-index: 100;
`;

const StyledNav = styled.nav`
  background-color: #2f232f;
  line-height: 5rem;
  height: 5rem;
  overflow-y: auto;
  /* margin-top: -2rem;
  padding-top: 2rem; */
  display: flex;
`;

const StyledAnchor = styled(Link)`
  color: rgb(238, 238, 238);
  height: 5rem;
  line-height: 5rem;
  padding: 0px 2rem;
  text-align: center;
  flex-grow: 1;
`;

export default Nav;
