import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FiLinkedin} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nuj5kgp', 'template_l1pwhqj', form.current, '6KzEhb1sF2vjMOIaB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bikram.singh294@gmail.com</h5>
            <a href="mailto:bikram.singh294@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Bikramdeep Singh</h5>
            <a href="https://www.linkedin.com/in/bikram-singh294/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917009910092</h5>
            <a href="https://api.whatsapp.com/send?phone=+917009910092" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <GrInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>bikram.singh294</h5>
            <a href="https://www.instagram.com/bikram.singh294/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary' style={{"font-weight":"bold"}}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;