import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./BannerComponent";
import "./styles.css";
import ProjectsContainer from "./ProjectsComponent";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="App">
      <Banner
        header="Full Stack Developer - Native Spanish Speaker"
        button
        paragraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum"
        reversed
      />
      <DivDivider />
      <ProjectsContainer />
      <DivDivider />
      <Banner
        header="Lambda Experience"
        paragraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum"
      />
      <DivDivider />
      <Testimonials />
    </div>
  );
}

const DivDivider = styled.div`
  height: 50px;
  width: 100%;
  background: #e1e9ee;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
  </Router>,
  rootElement
);
