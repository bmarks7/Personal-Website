import React, { Component } from 'react'
import downPointer from '../../Images/downPointer.png';
import Skill from '../Skill/Skill';
import './SkillsList.scss';
import cssVars from '../../Variables.scss';
import { isMobile } from 'react-device-detect'

export default class SkillsList extends Component {

    constructor(props) {
        let smallScreenValue = false

        if (window.innerWidth <= 700){
            smallScreenValue = true
        }

        super(props)
        this.state = {
            open: false,
            arrowUp: false,
            scaleUp: false,
            boxShadow: 'none',
            headerColor: cssVars.baseColor,
            smallScreen: smallScreenValue,
        };

        this.openList = this.openList.bind(this);
        this.sectionHover = this.sectionHover.bind(this);
        this.sectionStopHover = this.sectionStopHover.bind(this);

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 700) {
                this.setState({smallScreen: true})
            } else{
                this.setState({smallScreen: false})
            }
        })
    }

    openList(e) {
        if (isMobile){
            if (this.state.open === true){
                this.setState({
                    open: false,
                    arrowUp: false,
                    scaleUp: false,
                    boxShadow: 'none',
                    headerColor: cssVars.baseColor,
                })
            } else{
                this.setState({
                    open: true,
                    arrowUp: true,
                    scaleUp: false,
                    boxShadow: 'none',
                    headerColor: cssVars.lightBlue,
                })
            }
        }else{
            this.setState({
                open: !this.state.open,
                arrowUp: !this.state.arrowUp,
                scaleUp: true,
                boxShadow: '0 1rem 3rem rgba(0,0,0,.25)',
                headerColor: cssVars.lightBlue,
            });
        }
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
                <div className="SkillsList__header" onMouseEnter={this.sectionHover} onMouseLeave={this.sectionStopHover} onClick={this.openList} style={{backgroundColor: this.state.headerColor, boxShadow: this.state.boxShadow ,transform: 'translateY(' + ((this.state.scaleUp) ? ((isMobile) ? -1 : -10) : 0) + 'px)', borderRadius: this.state.open ? '15px 15px 0px 0px' : '15px 15px 15px 15px'}}>
                    <p className="SkillsList__header__text">{this.props.title}</p>
                    <img className="SkillsList__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downPointer" />
                </div>
                {this.state.open && 
                     <div className="SkillsList__list" style={{transform: 'translateY(' + ((isMobile) ? 0 : -11) + 'px)'}}>
                     {this.props.skills.map((skill, index) => (
                         <Skill name={skill} key={index}/>
                     ))}
                    </div>
                }
            </div>
        )
    }
}
