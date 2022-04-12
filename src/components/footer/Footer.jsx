import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa';
import {MdOutlineEmail} from'react-icons/md';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Bikramdeep Singh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#profiles">My Profiles</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bikram-singh294/" target="_blank"><FaLinkedinIn/></a>
        <a href="https://www.facebook.com/bikramdeepsingh.kalra.1/" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/bikram.singh294/" target="_blank"><FiInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=+917009910092" target="_blank"><FaWhatsapp/></a>
        <a href="mailto:bikram.singh294@gmail.com" target="_blank"><MdOutlineEmail/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Biki Designs. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;