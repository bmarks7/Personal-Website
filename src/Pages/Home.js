import React, { Component } from 'react'
import facePic from '../Images/facePic.jpeg';
import devpostIcon from '../Images/devpostIcon.png';
import githubIcon from '../Images/githubIcon.png';
import linkedinIcon from '../Images/linkedinIcon.png';
import SkillsSection from '../Components/SkillsList';
import SocialLink from '../Components/SocialLink';
import Header from '../Components/Header';

import '../Styles/Home.scss'

export default class Home extends Component {

    render() {
        return (
            <div className='Home'>

                <div className='Home__intro'>
                    <img className='Home__intro__img' src={facePic} alt="professional pic"/>
                    <p className="Home__intro__description">Hi, I'm Brandon! I'm a third-year computer science student 
                    at Western University in London, Ontario and am based in the Greater Toronto Area.
                    <br/><br/> 
                    I have been programming since I was 12 years old, and I am passionate about pushing the boundaries of
                    what's possible with technology. I am interested in becoming a software developer upon graduation
                    so that I can build robust software that can deliver great results. 
                    <br/><br/> 
                    I have experience building full stack web and mobile applications and I currently plan to learn
                    more about machine learning and cloud computing.
                    <br/><br/>
                    Next summer, I will be joining J.D. Power as a software development intern where I will design, 
                    code, test, debug and analyze software applications for some of the world's largest automotive companies. 
                    <br /><br />
                    I build this website using React.js and Sass.
                    </p>
                </div>

                <div className="Home__links">
                    <SocialLink url = 'https://www.linkedin.com/in/brandon-m2/' name='LinkedIn' icon={linkedinIcon}/>
                    <SocialLink url = 'https://github.com/bmarks7' name='GitHub' icon={githubIcon}/>
                    <SocialLink url = 'https://devpost.com/bmarks50' name='Devpost' icon={devpostIcon}/>
                </div>

                <div className="Home__skills">
                    <Header text = 'Here are some of the technologies I&apos;ve worked with:'/>
                    <SkillsSection title = "Programming Languages" skills = {['Java', 'Python', 'JavaScript', 'C++', 'C']}/>
                    <SkillsSection title = "Front End Technologies" skills = {['HTML', 'CSS', 'React.js', 'React Native', 'Angular', 'Bootstrap']}/>
                    <SkillsSection title = "Back End Technologies" skills = {['Node.js', 'Flask', 'Django']}/>
                    <SkillsSection title = "Databases" skills = {['SQL', 'MongoDB', 'MySQL']}/>
                    <SkillsSection title = "AI and Machine Learning" skills = {['TensorFlow', 'Panas', 'NumPy']}/>
                    <SkillsSection title = "Other" skills = {['Git/GitHub', 'AWS', 'JIRA']}/>

                </div>
                
            </div>
        )
    }
}
