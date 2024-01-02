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
          <Header text="Here is my updated resume:" />
          <iframe
            data-aos="fade-right"
            className="Resume__Container__iframe"
            title="resume"
            src="https://drive.google.com/file/d/1JcYsr4QOWFAsAqvaB59U8PZh32MzpZ1V/preview"
            allow="autoplay"
          ></iframe>
          <div className="Resume__Container__driveLink">
            <SocialLink
              url="https://drive.google.com/file/d/1JcYsr4QOWFAsAqvaB59U8PZh32MzpZ1V/view?usp=sharing"
              name="Resume Link"
              icon={googleDriveIcon}
            />
          </div>
        </div>
      </div>
    );
  }
}
