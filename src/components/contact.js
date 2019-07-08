import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render = () => {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Daniel Hackl</h2>
            <img
              src="https://media.licdn.com/dms/image/C5603AQGXkTQxyMjLdw/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=4DcQgaNoe0L4FKZDB5m7OGg6nLvuWiVAEUR4CQLEadI"
              alt="avatar"
              className="avatar-img"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Feel free to contact me at anytime. In the case that I cannot
              respond, I will try and get back to as soon as possible.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (514) 994-8399
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    dan.hackl@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fa fa-skype" aria-hidden="true" />
                    daniel.hackl1
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <a
                      href="https://www.linkedin.com/in/danielhackl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                    Daniel Hackl
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  };
}

export default Contact;
