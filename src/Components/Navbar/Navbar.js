import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import cssVars from '../../Variables.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

const selectedProps = {'transform': 'scale(1.05)', 'boxShadow': '0 .3rem 4rem rgba(0,0,0,.25)', 'backgroundColor': cssVars.lightBlue}
const notSelectedProps = {'transform': 'scale(1)', 'boxShadow': 'none', 'backgroundColor': cssVars.baseColor}

const selectedPropsMobile = {'backgroundColor': cssVars.lightBlue}
const notSelectedPropsMobile = {'backgroundColor': cssVars.baseColor}

function Navbar() {

    const [selectedOption, setSelectedOption] = useState('home')
    const [open, setOpen] = useState(false)

    const [homeProps, setHomeProps] = useState(selectedProps)
    const [homePropsMobile, setHomePropsMobile] = useState(selectedPropsMobile)

    const [experienceProps, setExperienceProps] = useState(notSelectedProps)
    const [experiencePropsMobile, setExperiencePropsMobile] = useState(notSelectedPropsMobile)

    const [projectsProps, setProjectsProps] = useState(notSelectedProps)
    const [projectsPropsMobile, setProjectsPropsMobile] = useState(notSelectedPropsMobile)

    const [resumeProps, setResumeProps] = useState(notSelectedProps)
    const [resumePropsMobile, setResumePropsMobile] = useState(notSelectedPropsMobile)

    const [contactProps, setContactProps] = useState(notSelectedProps)
    const [contactPropsMobile, setContactPropsMobile] = useState(notSelectedPropsMobile)

    const maskTransitions = useTransition(open, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(open, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    useEffect( ()=>{
        let data = localStorage.getItem('stateObj')

        if(data){
            data = JSON.parse(data)
            setSelectedOption(data.selectedOption)
            setOpen(data.open)
            setHomeProps(data.homeProps)
            setHomePropsMobile(data.homePropsMobile)
            setExperienceProps(data.experienceProps)
            setExperiencePropsMobile(data.experiencePropsMobile)
            setProjectsProps(data.projectsProps)
            setProjectsPropsMobile(data.projectsPropsMobile)
            setResumeProps(data.resumeProps)
            setResumePropsMobile(data.resumePropsMobile)
            setContactProps(data.contactProps)
            setContactPropsMobile(data.contactPropsMobile)
        }
     }, [] );

     useEffect(()=>{
        localStorage.setItem('stateObj', JSON.stringify({
            'selectedOption': selectedOption,
            'open': open,
            'homeProps': homeProps,
            'homePropsMobile': homePropsMobile,
            'experienceProps': experienceProps,
            'experiencePropsMobile': experiencePropsMobile,
            'projectsProps': projectsProps,
            'projectsPropsMobile': projectsPropsMobile,
            'resumeProps': resumeProps,
            'resumePropsMobile': resumePropsMobile,
            'contactProps': contactProps,
            'contactPropsMobile': contactPropsMobile,
        }))
     } );

    function optionHover(e){
        let name = e.target.id

        if(name.includes('Mobile')){
            name = name.replace('Mobile', '')
        }

        if (selectedOption !== name) {
            changeSelectProps(name, true)
        }

    }

    function optionStopHover(e){
        let name = e.target.id

        if(name.includes('Mobile')){
            name = name.replace('Mobile', '')
        }

        // If the user has not selected this option
        if (selectedOption !== name) {
            changeSelectProps(name, false)
        }

    }

    function optionClick(e){
        let name = e.target.id

        if(name.includes('Mobile')){
            name = name.replace('Mobile', '')
            setOpen(false)
        }

        // If the user has not selected this option
        if (selectedOption !== name) {

            changeSelectProps(selectedOption, false)
            changeSelectProps(name, true)
            setSelectedOption(name)
        }

    }

    function changeSelectProps(optionName, selected){
        let props = {}
        let mobileProps = {}
        if (selected === true){
            props = selectedProps
            mobileProps = selectedPropsMobile
        }else{
            props = notSelectedProps
            mobileProps = notSelectedPropsMobile
        }
        switch(optionName){
            case 'home':
                setHomePropsMobile(mobileProps)
                setHomeProps(props)
                break;
            case 'experience':
                setExperiencePropsMobile(mobileProps)
                setExperienceProps(props)
                break;
            case 'projects':
                setProjectsPropsMobile(mobileProps)
                setProjectsProps(props)
                break;
            case 'resume':
                setResumePropsMobile(mobileProps)
                setResumeProps(props)
                break;
            case 'contact':
                setContactPropsMobile(mobileProps)
                setContactProps(props)
                break;
            default:
        }
    }

    window.onresize = removeMobileNavbar;
    
    // When we open the option button in mobile and then resize
    // the screen back to desktop, this function closes the mobile option button
    function removeMobileNavbar() {
        if (window.innerWidth > 700 && open === true) {
            document.getElementById('mobile_menu_mask').click();
        } 
    }

    return (
        <div className='Navbar'>
            <p className='Navbar__name'>Brandon Marks</p>

            <div className="Navbar__linkDiv"><Link to='/'><p id='home' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={homeProps} className="Navbar__linkDiv__link">Home</p></Link></div>
            <div className="Navbar__linkDiv"><Link to='/experience'><p id='experience' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={experienceProps} className="Navbar__linkDiv__link">Experience</p></Link></div>
            <div className="Navbar__linkDiv"><Link to='/projects'><p id='projects' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={projectsProps} className="Navbar__linkDiv__link">Projects</p></Link></div>
            <div className="Navbar__linkDiv"><Link to='/resume'><p id='resume' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={resumeProps} className="Navbar__linkDiv__link">Resume</p></Link></div>
            <div className="Navbar__linkDiv"><Link to='/contact'><p id='contact' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={contactProps} className="Navbar__linkDiv__link">Contact</p></Link></div>

            <nav className='Navbar__mobile' id='mobile_menu_btn'>
                <FontAwesomeIcon className='Navbar__mobile__icon'
                    
                    icon={faBars}
                    onClick = {() => {
                        setOpen(!open)
                    }}
                />
            </nav>
            {
                maskTransitions(
                    (styles, item) => item && <animated.div style={styles} 
                                            className="Navbar__mobile__menuMask"
                                            id='mobile_menu_mask'
                                            onClick={() => setOpen(false)}>
                    </animated.div>
                )
            }

            {
                menuTransitions(
                    (styles, item) => item && <animated.div style={styles} className='Navbar__mobile__menu'>
                        <Link to='/'><p id='homeMobile' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={homePropsMobile} className="Navbar__mobile__menu__link">Home</p></Link>
                        <Link to='/experience'><p id='experienceMobile' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={experiencePropsMobile} className="Navbar__mobile__menu__link">Experience</p></Link>
                        <Link to='/projects'><p id='projectsMobile' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={projectsPropsMobile} className="Navbar__mobile__menu__link">Projects</p></Link>
                        <Link to='/resume'><p id='resumeMobile' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={resumePropsMobile} className="Navbar__mobile__menu__link">Resume</p></Link>
                        <Link to='/contact'><p id='contactMobile' onMouseEnter = {optionHover} onMouseLeave = {optionStopHover} onClick={optionClick} style={contactPropsMobile} className="Navbar__mobile__menu__link">Contact</p></Link>
                    </animated.div>
                )
            }
        </div>
    )
}

export default Navbar
