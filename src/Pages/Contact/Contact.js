import React, { Component } from "react";
import "./Contact.scss";
import Header from "../../Components/Header/Header";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import validator from "validator";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      emailValid: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      open: false,
    });
  }

  validateEmail(e) {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      this.setState({
        emailValid: true,
      });
    } else {
      this.setState({
        emailValid: false,
      });
    }
  }

  sendEmail(e) {
    e.preventDefault();

    if (this.state.emailValid === true) {
      emailjs
        .sendForm(
          "gmail",
          "template_zqbbi62",
          e.target,
          "user_gG8TRmKPQYTeIMpwCCK63"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();

      this.setState({
        open: true,
        emailValid: false,
      });
    }
  }

  render() {
    return (
      <div className="Contact">
        <p className="Contact__text" data-aos="fade-right">
          You can reach out to me by email at{" "}
          <a
            style={{ color: "#949191" }}
            href="mailto:brandon14.marks@gmail.com"
          >
            brandon14.marks@gmail.com
          </a>
        </p>
      </div>
    );
  }
}
