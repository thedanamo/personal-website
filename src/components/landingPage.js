import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../styles/landing.css";

class Landing extends Component {
  render = () => {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C5603AQGXkTQxyMjLdw/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=4DcQgaNoe0L4FKZDB5m7OGg6nLvuWiVAEUR4CQLEadI"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                Javascript | React | NodeJS | Express | MongoDB | Socket.IO |
                HTML/CSS <br />
                C# | Java | ASP.NET | Entity Framework | MVC | SQL <br />
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/danielhackl/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>{" "}
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UC55an-Xj3cBfz8oAXGy-2tg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/DanielHackl8"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  };
}

export default Landing;
