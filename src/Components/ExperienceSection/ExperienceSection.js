import React, { Component } from "react";
import downPointer from "../../Images/downPointer.png";
import locIcon from "../../Images/locIcon.png";
import calendarIcon from "../../Images/calendar.png";
import MeasuredSkill from "../MeasuredSkill/MeasuredSkill";
import Subheader from "../Subheader/Subheader";
import "./ExperienceSection.scss";
import cssVars from "../../Variables.scss";
import { isMobile } from "react-device-detect";
import { skills_list } from "../../SkillObjs";

export default class ExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.openSection = this.openSection.bind(this);
    this.sectionHover = this.sectionHover.bind(this);
    this.sectionStopHover = this.sectionStopHover.bind(this);

    let skills = this.props.skills;
    let skills_and_levels = [];
    let level = 0;
    let category = 0;

    skills.forEach((skill) => {
      if (skills_list[skill] !== undefined) {
        level = skills_list[skill]["level"];
        category = skills_list[skill]["category"];
        if (0 <= level <= 100 && 0 <= category <= 5) {
          skills_and_levels.push([skill, level]);
        }
      }
    });

    let n = skills_and_levels.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = skills_and_levels[i];
      // The last element of our sorted subarray
      let j = i - 1;
      while (j > -1 && current[1] < skills_and_levels[j][1]) {
        skills_and_levels[j + 1] = skills_and_levels[j];
        j--;
      }
      skills_and_levels[j + 1] = current;
    }

    let skills_sorted = [];
    skills_and_levels.forEach((skill_and_level) => {
      skills_sorted.push(skill_and_level[0]);
    });

    skills_sorted.reverse();

    this.state = {
      open: false,
      arrowUp: false,
      scaleUp: false,
      boxShadow: "none",
      headerColor: cssVars.baseColor,
      sorted_skills: skills_sorted,
    };
  }

  openSection(e) {
    if (isMobile) {
      if (this.state.open === true) {
        this.setState({
          open: false,
          arrowUp: false,
          scaleUp: false,
          boxShadow: "none",
          headerColor: cssVars.baseColor,
        });
      } else {
        this.setState({
          open: true,
          arrowUp: true,
          scaleUp: false,
          boxShadow: "none",
          headerColor: cssVars.lightBlue,
        });
      }
    } else {
      this.setState({
        open: !this.state.open,
        arrowUp: !this.state.arrowUp,
        scaleUp: true,
        boxShadow: "0 1rem 3rem rgba(0,0,0,.25)",
        headerColor: cssVars.lightBlue,
      });
    }
  }

  sectionHover(e) {
    if (this.state.open === false) {
      this.setState({
        scaleUp: true,
        boxShadow: "0 1rem 3rem rgba(0,0,0,.25)",
        headerColor: cssVars.lightBlue,
      });
    }
  }

  sectionStopHover(e) {
    if (this.state.open === false) {
      this.setState({
        scaleUp: false,
        boxShadow: "none",
        headerColor: cssVars.baseColor,
      });
    }
  }

  render() {
    return (
      <div className="ExperienceSection" data-aos="fade-right">
        <div
          className="ExperienceSection__header"
          onMouseEnter={this.sectionHover}
          onMouseLeave={this.sectionStopHover}
          onClick={this.openSection}
          style={{
            transform:
              "translateY(" +
              (this.state.scaleUp ? (isMobile ? -1 : -10) : 0) +
              "px)",
            backgroundColor: this.state.headerColor,
            boxShadow: this.state.boxShadow,
            borderRadius: this.state.open
              ? "15px 15px 0px 0px"
              : "15px 15px 15px 15px",
          }}
        >
          <div className="ExperienceSection__header__position">
            <span className="ExperienceSection__header__position__title">
              {this.props.title}
            </span>
            <span className="ExperienceSection__header__position__org">
              {" "}
              - {this.props.org}
            </span>
            <br />
            <br />
            <div className="ExperienceSection__header__position__duration">
              <img
                src={calendarIcon}
                alt="duration icon"
                className="ExperienceSection__header__position__duration__icon"
              />
              <span className="ExperienceSection__header__position__duration__text">
                {this.props.duration}
              </span>
            </div>
            <br />
            <div className="ExperienceSection__header__position__loc">
              <img
                src={locIcon}
                alt="location icon"
                className="ExperienceSection__header__position__loc__icon"
              />
              <span className="ExperienceSection__header__position__loc__name">
                {this.props.location}
              </span>
            </div>
          </div>

          <img
            className="ExperienceSection__header__downPointer"
            src={downPointer}
            style={{
              transform: "rotate(" + (this.state.open ? 180 : 0) + "deg)",
            }}
            alt="downpointer"
          />
        </div>
        {this.state.open && (
          <div
            className="ExperienceSection__content"
            style={{ transform: "translateY(" + (isMobile ? -1 : -11) + "px)" }}
          >
            {this.props.descPoints.length > 0 && (
              <div className="ExperienceSection__content__description">
                <Subheader text="Description" />
                <ul className="ExperienceSection__content__description__pointsList">
                  {this.props.descPoints.map((point, index) => (
                    <li
                      key={index}
                      className="ExperienceSection__content__description__pointsList__point"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {this.state.sorted_skills.length > 0 && (
              <div className="ExperienceSection__content__skills">
                <Subheader text="Technologies Used" />

                <div className="ExperienceSection__content__skills__list">
                  {this.state.sorted_skills.map((skill, index) => (
                    <MeasuredSkill name={skill} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
