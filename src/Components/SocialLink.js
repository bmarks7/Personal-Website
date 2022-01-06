import React, { Component } from 'react';
import '../Styles/SocialLink.scss';

export default class SocialLink extends Component {
    render() {
        return (
            <div className="SocialLink">
                <a target="_blank" rel="noreferrer" href={this.props.url} className="SocialLink__link">
                    <span className="SocialLink__link__name">{this.props.name}</span>
                    <img className="SocialLink__link__icon" src={this.props.icon} alt="link icon"/>
                </a>
            </div>
        )
    }
}
