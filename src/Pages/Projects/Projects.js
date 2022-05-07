import React, { Component } from 'react'
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection'
import Header from '../../Components/Header/Header'
import devpostIcon from '../../Images/devpostIcon.png';
import githubIcon from '../../Images/githubIcon.png';
import './Projects.scss'

export default class Other extends Component {
    render() {
        return (
            <div className='Projects'>
                <Header text='Here are projects I created at hackathons:'/>

                <ProjectsSection 
                name = 'UmmLess.tech'
                event = 'DeltaHacks 8 Hackathon'
                duration = 'Jan 2022'
                description = 'A web application that helps people improve their public speaking skills by analyzing audio and using AssemblyAI API'
                skills={['React', 'Flask', 'SQLAlchemy']}
                links = {[{name: 'DevPost', url: 'https://devpost.com/software/ummless-tech?ref_content=user-portfolio&ref_feature=in_progress', icon: devpostIcon}, {name: 'GitHub', url: 'https://github.com/bmarks7/ummless.tech', icon: githubIcon}]}
                // img = {newLiveLogo}
                />

                <ProjectsSection 
                name = 'Ghost Runner'
                event = 'Hack Western 7 Hackathon'
                duration = 'Nov 2020'
                description = 'Our application allows users to record their runs in the form of ghosts (playable recorded runs) which record the distance that a user travels at certain times and allows their runs to be replayed and challenged by other users to beat their times. This helps to create a feeling of community by working out with (or against) your friends, even if you can&apos;t physically be together. The app allows you to manage your own profile, friends list, track your best ghost runs, challenge other runners with similar average speeds, and track your location in real-time.'
                skills={['GCP', 'JavaScript', 'MongoDB', 'React Native']}
                links = {[{name: 'Devpost', url: 'https://devpost.com/software/fooder-e5hv9r', icon: devpostIcon}]}
                // img = {ghostRunnerLogo}
                />

                <ProjectsSection 
                name = 'Fooder'
                event = 'eHacks Hackathon'
                duration = 'Feb 2020'
                description = 'An application that tracks personal grocery habits and nutritional information through user grocery purchases, highlights potential deficiencies, and suggests foods to fill the gaps to improve dietary health'
                skills={['Bootstrap', 'CSS', 'Django', 'HTML', 'JavaScript', 'Python']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/Fooder', icon: githubIcon}, {name: 'Devpost', url: 'https://devpost.com/software/fooder-e5hv9r', icon: devpostIcon}]}
                // img = {fooderLogo}
                />

                <Header text='And here are projects I worked on independently in my own time:'/>

                <ProjectsSection 
                name = 'brandonmarks.me (This website)'
                event=''
                duration = 'Jan 2022 - Present'
                description = 'I made this personal website using React and Sass, and host it on GitHub Pages'
                skills={['React', 'Sass']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/Personal-Website', icon: githubIcon}]}
                // img = {newLiveLogo}
                />

                <ProjectsSection 
                name = 'New Live'
                event=''
                duration = 'Aug 2020 - Sep 2020'
                description = 'A mobile application that makes it easy for landlords to find potential tenants and for people to find places to stay'
                skills={['React Native', 'Node.js', 'MongoDB', 'GCP']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/New_Live', icon: githubIcon}]}
                // img = {newLiveLogo}
                />

                <ProjectsSection 
                name = 'Marks Blog'
                event=''
                duration = 'Dec 2019 - Jan 2020'
                description = 'A full stack web application where users can create and manage their accounts, post blogs, and view the blogs of other users for any topic'
                skills={['Python', 'Django', 'HTML', 'Bootstrap', 'jQuery']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/Marks-Blog', icon: githubIcon}]}
                // img = {marksBlogLogo}
                />
            </div>
        )
    }
}
