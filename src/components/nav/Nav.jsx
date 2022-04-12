import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import {BiBook} from 'react-icons/bi';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active' : ''}><SiAboutdotme/></a>
      <a href="#Skills" onClick={()=>setActiveNav('#Skills')} className={activeNav==='#Skills'?'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'active' : ''}><AiOutlineFolderOpen/></a>
      <a href="#profiles" onClick={()=>setActiveNav('#profiles')} className={activeNav==='#profiles'?'active' : ''}><CgProfile/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav