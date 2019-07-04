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
        style={{ minWidth: "450", margin: "auto", borderRadius: "3%" }}
      >
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://www.freevector.com/uploads/vector/preview/19766/8-06.jpg) center"
          }}
        >
          Grid Fall
        </CardTitle>
        <CardText className="card-text">
          Ten day team project created with:
          <br /> Javascript, React.js, Redux.js, Babel.js, SVG, Node.js,
          Express.js, MongoDB, Socket.io
          <br />
          <br />
          Purpose:
          <br /> To challenge ourselves, put our newly acquired skills to the
          test, and learn along the way. Built an online multiplayer game and
          the website around it.
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
          <div>
            <h1>More to be added soon</h1>
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
          <Tab>Group</Tab>
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
