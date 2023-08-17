import React from 'react';
import '../../styles/Portfolio.css';
import Projects from './Projects';
import { Link } from 'react-router-dom';
function Portfolio() {
  return (
    <section className="portfolio">
      <div>
        <h1>SHIVAM SINGH</h1>
        <div className='img'><img src='../../images/MyProfile.png' alt="" /></div>
      </div>
      <div>
        <a href="./assets/<NAME>_Resume_2021.pdf" download><button id="resumeButton">Download Resume</button ></a>
      </div>
      <div className="card">
        <div className="card-info">
        <ul className="">
          <li className="project-item">
            <Link  to="/projects" className="projects-link">
            <h2>{Projects}View My Work</h2>
            </Link>
          </li>
      </ul>
        </div>
    </div>

    </section>
  );
}

export default Portfolio;


/* 
<li className="Skill-item">
            <Link to="/skills" className="Skills-link">
              Portfolio
            </Link>
          </li>
          <li className="Resume-item">
            <Link to="/resume" className="nav-link">
              About
            </Link>
          </li>


          <div>
      <ul className="">
          <li className="project-item">
            <Link  to="/projects" className="projects-link">
              <Projects />
            </Link>
          </li>
      </ul>
      </div>


      <h2>{Projects}Projects</h2>
*/
