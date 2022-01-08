import React, { Component } from 'react'
import '../Styles/Skill.scss';

export default class Skill extends Component {
    render() {
        return (
            <div className='Skill'>
                <span className='Skill__name'>{this.props.name}</span>
            </div>
        )
    }
}
