import React, { Component } from 'react'
import Header from '../../Components/Header/Header';
import SocialLink from '../../Components/SocialLink/SocialLink';
import googleDriveIcon from '../../Images/googleDrive.png';

import './Resume.scss'

export default class Resume extends Component {

    constructor(props){
        super(props)
        this.state = {
            numPage: null,
            pageNUmber: 1,
        }
    }

    render() {
        return (
            <div className='Resume'>
                
                <div className="Resume__Container">
                    <Header text='My Resume'/>
                    <iframe className='Resume__Container__iframe' title='resume' src="https://drive.google.com/file/d/1xxNblnJRFJBu8s1ll_7jZBV9uHIU26Qo/preview" allow="autoplay"></iframe>
                    <div className="Resume__Container__driveLink">
                        <SocialLink url = 'https://drive.google.com/file/d/1xxNblnJRFJBu8s1ll_7jZBV9uHIU26Qo/view?usp=sharing' name='Link' icon={googleDriveIcon}/>
                    </div>
                </div>

            </div>
        )
    }
}
