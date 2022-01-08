import React, { Component } from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
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
                    {/* <Document file='../pdf/Brandon_Marks_Resume.pdf'>
                        <Page height='600' pageNumber={this.state.pageNumber}/>
                    </Document> */}
                </div>
            </div>
        )
    }
}
