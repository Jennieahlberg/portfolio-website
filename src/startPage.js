import './startPage.css';
import '../assets/logos/angular.svg'

import React, { Component } from 'react'

class Startpage extends Component {

  handleNavBarStyling = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
  
      if(window.pageYOffset > window.innerHeight) {
        document.getElementById("nav-bar-about-me").style.color = "black";
        document.getElementById("nav-bar-skills").style.color = "black";
        document.getElementById("nav-bar-projects").style.color = "black";
        document.getElementById("nav-bar-check-me-out").style.color = "black";
        document.getElementById("navbar").style.background = "rgba(225, 225, 225, 0.8)";
      } else {
        document.getElementById("nav-bar-about-me").style.color = "white";
        document.getElementById("nav-bar-skills").style.color = "white";
        document.getElementById("nav-bar-projects").style.color = "white";
        document.getElementById("nav-bar-check-me-out").style.color = "white";
        document.getElementById("navbar").style.background = "transparent";
      }
      
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  render() {
    this.handleNavBarStyling();

    return (
      <div className="startpage-wrapper">
      <div className="header">
        <nav className="top-nav" id="navbar">
          <a className="nav-bar-item" id="nav-bar-about-me" href="#about-me">About me</a>
          <a className="nav-bar-item" id="nav-bar-skills" href="#skills">Skills</a>
          <a className="nav-bar-item" id="nav-bar-projects" href="#projects">Projects</a>
          <a className="nav-bar-item" id="nav-bar-check-me-out" href="#check-me-out">Check me out</a>
        </nav>
        <div className="wrapper">
          <div className="profile-name">
            <h3>Jennie A.</h3>
            <h3>Frontend developer</h3>
          </div>
        </div>
      </div>

      <div className="content">

        <div className="about-me" id="about-me">
          <h1>About me</h1>
          <div className="profile">
            <p>
            Developer specializing in frontend development with a passion for lovely design and team work.
            In 2018 I decided to try something new, and I plunged head first into the world of tech. 
            As a former expansion manager at a retail company I was able to use my old experiences 
            
            Frontend (Javascript, HTML, CSS, SASS), Scrum, DevOps
            </p>
          </div>
          <div className="personality-icons-wrapper">
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569867687/personality_icons/leaf_jsv9p8.svg" alt="growing mindset"/>
              <p>Growing mindset and always hungry for more knowledge, believes in lifelong learning.</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569867687/personality_icons/picture_wdcwek.svg" alt="seeing the whole"/>
              <p>Seeing the whole picture in a company, not only the technology.</p>
            </span>
            <span>
              <img className="profile-img" src="https://res.cloudinary.com/di9zepf6f/image/upload/v1564937127/undefined_stxsd5.jpg" alt="Jennie Ahlberg profile"/>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569867687/personality_icons/team_epdyqs.svg" alt="team player"/>
              <p>Doer and self starter who works well under pressure in both teams and on my own.</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569867687/personality_icons/forward_rqsd9b.svg" alt="leader"/>
              <p>Natural born leader with great communication skills and a humble approach.</p>
            </span>
          </div>
         </div>

        <div className="skills-wrapper" id="skills">
          <h1>Skills</h1>
          <section className="skills">
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424254/logos/angular_kili3i.svg" alt="AngularJS logo"/>
              <p>Angularjs</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424255/logos/react_qwr7hc.svg" alt="React logo"/>
              <p>React</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424254/logos/HTML5_nrvkij.png" alt="HTML5 logo"/>
              <p>HTML5</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424254/logos/css3_q1zfsa.svg" alt="CSS3 logo"/>
              <p>CSS3</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424255/logos/react_qwr7hc.svg" alt="ReactNative logo"/>
              <p>React Native</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569427430/logos/firebase_o7ixmt.svg" alt="Firebase logo"/>
              <p>Firebase</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424255/logos/sass_x4cvn4.svg" alt="SASS logo"/>
              <p>SASS</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424255/logos/Gulp_jys3pq.png" alt="Gulp logo"/>
              <p>Gulp</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424254/logos/Git_nwlzfs.png" alt="Git logo"/>
              <p>Git</p>
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569424254/logos/badge-psmi_y7mdcd.svg" alt="Git logo"/>
              <p>Scrum Master</p>
            </span>
          </section>
        </div>

        <div className="project-list" id="projects">
          <h1>Projects</h1>
          <section>
            <a className="project-list-item" href="https://www.willys.se" target="_blank" rel="noopener noreferrer">E-commerce Willys.se</a>
            <p>Angularjs, SASS, Javascript, Gulp, Git, Jira, Scrum</p>
            <a className="project-list-item" href="https://www.hemkop.se" target="_blank" rel="noopener noreferrer">E-commerce Hemköp.se</a>
            <p>Angularjs, SASS, Javascript, Gulp, Git, Jira, Scrum</p>
            <a className="project-list-item" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Quizit</a>
            <p>React Native, CSS, Firebase, NodeJS, Socket.io</p>
            <a className="project-list-item" href="https://www.jennieahlberg.com" target="_blank" rel="noopener noreferrer">This site, www.jennieahlberg.com</a>
            <p>React.js, CSS, Cloudinary, Firebase</p>
          </section>
        </div>

        <div className="check-me-out-wrapper" id="check-me-out">
          <h1>Check me out</h1>
          <section className="check-me-out-list">
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569432916/logos/linkedin_pljtxp.png" alt="Linkedin logo"/>
              <a className="check-me-out-list-item" href="https://www.linkedin.com/in/jennieahlberg/" target="_blank" rel="noopener noreferrer">Linkedin</a> 
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569431559/logos/github_egxvkq.svg" alt="GitHub logo"/>
              <a className="check-me-out-list-item" href="https://github.com/Jennieahlberg" target="_blank" rel="noopener noreferrer">GitHub</a> 
            </span>
            <span>
              <img src="https://res.cloudinary.com/di9zepf6f/image/upload/v1569431560/logos/instagram_ihe1xz.png" alt="Instagram logo"/>
              <a className="check-me-out-list-item" href="https://www.instagram.com/egonthebeagle/" target="_blank" rel="noopener noreferrer">Instagram</a> 
            </span>
          </section>
        </div>

        <footer>
          <p className="name">Jennie Ahlberg</p>
          <p className="email">jennieahlberg@gmail.com</p>
        </footer>

      </div>
     
    </div>
    );
  }
}
 
export default Startpage;