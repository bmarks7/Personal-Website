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
              "Reduced time spent diagnosing and resolving network issues by 60% by enhancing code for performing automated network diagnostics and resolutions using Python, Robot Framework and Jenkins",
              "Reduced processing time of software for automated network diagnostics and resolutions by 30% by resolving software issues using Python, Robot Framework, HTML and Jenkins",
              "Enhanced quality of new software deployed by resolving irregularities in QA environment",
            ]}
            skills={["Python", "HTML"]}
          />

          <ExperienceSection
            org="Centro"
            title="Software Developer Intern"
            duration="Jan 2023 - Jun 2023"
            location="Toronto, ON Canada"
            descPoints={[
              "Enabled users with expired bank account credentials to reauthorize with banks using React Native, TypeScript, GraphQL, MongoDB and Plaid API",
              "Developed API for managing users’ personal preferences using TypeScript, GraphQL and MongoDB",
              "Reduced usage costs of third party API by 70% and reduced latency of currency conversion API by 50% by implementing cache using TypeScript and MongoDB",
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
            skills={["React", "Express.js", "PostgreSQL", "AWS", "JavaScript"]}
          />

          <ExperienceSection
            org="Honest Empathy"
            title="Software Engineer Intern"
            duration="Feb 2022 - May 2022"
            location="Vancouver, BC Canada"
            descPoints={[
              "Enhanced web application’s journaling and support group features for 100+ users using PERN Stack and Sequelize",
              "Collaborated with developers on agile team through sprint plannings, stand-ups and other meetings",
            ]}
            skills={["React", "Express.js", "PostgreSQL", "JavaScript"]}
          />

          <ExperienceSection
            org="eHacks Events"
            title="Full Stack Developer"
            duration="Jul 2021 - Jan 2022"
            location="London, ON Canada"
            descPoints={[
              "Raised $40K+ in sponsorship for hackathon with 100+ attendees by creating hackathon website with 10K+ visits using MERN Stack, Sass and responsive design",
              "Helped team win 2022 HSBC Entrepreneurship Project Accelerator, Best Project in Canada award",
              "Increased development progress by 30% by collaborating with 4 developers through code reviews and sprint plannings",
            ]}
            skills={["React", "Sass", "Express.js", "MongoDB", "JavaScript"]}
          />

          <ExperienceSection
            org="OGSR Library"
            title="Software Developer"
            duration="May 2021 - Aug 2021"
            location="London, ON Canada"
            descPoints={[
              "Enhanced features and UI of core sample viewer for 30 frequent users using HTML, CSS and JavaScript",
              "Improved data retrieval for geologists by debugging SQL queries in MySQL",
              "Reduced annual costs by $400 - $1800 and enhanced client experiences by developing VR application for geographical data visualization on Oculus Quest using Godot and GDScript",
            ]}
            skills={["HTML", "CSS", "JavaScript", "Godot", "SQL", "MySQL"]}
          />
        </div>
      </div>
    );
  }
}
