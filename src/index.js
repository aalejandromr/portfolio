import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import styled from "styled-components";
import Banner from "./BannerComponent";
import "./styles.css";
import ProjectsContainer from "./ProjectsComponent";
import Testimonials from "./Testimonials";
import Footer from "./FooterComponent";
import { Transition, Button } from "semantic-ui-react";
import Nav from "./NavComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedRoutes = props => {
  const { pathname } = props.location;
  return (
    <TransitionGroup>
      <CSSTransition
        classNames="fadeTranslate"
        timeout={{ enter: 3000, exit: 1400 }}
        key={pathname}
      >
        <Switch location={props.location}>
          <Route
            exact
            path="/"
            render={props => (
              <Banner
                header="Full Stack Developer - Native Spanish Speaker"
                button
                paragraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsum lorem ipsum"
                reversed
                {...props}
              />
            )}
            // location={{ pathname: "/" }}
          />
          <Route
            path="/projects"
            component={ProjectsContainer}
            // location={{ pathname: "/projects" }}
          />
          <Route
            path="/education"
            render={props => (
              <Banner
                header="Lambda Experience"
                paragraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsum lorem ipsum"
                {...props}
              />
            )}
            // location={{ pathname: "/education" }}
          />
          <Route
            path="/working-with-me"
            component={Testimonials}
            // location={{ pathname: "/working-with-me" }}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = props => {
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-12">
        {/* <Menu /> */}
        <Route path="/" component={AnimatedRoutes} />
      </div>
    </div>
  );
};

const DivDivider = styled.div`
  height: 50px;
  width: 100%;
  background: #e1e9ee;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
