import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import SocialLink from "../../Components/SocialLink/SocialLink";
import googleDriveIcon from "../../Images/googleDrive.png";

import "./Resume.scss";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPage: null,
      pageNUmber: 1,
    };
  }

  render() {
    return (
      <div className="Resume">
        <div className="Resume__Container">
          <Header text="Here is a link to my updated resume" />
          {/* <iframe
            data-aos="fade-right"
            className="Resume__Container__iframe"
            title="resume"
            src="https://drive.google.com/file/d/1A8uR4nnXR-cEZoRK0gfyOvHwGrseZ7mT/preview"
            allow="autoplay"
          ></iframe> */}
          <div className="Resume__Container__driveLink">
            <SocialLink
              url="https://drive.google.com/file/d/1A8uR4nnXR-cEZoRK0gfyOvHwGrseZ7mT/preview"
              name=" Resume"
              icon={googleDriveIcon}
            />
          </div>
        </div>
      </div>
    );
  }
}
