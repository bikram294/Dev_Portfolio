import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="Skills">
      <h5>What Skills I Have?</h5>
      <h2>My Skills</h2>

      <div className="container Skills__container">
        <div className="Skills__frontend">
          <h3>Web Development</h3>
          <div className="Skills__content">
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Baisc</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>Adobe Photoshop</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* ====== END OF FRONTEND ====== */}

        <div className="Skills__backend">
          <h3>Other Skills</h3>
          <div className="Skills__content">
           <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>Data Structures</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="Skills__details">
              <BsPatchCheckFill className="Skills__details-icon"/>
              <div>
                <h4>FireBase</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
