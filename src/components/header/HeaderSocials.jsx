import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bikram-singh294/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/bikram294" target="_blank"><FaGithub/></a>
        <a href="mailto:bikram.singh294@gmail.com" target="_blank"><HiOutlineMail/></a>
    </div>
  )
}

export default HeaderSocials