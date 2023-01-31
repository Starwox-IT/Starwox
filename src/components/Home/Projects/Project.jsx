import React from 'react'
import './project.css'
import rightarrow from 'assets/right-arrow.png';
import project1 from 'assets/project1.png'
import project2 from 'assets/project2.png'
import project3 from 'assets/project3.png'


const Project = () => {
  return (
    <div className="home-project">
        <div className="home-project-wrapper">
            <div className="hero-bottom">
                <div className="hero-text">
                    <h1>Some Previous <span className="project-text">Projects</span></h1>
                    <p>Everyday we work hard to make the life and productivity of our clients better.</p>
                </div>

                <div className="portfolio-btn">
                    <p>see our portfolio</p>
                    <img src={rightarrow} alt="" />
                </div>
            </div>

            <div className="main-projects">
                <div className="main-project-wrapper">
                    <div className="project1">
                        <img src={project1} alt="" />
                        <div className="project1-text">
                            <p>Safebox Energy</p>
                            <p>Web development</p>
                        </div>
                    </div>

                    <div className="project1">
                        <img src={project2} alt="" />
                        <div className="project1-text">
                            <p>AFC</p>
                            <p>VPN setup</p>
                        </div>
                    </div>

                    <div className="project1">
                        <img src={project3} alt="" />
                        <div className="project1-text">
                            <p>ClikkiClikki</p>
                            <p>Data Analysis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Project
