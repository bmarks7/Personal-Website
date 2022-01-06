import React, { Component } from 'react'
import downPointer from '../Images/downPointer.png';
import Skill from './Skill';
import '../Styles/SkillsList.scss';

export default class SkillsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            arrowUp: false,
        };
        this.skills = this.props.skills;
        this.openList = this.openList.bind(this);
    }

    openList(e) {
        this.setState({
            open: !this.state.open,
            arrowUp: !this.state.arrowUp,
        });
    }

    render() {
        return (
            <div className="SkillsList">
                <div className="SkillsList__header" onClick={this.openList}>
                    <p className="SkillsList__header__text">{this.props.title}</p>
                    <img className="SkillsList__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downPointer" />
                </div>
                {this.state.open && 
                     <div className="SkillsList__list">
                     {this.skills.map((skill) => (
                         <Skill name={skill}/>
                     ))}
                    </div>
                }
            </div>
        )
    }
}
