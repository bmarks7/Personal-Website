import React, { Component } from 'react'
import ProjectsSection from '../Components/ProjectsSection'
import Header from '../Components/Header'
// import newLiveLogo from '../Images/newLiveLogo.png';
// import fooderLogo from '../Images/fooderLogo.png';
// import ghostRunnerLogo from '../Images/ghostRunnerLogo.png';
// import marksBlogLogo from '../Images/marksBlogLogo.png';
// import devpostIcon from '../Images/devpostIcon.png';
// import githubIcon from '../Images/githubIcon.png';


import '../Styles/Projects.scss'

export default class Other extends Component {
    render() {
        return (
            <div className='Projects'>
                <Header text='Here are a few of the projects I worked on in hackathons and on my own'/>

                <ProjectsSection 
                name = 'New Live'
                duration = 'Aug 2020 - Sep 2020'
                description = 'A mobile application that makes it easy for landlords to find potential tenants and for people to find places to stay'
                technologies={['React Native', 'Node.js', 'MongoDB', 'Google Maps API']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/New_Live'}]}
                // img = {newLiveLogo}
                />

                <ProjectsSection 
                name = 'Ghost Runner - Hack Western 7 at Western University(Hackathon)'
                duration = 'Nov 2020'
                description = 'Our application allows users to record their runs in the form of ghosts (playable recorded runs) which record the distance that a user travels at certain times and allows their runs to be replayed and challenged by other users to beat their times. This helps to create a feeling of community by working out with (or against) your friends, even if you can&apos;t physically be together. The app allows you to manage your own profile, friends list, track your best ghost runs, challenge other runners with similar average speeds, and track your location in real-time.'
                technologies={['Google Cloud', 'Google Maps', 'JavaScript', 'MongoDB', 'React Native']}
                links = {[{name: 'Devpost', url: 'https://devpost.com/software/fooder-e5hv9r'}]}
                // img = {ghostRunnerLogo}
                />

                <ProjectsSection 
                name = 'Fooder - eHacks at Western University(Hackathon)'
                duration = 'Feb 2020'
                description = 'An application that tracks personal grocery habits and nutritional information through user grocery purchases, highlights potential deficiencies, and suggests foods to fill the gaps to improve dietary health'
                technologies={['Bootstrap', 'CSS', 'Django', 'HTML', 'JavaScript', 'Python']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/Fooder'}, {name: 'Devpost', url: 'https://devpost.com/software/fooder-e5hv9r'}]}
                // img = {fooderLogo}
                />

                <ProjectsSection 
                name = 'Marks Blog'
                duration = 'Dec 2019 - Jan 2020'
                description = 'A full stack web application where users can create and manage their accounts, post blogs, and view the blogs of other users for any topic'
                technologies={['Python', 'Django', 'HTML', 'Bootstrap', 'jQuery']}
                links = {[{name: 'GitHub', url: 'https://github.com/bmarks7/Marks-Blog'}]}
                // img = {marksBlogLogo}
                />
            </div>
        )
    }
}
