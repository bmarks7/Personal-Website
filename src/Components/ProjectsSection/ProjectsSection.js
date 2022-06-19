import React, { Component } from 'react'
import downPointer from '../../Images/downPointer.png';
import calendarIcon from '../../Images/calendar.png';
import Subheader from '../Subheader/Subheader';
import MeasuredSkill from '../MeasuredSkill/MeasuredSkill';
import ProjectLink from '../ProjectLink/ProjectLink';
import './ProjectsSection.scss';
import cssVars from '../../Variables.scss';
import { isMobile } from 'react-device-detect'
import {skills_list} from '../../SkillObjs'

export default class ProjectsSection extends Component {

    constructor(props) {

        super(props)

        this.openSection = this.openSection.bind(this);
        this.sectionHover = this.sectionHover.bind(this);
        this.sectionStopHover = this.sectionStopHover.bind(this);
        this.paragraphs = this.props.description.split('<br>')

        let skills = this.props.skills;
        let skills_and_levels = []
        let level = 0
        let category = 0

        skills.forEach((skill) => {
            if(skills_list[skill] !== undefined){
                level = skills_list[skill]['level']
                category = skills_list[skill]['category']
                if (0 <= level <= 100 && 0 <= category <= 5){
                    skills_and_levels.push([skill, level])
                }
            }
        })

        let n = skills_and_levels.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = skills_and_levels[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current[1] < skills_and_levels[j][1])) {
                skills_and_levels[j+1] = skills_and_levels[j];
                j--;
            }
            skills_and_levels[j+1] = current;
        }

        let skills_sorted = []
        skills_and_levels.forEach((skill_and_level) => {
            skills_sorted.push(skill_and_level[0])
        })

        skills_sorted.reverse()

        this.state = {
            open: false,
            arrowUp: false,
            scaleUp: false,
            boxShadow: 'none',
            headerColor: cssVars.baseColor,
            sorted_skills: skills_sorted,
        };
        
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
                boxShadow: '0rem 1rem 3rem rgba(0,0,0,.25)',
                headerColor: cssVars.lightBlue,
            });
        }
    }

    sectionHover(e) {
        if (this.state.open === false) {
            this.setState({
                scaleUp: true,
                boxShadow: '0rem 1rem 3rem rgba(0,0,0,.25)',
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
            <div className="ProjectsSection" data-aos='fade-right'>
                <div className="ProjectsSection__header" onMouseEnter={this.sectionHover} onMouseLeave={this.sectionStopHover} onClick={this.openSection} style={{transform: 'translateY(' + ((this.state.scaleUp) ? ((isMobile) ? -1 : -10) : 0) + 'px)', boxShadow: this.state.boxShadow, backgroundColor: this.state.headerColor, borderRadius: this.state.open ? '15px 15px 0px 0px' : '15px 15px 15px 15px'}}>
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
                    <div className="ProjectsSection__content" style={{transform: 'translateY(' + ((isMobile) ? -1 : -11) + 'px)'}}>

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

                    {(this.state.sorted_skills.length > 0) &&
                        <div className="ProjectsSection__content__skills">
                            <Subheader text='Technologies Used'/>

                            <div className="ProjectsSection__content__skills__list">
                                {this.state.sorted_skills.map((skill, index) => (
                                    <MeasuredSkill name={skill} key={index}/>
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

