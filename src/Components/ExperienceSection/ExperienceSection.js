import React, { Component } from 'react'
import downPointer from '../../Images/downPointer.png';
import locIcon from '../../Images/locIcon.png';
import calendarIcon from '../../Images/calendar.png';
import Skill from '../Skill/Skill';
import Subheader from '../Subheader/Subheader';
import './ExperienceSection.scss';
import cssVars from '../../Variables.scss';
import { isMobile } from 'react-device-detect'

export default class ExperienceSection extends Component {

    constructor(props) {

        super(props)
        this.state = {
            open: false,
            arrowUp: false,
            scaleUp: false,
            boxShadow: 'none',
            headerColor: cssVars.baseColor,
        };
        this.openSection = this.openSection.bind(this);
        this.sectionHover = this.sectionHover.bind(this);
        this.sectionStopHover = this.sectionStopHover.bind(this);
        this.points = this.props.description.split('<br>')
    }

    openSection(e) {
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
        }
        else{
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
            <div className="ExperienceSection">
                <div className="ExperienceSection__header" onMouseEnter={this.sectionHover} onMouseLeave={this.sectionStopHover} onClick={this.openSection} style={{backgroundColor: this.state.headerColor, boxShadow: this.state.boxShadow, transform: 'translateY(' + ((this.state.scaleUp) ? ((isMobile) ? -1 : -10) : 0) + 'px)', borderRadius: this.state.open ? '15px 15px 0px 0px' : '15px 15px 15px 15px'}}>
                    <div className="ExperienceSection__header__position">
                        <span className="ExperienceSection__header__position__title">{this.props.title}</span>
                        <span className="ExperienceSection__header__position__org"> - {this.props.org}</span>
                        <br /><br />
                        <div className="ExperienceSection__header__position__duration">
                            <img src={calendarIcon} alt="duration icon" className="ExperienceSection__header__position__duration__icon"/>
                            <span className="ExperienceSection__header__position__duration__text">{this.props.duration}</span>
                        </div>
                        <br />
                        <div className="ExperienceSection__header__position__loc">
                            <img src={locIcon} alt="location icon" className="ExperienceSection__header__position__loc__icon"/>
                            <span className="ExperienceSection__header__position__loc__name">{this.props.location}</span>
                        </div>
                    </div>
                    
                    <img className="ExperienceSection__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downpointer" />
                </div>
                {this.state.open && 
                    <div className="ExperienceSection__content" style={{transform: 'translateY(' + ((isMobile) ? -1 : -11) + 'px)'}}>

                        {(this.props.description !== '') &&
                            <div className="ExperienceSection__content__description">
                                <Subheader text='Description'/>
                                {this.points.map((point, index) => (
                                    <div key={index} className='ExperienceSection__content__description__point'>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        }

                        {(this.props.skills.length > 0) &&
                            <div className="ExperienceSection__content__skills">
                                <Subheader text='Technologies Used'/>

                                <div className="ExperienceSection__content__skills__list">
                                    {this.props.skills.map((skill, index) => (
                                        <Skill name={skill} key={index}/>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}
