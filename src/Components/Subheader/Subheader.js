import React, { Component } from 'react'
import './Subheader.scss';

export default class Subheader extends Component {

    render() {
        return (
            <div className="Subheader">
                <span className="Subheader__text">{this.props.text}</span>
            </div>
        )
    }
}
