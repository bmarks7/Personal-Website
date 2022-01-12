import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.scss'

const baseColor = 'white';
const lightPurple = '#b3b3ff';
const hoverColor = '#cce6ff';

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOption: 'home',
            homeProps: {'transform': 'scale(1.05)', 'boxShadow': '0 1rem 3rem rgba(0,0,0,.25)', 'backgroundColor': hoverColor},
            experienceProps: {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': baseColor},
            projectsProps: {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': baseColor},
            resumeProps: {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': baseColor},
            contactProps: {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': baseColor},
        }
        this.optionHover = this.optionHover.bind(this);
        this.optionStopHover = this.optionStopHover.bind(this);
        this.optionClick = this.optionClick.bind(this);
    }

    optionHover(e){
        const name = e.target.id;

        // If the user has not selected this option
        if (this.state.selectedOption !== name) {
            const optionName = name + 'Props';

            this.setState({
                [optionName]: {'transform': 'scale(1.05)', 'boxShadow': '0 1rem 3rem rgba(0,0,0,.25)', 'backgroundColor': lightPurple}
            }, () => { })
        }
    }

    optionStopHover(e){
        const name = e.target.id;

        // If the user has not selected this option
        if (this.state.selectedOption !== name) {
            const optionName = name + 'Props';

            this.setState({
                [optionName]: {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': baseColor}
            }, () => { })
        }
    }

    optionClick(e){
        const name = e.target.id;

        // If the user has not selected this option
        if (this.state.selectedOption !== name) {
            const lastOptionName = this.state.selectedOption + 'Props';
            const newOptionName = name + 'Props';

            this.setState({
                [lastOptionName]: {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': baseColor},
                [newOptionName]: {'transform': 'scale(1.05)', 'boxShadow': '0 1rem 3rem rgba(0,0,0,.25)', 'backgroundColor': hoverColor},
                selectedOption: name,
            }, () => {})
        }
    }

    render() {
        return (
            <div className='Navbar'>
                <div className="Navbar__header">
                    <p className='Navbar__header__name'>Brandon Marks</p>

                    <Link to='/site'><p id='home' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.homeProps} className="Navbar__header__link">Home</p></Link>
                    <Link to='/site/experience'><p id='experience' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.experienceProps} className="Navbar__header__link">Experience</p></Link>
                    <Link to='/site/projects'><p id='projects' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.projectsProps} className="Navbar__header__link">Projects</p></Link>
                    <Link to='/site/resume'><p id='resume' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.resumeProps} className="Navbar__header__link">Resume</p></Link>
                    <Link to='/site/contact'><p id='contact' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.contactProps} className="Navbar__header__link">Contact</p></Link>
                </div>
            </div>
        )
    }
}
