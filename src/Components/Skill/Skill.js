import React from 'react'
import './Skill.scss';

function Skill (props){

    return (
        <div className='Skill'>
            <span className='Skill__name'>{props.name}</span>
        </div>
    )
}

export default Skill
