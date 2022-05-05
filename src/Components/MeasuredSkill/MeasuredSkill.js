import React from 'react'
import {skills_list, categories, colors} from '../../SkillObjs'
import './MeasuredSkill.scss';

function MeasuredSkill (props){

    const skill = props.name
    const level = skills_list[skill]['level']
    const category = categories[skills_list[skill]['category']]
    const color1 = colors[category]['color1']
    const color2 = colors[category]['color2']

    return (
        <div className='MeasuredSkill'>
            <span style={{background: `linear-gradient(to right, ${color2} ${level}%, ${color1} ${level}%)`}} className='MeasuredSkill__name'>{props.name}</span>
        </div>
    )
}

export default MeasuredSkill
