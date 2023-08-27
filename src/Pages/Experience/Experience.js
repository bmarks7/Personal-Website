import React, { Component } from "react";
import ExperienceSection from "../../Components/ExperienceSection/ExperienceSection";
import Header from "../../Components/Header/Header";
import "./Experience.scss";

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="Experience__section">
          <Header text="Here is my relevant work experience:" />

          <ExperienceSection
            org="Rogers Communications"
            title="Automation Specialist Co-op"
            duration="May 2023 - Aug 2023"
            location="Brampton, ON Canada"
            descPoints={[
              "Reduced time spent diagnosing and resolving network issues by 80% by enhancing code for performing automated network diagnostics and resolutions using Python, Robot Framework and Jenkins",
              "Reduced processing time of software for automated network diagnostics and resolutions by resolving production environment flaws using Python, Robot Framework, HTML and Jenkins",
              "Improved quality of new software deployed by team members by resolving irregularities in QA environment",
            ]}
            skills={["Python"]}
          />

          <ExperienceSection
            org="Centro"
            title="Software Developer Intern"
            duration="Jan 2023 - Jun 2023"
            location="Toronto, ON Canada"
            descPoints={[
              "Enabled users with expired bank account credentials to reauthorize with banks using React Native, TypeScript, GraphQL, MongoDB and Plaid API",
              "Developed API for managing users’ personal preferences using TypeScript, GraphQL and MongoDB",
              "Reduced usage costs of third party API by 70% and reduced currency conversion microservice latency by 50% by implementing cache using TypeScript and MongoDB",
              "Practiced test-driven development by writing TypeScript unit tests using Jest",
              "Enhanced user experience by adding new UI elements using React Native",
            ]}
            skills={["React Native", "TypeScript", "MongoDB", "GraphQL"]}
          />

          <ExperienceSection
            org="WingZ Business Barter"
            title="Software Developer Intern"
            duration="Sep 2022 - May 2023"
            location="Vancouver, BC Canada"
            descPoints={[
              "Implemented user search feature with autocomplete using Python, Django and jQuery",
              "Implemented interactive map for finding nearby users using HTML, CSS and JavaScript",
              "Reduced ~50 businesses’ daily costs by 20% by creating responsive front-end for new invoicing web application using React, and collaborating with CTO to integrate it with back-end REST API and Stripe API",
            ]}
            skills={["Python", "Django", "HTML", "CSS", "JavaScript", "React"]}
          />

          <ExperienceSection
            org="The Teacher App"
            title="Software Developer Intern"
            duration="Sep 2022 - Dec 2022"
            location="Montreal, QC Canada"
            descPoints={[
              "Implemented convenient file sharing system for users using React, JavaScript and AWS S3",
              "Enabled users to modify profile information on settings page using PERN Stack and Prisma",
              "Resolved issues and enhanced UI in several pages of web application using React and Material UI",
            ]}
            skills={[
              "React",
              "Express",
              "PostgreSQL",
              "AWS",
              "Git",
              "JavaScript",
            ]}
          />

          <ExperienceSection
            org="Honest Empathy"
            title="Software Engineer"
            duration="Feb 2022 - May 2022"
            location="Vancouver, BC Canada"
            descPoints={[
              "Enhanced journaling and support group features on website using React, Express.js and PostgreSQL, improving many users’ experiences",
              "Coordinated Jira tickets with developers through sprint plannings and stand-ups, and discussed website details with a designer, ensuring efficient completion of tickets",
            ]}
            skills={[
              "React",
              "Express",
              "PostgreSQL",
              "Jira",
              "Git",
              "JavaScript",
            ]}
          />

          <ExperienceSection
            org="eHacks Events"
            title="Full Stack Developer"
            duration="Jul 2021 - Jan 2022"
            location="London, ON Canada"
            descPoints={[
              "Implementing responsive design and maintainable code using React, Sass, Node.js and MongoDB, creating a user-friendly website for 200 hackathon participants",
              "Collaborating with 2 other developers by performing code reviews and managing version control ofsource code on Git using industry best practices, increasing development progress",
            ]}
            skills={["React", "Sass", "Node.js", "MongoDB", "Git"]}
          />

          <ExperienceSection
            org="OGSR Library"
            title="Software Developer"
            duration="May 2021 - Aug 2021"
            location="London, ON Canada"
            descPoints={[
              "Enhanced features and user interface of online core viewer tool using HTML, CSS and JavaScript,improving the experiences of 30 clients who use it frequently",
              "Developed an interactive virtual reality application for GIS data exploration on Oculus Quest, using Godot and GDScript, enhancing client experiences and reducing annual costs by $400 - $1800",
              "Managed version control of source code using Git, improving efficiency of programming tasks",
            ]}
            skills={["HTML", "CSS", "JavaScript", "Git", "Godot"]}
          />
        </div>

        <div className="Experience__section">
          <Header text="Here is my relevant extracurricular experience:" />

          <ExperienceSection
            org="Western Computer Science Undergraduate Society"
            title="Web Developer"
            duration="Mar 2022 - Apr 2022"
            location="London, ON Canada"
            descPoints={[
              "Developing a new website for the Computer Science Undergraduate Society at Western University",
            ]}
            skills={["React", "Git"]}
          />

          <ExperienceSection
            org="Western AI"
            title="Machine Learning Project Manager"
            duration="Oct 2020 - Jan 2021"
            location="London, ON Canada"
            descPoints={[
              "Managed a team of 4 students in developing a machine learning model with a convolutional neural network, using TensorFlow, Scikit-learn and NumPy, that performs music genre classification, creating an effective model",
              "Solved for overfitting of data, improving model accuracy",
              "Preprocessed and organized audio data using various Python packages, such as Librosa, creating effective data to train and test model",
            ]}
            skills={["TensorFlow", "scikit-learn"]}
          />

          <ExperienceSection
            org="Western AI"
            title="Machine Learning Project Manager"
            duration="Jun 2020 - Aug 2021"
            location="London, ON Canada"
            descPoints={[
              "Led a team of 4 students to create an animal image classification ML model with a convolutional neural network using TensorFlow and NumPy, achieving an accuracy of 98.5%",
              "Managed team by developing a strategic 3-month schedule, communicating and assigning tasks based on skill-level, and developing members’ technical skills, improving team workflow",
              "Developed web application using Python, Flask, HTML, CSS, and JavaScript and implemented ML model into web application, making project user-friendly",
            ]}
            skills={[
              "TensorFlow",
              "NumPy",
              "Flask",
              "Bootstrap",
              "HTML",
              "CSS",
              "JavaScript",
            ]}
          />

          <ExperienceSection
            org="Western AI"
            title="Member"
            duration="Oct 2019 - Mar 2020"
            location="London, ON Canada"
            descPoints="Developed experience with machine learning concepts"
            skills={["Pandas", "NumPy", "TensorFlow"]}
          />
        </div>

        <div className="Experience__section">
          <Header text="Here is my relevant volunteer experience:" />
          <ExperienceSection
            org="St. John The Compassionate Mission"
            title="Database Developer"
            duration="Jun 2020 - Aug 2020"
            location="Toronto, ON Canada"
            descPoints={[
              "Developed a structured database application and queries using Microsoft Access, SQL and Dia, enabling easier management of many different types of records",
              "Programmed application to automatically create mailing lists and shipping labels using SQL, reducing time spent on routine tasks by 30%",
            ]}
            skills={["SQL", "MS Access"]}
          />
        </div>
      </div>
    );
  }
}
