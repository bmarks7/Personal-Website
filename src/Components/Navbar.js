import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className="Navbar__header">
                    <p className='Navbar__header__name'>Brandon Marks</p>

                    <Link to='/site'><p className="Navbar__header__link">Home</p></Link>
                    {/* <Link to='/site/experience'><p className="Navbar__header__link">Experience</p></Link>
                    <Link to='/site/projects'><p className="Navbar__header__link">Projects</p></Link>
                    <Link to='/site/resume'><p className="Navbar__header__link">Resume</p></Link>
                    <Link to='/site/contact'><p className="Navbar__header__link">Contact</p></Link> */}
                </div>
            </div>
        )
    }
}
