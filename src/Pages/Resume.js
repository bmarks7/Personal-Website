import React, { Component } from 'react'
import Header from '../Components/Header';
import '../Styles/Resume.scss'

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
                    <iframe className='Resume__Container__iframe' title='resume' src="https://drive.google.com/file/d/1sBsKwA2b6fbKXsC-8A8v7_dZRsLCEEQd/preview" allow="autoplay"></iframe>
                </div>

            </div>
        )
    }
}
