import React, { Component } from 'react'
import downPointer from '../Images/downPointer.png';
import Subheader from './Subheader';
import Skill from './Skill';
import ProjectLink from './ProjectLink';
import '../Styles/ProjectsSection.scss';

const baseColor = 'white';
const lightBlue = '#cce6ff';

export default class ProjectsSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            arrowUp: false,
            scaleUp: false,
            boxShadow: 'none',
            headerColor: baseColor,
        };
        this.openSection = this.openSection.bind(this);
        this.sectionHover = this.sectionHover.bind(this);
        this.sectionStopHover = this.sectionStopHover.bind(this);
        this.paragraphs = this.props.description.split('<br>')
    }

    openSection(e) {
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
                headerColor: lightBlue,
            })
        }
    }

    sectionStopHover(e) {
        if (this.state.open === false) {
            this.setState({
                scaleUp: false,
                boxShadow: 'none',
                headerColor: baseColor,
            })
        }
    }

    render() {
        return (
            <div className="ProjectsSection">
                <div className="ProjectsSection__header" onMouseEnter={this.sectionHover} onMouseLeave={this.sectionStopHover} onClick={this.openSection} style={{backgroundColor: this.state.headerColor, boxShadow: this.state.boxShadow, transform: 'scale(' + ((this.state.scaleUp) ? 1.05 : 1) + ')', borderRadius: this.state.open ? '15px 15px 0px 0px' : '15px 15px 15px 15px'}}>
                    <div className="ProjectsSection__header__left">
                        {/* <img className="ProjectsSection__header__left__img" src={this.props.img} alt="project icon"/> */}
                        
                        <div className="ProjectsSection__header__left__desc">
                            <span className="ProjectsSection__header__left__desc__name">{this.props.name}</span><br/><br />
                            <span className="ProjectsSection__header__left__desc__duration">{this.props.duration}</span>
                        </div>
                    </div>
                    
                    <img className="ProjectsSection__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downPointer" />
                </div>
                {this.state.open && 
                    <div className="ProjectsSection__content">

                    {(this.props.description !== '') &&
                        <div className="ProjectsSection__content__description">
                            <Subheader text='Description'/>
                            {this.paragraphs.map((paragraph) => (
                                <div key={paragraph} className='ProjectsSection__content__description__paragraph'>
                                    <span>{paragraph}</span>
                                </div>
                            ))}
                        </div>
                    }

                    {(this.props.technologies.length > 0) &&
                        <div className="ProjectsSection__content__skills">
                            <Subheader text='Technologies Used'/>

                            <div className="ProjectsSection__content__skills__list">
                                {this.props.technologies.map((tech) => (
                                    <Skill name={tech} key={tech}/>
                                ))}
                            </div>
                        </div>
                    }

                    {(this.props.links.length > 0) &&
                        <div className="ProjectsSection__content__links">
                            <Subheader text='Links'/>

                            <div className="ProjectsSection__content__links__list">
                                {this.props.links.map((link) => (
                                    <ProjectLink name={link.name} key={link.name} url={link.url}/>
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

