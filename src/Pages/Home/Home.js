import React, { Component } from "react";
import facePic from "../../Images/facePic.jpeg";
import devpostIcon from "../../Images/devpostIcon.png";
import githubIcon from "../../Images/githubIcon.png";
import linkedinIcon from "../../Images/linkedinIcon.png";
import SkillsSection from "../../Components/SkillsList/SkillsList";
import SocialLink from "../../Components/SocialLink/SocialLink";
import Header from "../../Components/Header/Header";
import MeasuredSkill from "../../Components/MeasuredSkill/MeasuredSkill";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__intro" data-aos="fade-right">
          <img
            className="Home__intro__img"
            src={facePic}
            alt="professional pic"
            data-aos="fade-right"
          />
          <div className="Home__intro__about">
            <Header
              text="About Me"
              className="Home__intro__about__description__header"
            />
            <div
              className="Home__intro__about__description"
              data-aos="fade-right"
            >
              <p className="Home__intro__about__description__text">
                Hi, I'm Brandon! I'm a fourth-year computer science student at
                the University of Western Ontario in London, Ontario and am
                based in the Greater Toronto Area. My expected graduation date
                is April 2024.
                <br />
                <br />
                Ever since I was a child, I was fascinated by many types of
                technology, was interested in how these tpyes of technology
                worked, and had an aptitude for STEM subjects. My programming
                journey began when I was 12 years old when I attended a STEM
                summer camp at the University of Toronto where I learned to
                program using Python. Later on, I decided that I want to become
                a software developer because I simply enjoy programming and want
                to build great software for others.
                <br />
                <br />
                Most of my programming experience has been in building full
                stack web and mobile applications and I have completed many
                software development internships during my time in university.
                I'm excited for my next software development opportunity for
                after I graduate from university.
              </p>
            </div>
          </div>
        </div>

        <div className="Home__links">
          <SocialLink
            url="https://www.linkedin.com/in/brandonm3/"
            name="LinkedIn"
            icon={linkedinIcon}
          />
          <SocialLink
            url="https://github.com/bmarks7"
            name="GitHub"
            icon={githubIcon}
          />
          <SocialLink
            url="https://devpost.com/bmarks50"
            name="DevPost"
            icon={devpostIcon}
          />
        </div>

        <div className="Home__skills">
          <Header text="Below are some of the technologies I've worked with:" />
          <div data-aos="fade-right" className="Home__skills__examples">
            <MeasuredSkill name="No Proficiency" />
            <MeasuredSkill name="Mid Proficiency" />
            <MeasuredSkill name="Full Proficiency" />
          </div>

          <SkillsSection
            title="Programming Languages"
            skills={["Java", "Python", "JavaScript", "TypeScript", "C++", "C"]}
          />
          <SkillsSection
            title="Front End Technologies"
            skills={[
              "HTML",
              "CSS",
              "React",
              "React Native",
              "Angular",
              "Bootstrap",
            ]}
          />
          <SkillsSection
            title="Back End Technologies"
            skills={["Express.js", "Flask", "Django"]}
          />
          <SkillsSection
            title="Databases"
            skills={["SQL", "MongoDB", "MySQL", "PostgreSQL"]}
          />
          <SkillsSection
            title="AI and Machine Learning"
            skills={["TensorFlow", "Pandas", "NumPy"]}
          />
          <SkillsSection
            title="Other"
            skills={["Git", "AWS", "Jira", "Unix", "GraphQL"]}
          />
        </div>
      </div>
    );
  }
}
