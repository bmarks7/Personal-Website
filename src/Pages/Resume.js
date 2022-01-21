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

    onDocumentLoadSuccess({newNumPages}){
        this.setState({
            numPages: newNumPages,
            pageNumber: 1,
        })
    }

    render() {
        return (
            <div className='Resume'>
                <Header text='My Resume'/>
                <div className="Resume__Container">
                    <iframe title='resume' src="https://drive.google.com/file/d/1sBsKwA2b6fbKXsC-8A8v7_dZRsLCEEQd/preview" width="100%" height="900" allow="autoplay"></iframe>
                </div>
            </div>
        )
    }
}
