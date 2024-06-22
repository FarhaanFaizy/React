import React, { useRef } from 'react';
import "../styles/contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again later.");
        });
    };
  
    return (
      <section id="contact">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;