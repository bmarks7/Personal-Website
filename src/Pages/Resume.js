import React, { Component } from 'react'
import Header from '../Components/Header';
import '../Styles/Resume.scss'
import SocialLink from '../Components/SocialLink'
import ResumeIcon from '../Images/resumeIcon.png'

export default class Resume extends Component {

    constructor(props){
        super(props)
        this.state = {
            numPage: null,
            pageNUmber: 1,
        }
    }

    onDocumentLoadSuccess({newNumPages}){
        this.setState({
            numPages: newNumPages,
            pageNumber: 1,
        })
    }

    render() {
        return (
            <div className='Resume'>
                
                <div className="Resume__Container">
                    <Header text='My Resume'/>
                    <iframe className='Resume__Container__iframe' title='resume' src="https://drive.google.com/file/d/1sBsKwA2b6fbKXsC-8A8v7_dZRsLCEEQd/preview" allow="autoplay"></iframe>
                </div>

                <div className="Resume__link">
                    <SocialLink url = 'https://drive.google.com/file/d/1sBsKwA2b6fbKXsC-8A8v7_dZRsLCEEQd/view?usp=sharing' name='Resume' icon={ResumeIcon}/>
                </div>

            </div>
        )
    }
}
