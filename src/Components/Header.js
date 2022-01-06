import React, { Component } from 'react'
import '../Styles/Header.scss';

export default class Header extends Component {

    render() {
        return (
            <div className="Header">
                <p className="Header__text">{this.props.text}</p>
            </div>
        )
    }
}
