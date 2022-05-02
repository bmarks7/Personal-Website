import React, { Component } from 'react'
import downPointer from '../../Images/downPointer.png';
import calendarIcon from '../../Images/calendar.png';
import Subheader from '../Subheader/Subheader';
import Skill from '../Skill/Skill';
import ProjectLink from '../ProjectLink/ProjectLink';
import './ProjectsSection.scss';
import cssVars from '../../Variables.scss';
import { isMobile } from 'react-device-detect'

export default class ProjectsSection extends Component {

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
        this.openSection = this.openSection.bind(this);
        this.sectionHover = this.sectionHover.bind(this);
        this.sectionStopHover = this.sectionStopHover.bind(this);
        this.paragraphs = this.props.description.split('<br>')

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 700) {
                this.setState({smallScreen: true})
            } else{
                this.setState({smallScreen: false})
            }
        })
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
        } else{
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
            <div className="ProjectsSection">
                <div className="ProjectsSection__header" onMouseEnter={this.sectionHover} onMouseLeave={this.sectionStopHover} onClick={this.openSection} style={{backgroundColor: this.state.headerColor, boxShadow: this.state.boxShadow, transform: 'translateY(' + ((this.state.scaleUp) ? ((isMobile) ? -1 : -10) : 0) + 'px)', borderRadius: this.state.open ? '15px 15px 0px 0px' : '15px 15px 15px 15px'}}>
                    <div className="ProjectsSection__header__left">
                        
                        <div className="ProjectsSection__header__left__desc">
                            <span className="ProjectsSection__header__left__desc__name">{this.props.name}</span>
                            <span className="ProjectsSection__header__left__desc__event"> {(this.props.event !== '') ? `- ${this.props.event}` : ''}</span>
                            <br/><br /> 
                            <div className="ProjectsSection__header__left__desc__duration">
                                <img src={calendarIcon} alt="duration icon" className="ProjectsSection__header__left__desc__duration__icon"/>
                                <span className="ProjectsSection__header__left__desc__duration__text">{this.props.duration}</span>
                            </div>
                        </div>
                    </div>
                    
                    <img className="ProjectsSection__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downPointer" />
                </div>
                {this.state.open && 
                    <div className="ProjectsSection__content" style={{transform: 'translateY(' + ((isMobile) ? 0 : -11) + 'px)'}}>

                    {(this.props.description !== '') &&
                        <div className="ProjectsSection__content__description">
                            <Subheader text='Description'/>
                            {this.paragraphs.map((paragraph, index) => (
                                <div key={index} className='ProjectsSection__content__description__paragraph'>
                                    <span>{paragraph}</span>
                                </div>
                            ))}
                        </div>
                    }

                    {(this.props.technologies.length > 0) &&
                        <div className="ProjectsSection__content__skills">
                            <Subheader text='Technologies Used'/>

                            <div className="ProjectsSection__content__skills__list">
                                {this.props.technologies.map((tech, index) => (
                                    <Skill name={tech} key={index}/>
                                ))}
                            </div>
                        </div>
                    }

                    {(this.props.links.length > 0) &&
                        <div className="ProjectsSection__content__links">
                            <Subheader text='Links'/>

                            <div className="ProjectsSection__content__links__list">
                                {this.props.links.map((link, index) => (
                                    <div className="" key={index}>
                                        <ProjectLink name={link.name} url={link.url} icon={link.icon}/>
                                    </div>
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

