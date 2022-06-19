import React, { Component } from 'react'
import './Header.scss';

export default class Header extends Component {

    render() {
        return (
            <div data-aos='fade-right' className="Header">
                <span className="Header__text">{this.props.text}</span>
            </div>
        )
    }
}
