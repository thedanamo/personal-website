import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  hideToggle() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }

  render = () => {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Daniel Hackl" scroll>
            <Navigation>
              <Link className="navButton" to="/">
                Home
              </Link>
              <a
                className="navButton"
                href="https://standardresume.co/r/daniel-hackl-80092"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
              {/* <Link className="navButton" to="/resume">
              Resume
            </Link> */}
              {/* <Link className="navButton" to="/about">
              About Me
            </Link> */}
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
              <Link to="/" onClick={() => this.hideToggle()}>
                Home
              </Link>
              <a
                className="navButton"
                href="https://standardresume.co/r/daniel-hackl-80092"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => this.hideToggle()}
              >
                Resume
              </a>
              {/* <Link to="/resume">Resume</Link> */}
              {/* <Link to="/about">About Me</Link> */}
              <Link to="/projects" onClick={() => this.hideToggle()}>
                Projects
              </Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  };
}

export default App;
