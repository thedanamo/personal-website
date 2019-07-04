import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Daniel Hackl" scroll>
          <Navigation>
            <Link className="navButton" to="/">
              Home
            </Link>
            <Link className="navButton" to="/resume">
              Resume
            </Link>
            <Link className="navButton" to="/about">
              About Me
            </Link>
            <Link className="navButton" to="/projects">
              Projects
            </Link>
            <Link className="navButton" to="/contact">
              Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer title="Daniel Hackl">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
