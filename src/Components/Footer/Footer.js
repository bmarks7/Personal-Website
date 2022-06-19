import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
        <div className="Footer" data-aos='fade-right'>
            <span className="Footer__creator">Made by Brandon Marks in the Greater Toronto Area</span>
            <a target='_blank' rel="noreferrer" href="https://docs.google.com/document/d/13vTMaYb8GCLGCE24XaVIGey2td3SIJCOsGZ3s3C3IsU/edit?usp=sharing" className="Footer__sources">Attributions</a>
        </div>
    )
  }
}
