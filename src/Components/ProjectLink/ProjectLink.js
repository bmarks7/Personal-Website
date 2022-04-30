import React, { Component } from 'react';
import './ProjectLink.scss';

export default class ProjectLink extends Component {
    render() {
        return (
            <div className="ProjectLink">
                <a target="_blank" rel="noreferrer" href={this.props.url} className="ProjectLink__link">
                    <img className="ProjectLink__link__icon" src={this.props.icon} alt="link icon"/>
                    <span className="ProjectLink__link__name">{this.props.name}</span>
                </a>
            </div>
        )
    }
}

