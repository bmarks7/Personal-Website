import React, { Component } from 'react'
import '../Styles/Contact.scss'
import Header from '../Components/Header'
import emailjs from 'emailjs-com'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_zqbbi62', e.target, 'user_gG8TRmKPQYTeIMpwCCK63')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    render() {
        return (
            <div className='Contact'>
                <Header text='If you would like to connect with me, you can fill out the form below'/>
                <form className="Contact__form" onSubmit={this.sendEmail}>
                    <label className='Contact__form__nameLabel'>Name:</label>
                    <input className='Contact__form__nameInput' type="text" name='sender_name'/>

                    <label className='Contact__form__subjectLabel'>Subject:</label>
                    <input className='Contact__form__subjectInput' type="text" name='subject'/>

                    <label className='Contact__form__messageLabel'>Message:</label>
                    <textarea className='Contact__form__messageInput' id="" cols="30" rows="10" name='message'></textarea>
                    
                    <label className='Contact__form__emailLabel'>Your Email Address:</label>
                    <input className='Contact__form__emailInput' type="text" placeholder="e.g. brandonmarks@gmail.com" name='sender_email'/>
                    
                    <div className="Contact__form__btnContainer">
                        <input className='Contact__form__btnContainer__sendBtn' type="submit" value='Send'/>
                    </div>
                </form>
                
            </div>
        )
    }
}
