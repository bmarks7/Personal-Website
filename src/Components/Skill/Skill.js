import React, { Component } from 'react'
import {skills_list, categories, colors} from '../../SkillObjs'
import './Skill.scss';

function Skill (props){

    return (
        <div className='Skill'>
            <span className='Skill__name'>{props.name}</span>
        </div>
    )
}

export default Skill
