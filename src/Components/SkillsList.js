import React, { Component } from 'react'
import downPointer from '../Images/downPointer.png';
import Skill from './Skill';
import '../Styles/SkillsList.scss';
import cssVars from '../Styles/Variables.scss';

export default class SkillsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            arrowUp: false,
            scaleUp: false,
            boxShadow: 'none',
            headerColor: cssVars.baseColor,
        };

        this.openList = this.openList.bind(this);
        this.sectionHover = this.sectionHover.bind(this);
        this.sectionStopHover = this.sectionStopHover.bind(this);
    }

    openList(e) {
        this.setState({
            open: !this.state.open,
            arrowUp: !this.state.arrowUp,
        });
    }

    sectionHover(e) {
        if (this.state.open === false) {
            this.setState({
                scaleUp: true,
                boxShadow: '0 1rem 3rem rgba(0,0,0,.25)',
                headerColor: cssVars.lightBlue,
            })
        }
    }

    sectionStopHover(e) {
        if (this.state.open === false) {
            this.setState({
                scaleUp: false,
                boxShadow: 'none',
                headerColor: cssVars.baseColor,
            })
        }
    }

    render() {
        return (
            <div className="SkillsList">
                <div className="SkillsList__header" onMouseEnter={this.sectionHover} onMouseLeave={this.sectionStopHover} onClick={this.openList} style={{backgroundColor: this.state.headerColor, boxShadow: this.state.boxShadow ,transform: 'scale(' + ((this.state.scaleUp) ? 1.05 : 1) + ')', borderRadius: this.state.open ? '15px 15px 0px 0px' : '15px 15px 15px 15px'}}>
                    <p className="SkillsList__header__text">{this.props.title}</p>
                    <img className="SkillsList__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downPointer" />
                </div>
                {this.state.open && 
                     <div className="SkillsList__list">
                     {this.props.skills.map((skill) => (
                         <Skill name={skill}/>
                     ))}
                    </div>
                }
            </div>
        )
    }
}
