import React, { Component } from "react";
import {
  Grid,
  Cell,
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import "../styles/projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  //Gridfall project display
  getGridfallProjectCard = () => {
    return (
      <Card
        shadow={5}
        style={{
          minWidth: "200px",
          width: "22%",
          height: "auto",
          maxHeight: "100vw",
          margin: "auto",
          borderRadius: "3%"
        }}
      >
        <CardTitle
          style={{
            color: "white",
            height: "12rem",
            background:
              "url(https://i.ibb.co/tcM1W8W/gridfall-picturesmall.png) center",
            backgroundSize: "cover"
          }}
        >
          {/* Project title goes here, over picture */}
        </CardTitle>
        <CardText className="card-text">
          Grid Fall
          <br />
          - 10 day 4 team member project.
          <br />
          <br />
          Purpose:
          <br /> To challenge ourselves, put our newly acquired skills to the
          test, and learn along the way. Built an online multiplayer strategy
          game and the website around it.
          <br />
          <br />
          Created with:
          <br /> Javascript, React.js, Redux.js, Babel.js, SVG, Node.js,
          Express.js, MongoDB, Socket.io
          <br />
          <br />
          Other collaborators:
          <br />
          {/* Kenton Rilea LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kenton-rilea/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kenton Rilea
          </a>
          <br />
          {/* Samuel Salinas LinkedIn */}
          <a
            href="https://www.linkedin.com/in/samuel-salinas/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Samuel Salinas
          </a>
          <br />
          {/* Ryan Forsyth LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ryan-david-forsyth/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ryan Forsyth
          </a>
        </CardText>
        <CardActions border>
          {/* YouTube */}
          <Button
            colored
            href="https://www.youtube.com/playlist?list=PLfGwHAMUdeqizvsNW9-OENCud5Pk8pYy9"
            target="_blank"
          >
            Youtube Video
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  };

  //Personal Website project display
  getPersonalWebpageProjectCard = () => {
    return (
      <Card
        shadow={5}
        style={{
          minWidth: "200px",
          width: "22%",
          height: "auto",
          maxHeight: "100vw",
          margin: "auto",
          borderRadius: "3%"
        }}
      >
        <CardTitle
          style={{
            color: "white",
            height: "12rem",
            background: "url(https://i.ibb.co/Dw3xqT4/personalws.png) center",
            backgroundSize: "contain"
          }}
        >
          {/* Project title goes here, over picture */}
        </CardTitle>
        <CardText className="card-text">
          Personal Website
          <br />
          - (This website you are using now)
          <br />
          <br />
          Purpose:
          <br /> To develop and set up a personal website using React while
          learning the process of deploying it, and then associating with a
          custom domain name. To become more familiar with github.
          <br />
          <br />
          Created with:
          <br /> Javascript, React.js, MDL
          <br />
        </CardText>
        <CardActions border>
          {/* Github */}
          <Button
            colored
            href="https://github.com/thedanamo/personal-website"
            target="_blank"
          >
            GitHub
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  };

  //can do a switch
  toggleCategories = () => {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-content">
            {this.getGridfallProjectCard()}
          </div>
        );
      case 1:
        return (
          <div className="projects-content">
            {this.getPersonalWebpageProjectCard()}
          </div>
        );
      default:
        return (
          <div>
            <h1>Henlo</h1>
          </div>
        );
    }
  };

  render = () => {
    return (
      <div>
        <Tabs
          className="tabs-bar"
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Team</Tab>
          <Tab>Personal</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  };
}

export default Projects;
