import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.scss'
import cssVars from '../Styles/Variables.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
// import { useTransition, animated } from 'react-spring'

const selectedPropsBlue = {'transform': 'scale(1.05)', 'boxShadow': '0 .3rem 4rem rgba(0,0,0,.25)', 'backgroundColor': cssVars.lightBlue}
const notSelectedProps = {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': cssVars.baseColor}

const selectedPropsMobileBlue = {'backgroundColor': cssVars.lightBlue}
const notSelectedPropsMobile = {'backgroundColor': cssVars.baseColor}

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOption: 'home',
            homeProps: selectedPropsBlue,
            homePropsMobile: selectedPropsMobileBlue,

            experienceProps: notSelectedProps,
            experiencePropsMobile: notSelectedPropsMobile,

            projectsProps: notSelectedProps,
            projectsPropsMobile: notSelectedPropsMobile,

            resumeProps: notSelectedProps,
            resumePropsMobile: notSelectedPropsMobile,

            contactProps: notSelectedProps,
            contactPropsMobile: notSelectedPropsMobile,

        }

        this.optionHover = this.optionHover.bind(this);
        this.optionStopHover = this.optionStopHover.bind(this);
        this.optionClick = this.optionClick.bind(this);
    }

    componentDidMount() {
        const data = localStorage.getItem('navbar-sel')
        if(data){
            this.setState(JSON.parse(data))
        }
    }

    componentDidUpdate() {
        localStorage.setItem('navbar-sel', JSON.stringify(this.state))
    }

    optionHover(e){
        let name = e.target.id

        if(name.includes('Mobile')){
            name = name.replace('Mobile', '')

            if (this.state.selectedOption !== name) {
                const optionNameMobile = name + 'PropsMobile'
    
                this.setState({
                    [optionNameMobile]: selectedPropsMobileBlue
                }, () => { })
            }
        }

        else{
            // If the user has not selected this option
            if (this.state.selectedOption !== name) {
                const optionName = name + 'Props';

                this.setState({
                    [optionName]: selectedPropsBlue,
                }, () => { })
            }
        }

    }

    optionStopHover(e){
        let name = e.target.id

        if(name.includes('Mobile')){
            name = name.replace('Mobile', '')

            if (this.state.selectedOption !== name) {
                const optionNameMobile = name + 'PropsMobile'
    
                this.setState({
                    [optionNameMobile]: notSelectedPropsMobile
                }, () => { })
            }
        }

        else{
            // If the user has not selected this option
            if (this.state.selectedOption !== name) {
                const optionName = name + 'Props';

                this.setState({
                    [optionName]: notSelectedProps,
                }, () => { })
            }
        }

    }

    optionClick(e){
        let name = e.target.id

        if(name.includes('Mobile')){
            name = name.replace('Mobile', '')
            this.setState({open: false})
        }

        // If the user has not selected this option
        if (this.state.selectedOption !== name) {
            const lastOptionName = this.state.selectedOption + 'Props';
            const newOptionName = name + 'Props';

            const lastOptionNameMobile = this.state.selectedOption + 'PropsMobile';
            const newOptionNameMobile = name + 'PropsMobile';

            this.setState({
                [lastOptionName]: notSelectedProps,
                [newOptionName]: selectedPropsBlue,
                [lastOptionNameMobile]: notSelectedPropsMobile,
                [newOptionNameMobile]: selectedPropsMobileBlue,
                selectedOption: name,
            }, () => {})
        }

    }

    render() {
        return (
            <div className='Navbar'>
                <p className='Navbar__name'>Brandon Marks</p>

                <div className="Navbar__linkDiv"><Link to='/'><p id='home' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.homeProps} className="Navbar__linkDiv__link">Home</p></Link></div>
                <div className="Navbar__linkDiv"><Link to='/experience'><p id='experience' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.experienceProps} className="Navbar__linkDiv__link">Experience</p></Link></div>
                <div className="Navbar__linkDiv"><Link to='/projects'><p id='projects' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.projectsProps} className="Navbar__linkDiv__link">Projects</p></Link></div>
                <div className="Navbar__linkDiv"><Link to='/resume'><p id='resume' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.resumeProps} className="Navbar__linkDiv__link">Resume</p></Link></div>
                <div className="Navbar__linkDiv"><Link to='/contact'><p id='contact' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.contactProps} className="Navbar__linkDiv__link">Contact</p></Link></div>

                <nav className='Navbar__mobile'>
                    <FontAwesomeIcon className='Navbar__mobile__icon'
                        icon={faBars}
                        onClick = {() => {
                            this.setState({open: !this.state.open})
                        }}
                    />

                {this.state.open && 
                    <div id='menuMask' ref={(input) => (this.inputElement = input)} className="Navbar__mobile__menuMask" onClick={() => this.setState({open: false})}></div>
                }
                {this.state.open && 
                    <div className='Navbar__mobile__menu'>
                        <Link to='/'><p id='homeMobile' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.homePropsMobile} className="Navbar__mobile__menu__link">Home</p></Link>
                        <Link to='/experience'><p id='experienceMobile' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.experiencePropsMobile} className="Navbar__mobile__menu__link">Experience</p></Link>
                        <Link to='/projects'><p id='projectsMobile' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.projectsPropsMobile} className="Navbar__mobile__menu__link">Projects</p></Link>
                        <Link to='/resume'><p id='resumeMobile' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.resumePropsMobile} className="Navbar__mobile__menu__link">Resume</p></Link>
                        <Link to='/contact'><p id='contactMobile' onMouseEnter = {this.optionHover} onMouseLeave = {this.optionStopHover} onClick={this.optionClick} style={this.state.contactPropsMobile} className="Navbar__mobile__menu__link">Contact</p></Link>
                    </div>
                
                }
                </nav>
            </div>
        )
    }
}
