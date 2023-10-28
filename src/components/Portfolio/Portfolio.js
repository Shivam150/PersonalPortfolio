import React from 'react';
import '../../styles/Portfolio.css';
import Projects from './Projects';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';
import Resume from '../Resume/Resume';

// import { Link } from 'react-router-dom';
function Portfolio() {

  let history = useNavigate();
  return (
    <section className="portfolio">
      <div>
        <h1>SHIVAM SINGH</h1>
        <div className='img'><img src='../../images/MyProfile.png' alt="" /></div>
      </div>
      <div className="card">
        <div className="card-info">
        <ul className="">
          <li className="project-item">
             
            <h2 onClick={() => history('/projects')}>{Projects}View My Work</h2>
             
          </li>
      </ul>
        </div>
    </div>

    <div className="card">
        <div className="card-info">
        <ul className="">
          <li className="skills-item">
             
            <h2 onClick={() => history('/skills')}>{Skills}View My Skills</h2>
            
          </li>
      </ul>
        </div>
    </div>

    
    <div className="resume" >
      <a href="/Docs/Shivam_Singh_Resume1.0.pdf" target="_blank">
        <button className='pdf'>{Resume}Resume</button>
      </a>
    </div>

    <div>

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
