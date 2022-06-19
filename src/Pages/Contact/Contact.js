import React, { Component } from 'react'
import './Contact.scss'
import Header from '../../Components/Header/Header'
import emailjs from 'emailjs-com'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import validator from 'validator'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            emailError: '',
            emailValid: false,
        }
        this.handleClose = this.handleClose.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleClose(event, reason) {
        if(reason === 'clickaway'){
            return 
        }
        this.setState({
            open: false,
        })
    }

    validateEmail(e) {
        var email = e.target.value
  
        if (validator.isEmail(email)) {
            this.setState({
                emailError: 'Valid Email',
                emailValid: true,
            })
        } else {
            this.setState({
                emailError: 'Please enter a valid Email',
                emailValid: false,
            })
        }
    }

    sendEmail(e) {
        e.preventDefault();

        if(this.state.emailValid === true) {
    
            emailjs.sendForm('gmail', 'template_zqbbi62', e.target, 'user_gG8TRmKPQYTeIMpwCCK63')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();

            this.setState({
                open: true,
            })
        }
      };

    render() {
        return (
            <div className='Contact'>
                <Header text='If you would like to connect with me, you can fill out the form below and I&apos;ll get back to you by email'/>
                <form className="Contact__form" onSubmit={this.sendEmail} data-aos='fade-right'>
                    <label className='Contact__form__nameLabel'>Name:</label>
                    <input required className='Contact__form__nameInput' type="text" name='sender_name'/>

                    <label className='Contact__form__subjectLabel'>Subject:</label>
                    <input required className='Contact__form__subjectInput' type="text" name='subject'/>

                    <label className='Contact__form__messageLabel'>Message:</label>
                    <textarea required className='Contact__form__messageInput' id="" cols="30" rows="10" name='message'></textarea>
                    
                    <label className='Contact__form__emailLabel'>Your Email Address:</label>
                    <input onChange={this.validateEmail} required className='Contact__form__emailInput' type="text" placeholder="e.g. brandonmarks@gmail.com" name='sender_email'/>
                    <p className="Contact__form__emailError">{this.state.emailError}</p>

                    <div className="Contact__form__btnContainer">
                        <input className='Contact__form__btnContainer__sendBtn' type="submit" value='Send'/>
                    </div>
                </form>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message='Message Sent'
                    action={
                        <React.Fragment>
                            <IconButton onClick = {this.handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </React.Fragment>
                    }
                />
                
            </div>
        )
    }
}
