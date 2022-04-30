import React, { Component } from 'react'
import ExperienceSection from '../Components/ExperienceSection'
import Header from '../Components/Header'
import '../Styles/Experience.scss'

export default class Experience extends Component {
    render() {
        return (
            <div className='Experience'>

                <div className="Experience__section">
                    <Header text='Here is my relevant work experience:'/>

                    <ExperienceSection 
                    org = 'Honest Empathy'
                    orgLink='https://honestempathy.ca'
                    title = 'Software Developer'
                    duration = 'Feb 2022 - Present'
                    location='Vancouver, BC Canada (Remote)'
                    description='
                    ‐ Enhanced journaling and support group features on website using React, Express.js and PostgreSQL, improving many users’ experiences <br>
                    ‐ Coordinated Jira tickets with developers through sprint plannings and stand-ups, and discussed website details with a designer, ensuring efficient completion of tickets'
                    skills = {['React', 'Express', 'PostgreSQL']}
                    />

                    <ExperienceSection 
                    org = 'eHacks Events'
                    orgLink='https://ehacks.ca'
                    title = 'Full Stack Developer'
                    duration = 'Jul 2021 - Jan 2022'
                    location='London, ON Canada (Remote)'
                    description='
                    ‐ Implementing responsive design and maintainable code using React, Sass, Node.js and MongoDB,
                    creating a user-friendly website for 200 hackathon participants <br>
                    ‐ Collaborating with 2 other developers by performing code reviews and managing version control of
                    source code on Git using industry best practices, increasing development progress'
                    skills = {['React', 'Sass', 'Node.js', 'MongoDB', 'Git']}
                    />

                    <ExperienceSection 
                    org='OGSR Library' 
                    orgLink = 'http://www.ogsrlibrary.com'
                    title ='Software Developer' 
                    duration='May 2021 - Aug 2021'
                    location='London, ON Canada (Remote)'
                    description = '‐ Enhanced features and user interface of online core viewer tool using HTML, CSS and JavaScript,improving the experiences of 30 clients who use it frequently <br>‐ Developed an interactive virtual reality application for GIS data exploration on Oculus Quest, using Godot and GDScript, enhancing client experiences and reducing annual costs by $400 - $1800<br> ‐ Managed version control of source code using Git, improving efficiency of programming tasks<br>'
                    skills = {['HTML', 'CSS', 'JavaScript', 'Git']}
                    />
                </div>

                <div className="Experience__section">
                    <Header text ='Here is my relevant extracurricular experience:'/>

                    <ExperienceSection 
                    org = 'Western Computer Science Undergraduate Society'
                    orgLink='https://csus.csd.uwo.ca/#/'
                    title = 'Web Developer'
                    duration = 'Mar 2022 - Apr 2022'
                    location='London, ON Canada (Remote)'
                    description='Developing a new website for the Computer Science Undergraduate Society at Western University'
                    skills = {['React', 'Git']}
                    />

                    <ExperienceSection 
                    org = 'Western AI'
                    orgLink='https://www.westernuai.com'
                    title = 'Machine Learning Project Manager'
                    duration = 'Oct 2020 - Jan 2021'
                    location='London, ON Canada (Remote)'
                    description='
                    - Managed a team of 4 students in developing a machine learning model with a convolutional neural network, using TensorFlow, Scikit-learn and NumPy, that performs music genre classification, creating an effective model
                    <br>
                    - Solved for overfitting of data, improving model accuracy
                    <br>
                    - Preprocessed and organized audio data using various Python packages, such as Librosa, creating effective data to train and test model'
                    skills={['TensorFlow', 'scikit-learn']}
                    />

                    <ExperienceSection 
                    org = 'Western AI'
                    orgLink='https://www.westernuai.com'
                    title = 'Machine Learning Project Manager'
                    duration = 'Jun 2020 - Aug 2021'
                    location='London, ON Canada (Remote)'
                    description='
                    - Led a team of 4 students to create an animal image classification ML model with a convolutional neural network using TensorFlow and NumPy, achieving an accuracy of 98.5%
                    <br>
                    - Managed team by developing a strategic 3-month schedule, communicating and assigning tasks based on skill-level, and developing members’ technical skills, improving team workflow
                    <br>
                    - Developed web application using Python, Flask, HTML, CSS, and JavaScript and implemented ML model into web application, making project user-friendly'
                    skills={['TensorFlow', 'NumPy', 'Flask', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']}
                    />

                    <ExperienceSection 
                    org = 'Western AI'
                    orgLink='https://www.westernuai.com'
                    title = 'Member'
                    duration = 'Oct 2019 - Mar 2020'
                    location='London, ON Canada (Remote)'
                    description='Developed experience with machine learning concepts'
                    skills={['Pandas', 'NumPy', 'TensorFlow']}
                    />
                </div>

                <div className="Experience__section">
                    <Header text ='Here is my relevant volunteer experience:'/>
                    <ExperienceSection 
                    org = 'St. John The Compassionate Mission'
                    orgLink='https://www.stjohnsmission.org'
                    title = 'Database Developer'
                    duration = 'Jun 2020 - Aug 2020'
                    location='Toronto, ON Canada (Remote)'
                    description='
                    - Developed a structured database application and queries using Microsoft Access, SQL and Dia, enabling easier management of many different types of records
                    <br>
                    - Programmed application to automatically create mailing lists and shipping labels using SQL, reducing time spent on routine tasks by 30%'
                    skills={['SQL', 'Access', 'Dia']}
                    />
                </div>

            </div>
        )
    }
}
