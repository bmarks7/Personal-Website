import React, { Component } from 'react'
// import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
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
                <div className="ResumeContainer">
                    <iframe title='resume' src="https://drive.google.com/file/d/1sBsKwA2b6fbKXsC-8A8v7_dZRsLCEEQd/preview" width="960" height="720" allow="autoplay"></iframe>
                </div>
            </div>
        )
    }
}
