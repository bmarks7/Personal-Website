import React from 'react'
import {skills_list, categories, colors} from '../../SkillObjs'
import './MeasuredSkill.scss';

function MeasuredSkill (props){

    const skill = props.name
    const level = skills_list[skill]['level']
    const category = categories[skills_list[skill]['category']]
    const lightColor = colors[category]['lightColor']
    const darkColor = colors[category]['darkColor']

    return (
        <div className='MeasuredSkill'>
            <span style={{background: `linear-gradient(to right, ${darkColor} ${level}%, ${lightColor} ${level}%)`}} className='MeasuredSkill__name'>{props.name}</span>
        </div>
    )
}

export default MeasuredSkill
