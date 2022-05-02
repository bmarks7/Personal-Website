import React, { Component, useState } from 'react'
import './Toggle.scss'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Toggle() {

    const [checked, setChecked] = useState(true);
    

    return (
        <div className='Toggle'>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Particles" />
            </FormGroup>
        </div>
    )
}

export default Toggle
