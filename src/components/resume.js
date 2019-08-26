import React, { Component } from "react";
import { Grid } from "react-mdl";
import "../styles/resume.css";

class Resume extends Component {
  render = () => {
    return (
      <div className="resume-body">
        <Grid className="resume-grid">
          <div className="resume-main-div">
            <h2>Resume</h2>
            <iframe
              title="resume"
              className="resume-frame"
              src="https://docs.google.com/document/d/e/2PACX-1vTgl-GCd2p6Uu8KBwo6LtLZJcq9MhSdqj1w0Y6EhTInl7RA7UVU-jtmjdlKmS_Vdqj4SwbRad6PQ4bW/pub?embedded=true"
            />
          </div>
        </Grid>
      </div>
    );
  };
}

export default Resume;
