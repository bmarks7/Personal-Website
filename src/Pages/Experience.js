import React, { Component } from 'react'
import ExperienceSection from '../Components/ExperienceSection'
import Header from '../Components/Header'
import '../Styles/Experience.scss'

export default class Experience extends Component {
    render() {
        return (
            <div className='Experience'>

                <div className="Experience__experience">
                    <Header text='Here is my relevant work experience:'/>
                    <ExperienceSection 
                    organization='ogsrlibrary' 
                    position ='Information Systems Assistant' 
                    description = '‐ Enhanced features and user interface of online core viewer tool using HTML, CSS and JavaScript,improving the experiences of 30 clients who use it frequently <br>‐ Developed an interactive virtual reality application for GIS data exploration on Oculus Quest, using Godot and GDScript, enhancing client experiences and reducing annual costs by $400 - $1800<br> ‐ Managed version control of source code using Git/GitHub, improving efficiency of programming tasks<br>'/>
                </div>
            </div>
        )
    }
}
