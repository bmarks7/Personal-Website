import React, { Component } from 'react'
import facePic from '../../Images/facePic.jpeg';
import devpostIcon from '../../Images/devpostIcon.png';
import githubIcon from '../../Images/githubIcon.png';
import linkedinIcon from '../../Images/linkedinIcon.png';
import SkillsSection from '../../Components/SkillsList/SkillsList';
import SocialLink from '../../Components/SocialLink/SocialLink';
import Header from '../../Components/Header/Header';
import './Home.scss'


export default class Home extends Component {

    render() {
        return (
            <div className='Home'>

                <div className='Home__intro' data-aos='fade-right'>
                    <img className='Home__intro__img' src={facePic} alt="professional pic" data-aos='fade-right'/>
                    <div className="Home__intro__about">
                        <Header text = 'About Me' className='Home__intro__about__description__header'/>
                        <div className="Home__intro__about__description" data-aos='fade-right'>
                            <p className="Home__intro__about__description__text">Hi, I'm Brandon! I'm a third-year computer science student 
                            at Western University in London, Ontario and am based in the Greater Toronto Area.
                            <br/><br/> 
                            I started programming when I was 12 years old, when I attended a STEM summer camp at the University
                            of Toronto where I learned to use Python. I am passionate about pushing the boundaries of
                            what's possible with technology. I am interested in becoming a software developer upon graduation
                            so that I can build robust software that can deliver great results. 
                            <br/><br/> 
                            I have experience building full stack web and mobile applications and I currently plan to learn
                            more about machine learning and cloud computing.
                            <br/><br/>
                            I'm currently a software developer intern at J.D. Power on the General Motors team. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Home__links">
                    <SocialLink url = 'https://www.linkedin.com/in/brandonm3/' name='LinkedIn' icon={linkedinIcon}/>
                    <SocialLink url = 'https://github.com/bmarks7' name='GitHub' icon={githubIcon}/>
                    <SocialLink url = 'https://devpost.com/bmarks50' name='DevPost' icon={devpostIcon}/>
                </div>

                <div className="Home__skills">
                    <Header text = 'Here are some of the technologies I&apos;ve worked with:'/>
                    <p data-aos='fade-right' className="Home__skills__subheader">For each skill, the percentage of it that is filled with the darker color represents how proficient I am in it</p>
                    <SkillsSection title = "Programming Languages" skills = {['Java', 'Python', 'JavaScript', 'C++', 'C']}/>
                    <SkillsSection title = "Front End Technologies" skills = {['HTML', 'CSS', 'React', 'React Native', 'Angular', 'Bootstrap']}/>
                    <SkillsSection title = "Back End Technologies" skills = {['Node.js', 'Flask', 'Django', 'Spring Boot']}/>
                    <SkillsSection title = "Databases" skills = {['SQL', 'MongoDB', 'MySQL', 'PostgreSQL']}/>
                    <SkillsSection title = "AI and Machine Learning" skills = {['TensorFlow', 'Pandas', 'NumPy']}/>
                    <SkillsSection title = "Other" skills = {['Git', 'AWS', 'Jira', 'Unix']}/>

                </div>
                
            </div>
        )
    }
}
