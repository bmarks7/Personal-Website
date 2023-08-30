import React, { Component } from "react";
import downPointer from "../../Images/downPointer.png";
import MeasuredSkill from "../MeasuredSkill/MeasuredSkill";
import "./SkillsList.scss";
import cssVars from "../../Variables.scss";
import { isMobile } from "react-device-detect";
import { skills_list, skillCategories } from "../../SkillObjs";

export default class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.openList = this.openList.bind(this);
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
        if (0 <= level <= 100 && category in skillCategories) {
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

  openList(e) {
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
        boxShadow: "0rem 1rem 3rem rgba(0,0,0,.25)",
        headerColor: cssVars.lightBlue,
      });
    }
  }

  sectionHover(e) {
    if (this.state.open === false) {
      this.setState({
        scaleUp: true,
        boxShadow: "0rem 1rem 3rem rgba(0,0,0,.25)",
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
      <div className="SkillsList" data-aos="fade-right">
        <div
          onMouseEnter={this.sectionHover}
          onMouseLeave={this.sectionStopHover}
          onClick={this.openList}
          className="SkillsList__header"
          style={{
            backgroundColor: this.state.headerColor,
            boxShadow: this.state.boxShadow,
            transform:
              "translateY(" +
              (this.state.scaleUp ? (isMobile ? -1 : -10) : 0) +
              "px)",
            borderRadius: this.state.open
              ? "15px 15px 0px 0px"
              : "15px 15px 15px 15px",
          }}
        >
          <p className="SkillsList__header__text">{this.props.title}</p>
          <img
            className="SkillsList__header__downPointer"
            src={downPointer}
            style={{
              transform: "rotate(" + (this.state.open ? 180 : 0) + "deg)",
            }}
            alt="downPointer"
          />
        </div>
        {this.state.open && (
          <div
            className="SkillsList__list"
            style={{ transform: "translateY(" + (isMobile ? -1 : -11) + "px)" }}
          >
            {this.state.sorted_skills.map((skill, index) => (
              <MeasuredSkill name={skill} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
// style={{transform: 'translateY(' + ((isMobile) ? -1 : -11) + 'px)'}}
