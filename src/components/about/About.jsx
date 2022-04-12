import React from 'react'
import './About.css';
import ME from '../../assets/me7.jpg';
import {SiCodechef} from 'react-icons/si';
import {SiReact} from 'react-icons/si';
import {FaLaptopCode} from 'react-icons/fa';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className='about__icon'/>
              <h5>B.Tech - CSE</h5>
              <small>3rd year undergraduate student</small>
            </article>
            <article className="about__card">
              <SiCodechef className='about__icon'/>
              <h5>CP Executive at Codechef CGC Chapter</h5>
              <small>Sep 2021 - present</small>
            </article>
            <article className="about__card">
              <SiReact className='about__icon'/>
              <h5>Web Developer at ACM CEC</h5>
              <small>Oct 2021 - present</small>
            </article>
          </div>

          <p>
          B. Tech (Computer Science Engineering) undergraduate, currently in 3rd year with a keen interest in Web development, Software Engineering and Problem Solving. Adaptive and self-motivated, I enjoy taking on new challenges and using my knowledge, skills, and great attention to detail to ensure that work is completed on time and with great quality. Solved 250+ questions on LeetCode and currently a 5 star coder on Hackerrank in Problem Solving. Expected to graduate in July 2023.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <a href="https://leetcode.com/bikramdeep/" className='btn btn-primary' target="_blank">LeetCode</a>
          <a href="https://www.hackerrank.com/bikram_singh294" className='btn btn-primary' target="_blank">Hackerrank</a>
          <a href="https://github.com/bikram294" className='btn btn-primary' target="_blank">Github </a>
        </div>
      </div>
    </section>
  )
}

export default About;