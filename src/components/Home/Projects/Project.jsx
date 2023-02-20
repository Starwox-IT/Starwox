import React, { useEffect } from "react";
import {gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './project.css'
import rightarrow from 'assets/right-arrow.png';
import project1 from 'assets/project1.png'
import project2 from 'assets/project2.png'
import project3 from 'assets/project3.png'

gsap.registerPlugin(ScrollTrigger);


const Project = () => {
    useEffect(()=> {
        // This is the animation for what we do section
        let tltwo = gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-hero-text',
            }
        });
   
        tltwo.to('.projects-hero-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',opacity: 1,y: '0',})
            .to('.projects-hero-btn', {opacity: 1, y: 0})

        

        //This is so awesome, it means you can change classNames to an array and loop through then
        const projectNames = gsap.utils.toArray(".project1-text");
        projectNames.forEach(projectName => {
            gsap.to(projectName, {
                ease: Power4.easeInOut,
                y:0,
                'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',
                duration: 1,
                
                scrollTrigger:{
                    trigger:projectName,
                    start: "top 100%",
                    
                }
            })
        })
        
        let mm = gsap.matchMedia();

        mm.add("(min-width: 640px)", () => {
            //This is the animation for main project section
            gsap.to('.project1', {y:0, stagger:.2, opacity: 1,
                scrollTrigger:{
                    trigger:".project1",
                    start: "top 90%",
                    
                }
            })
        })

        mm.add("(max-width: 639px)", () => {
            const project1 = gsap.utils.toArray(".project1");
            project1.forEach(project => {
                gsap.to(project, {
                    y:0,
                    opacity: 1,
                    scrollTrigger:{
                        trigger:project,
                        start:"top 70%",
                    }
                })
            })
        })
            
    }, [])

    



  return (
    <div className="home-project">
        <div className="home-project-wrapper">
            <div className="hero-bottom">
                <div className="hero-text projects-hero-text">
                    <h1>Some Previous <span className="project-text">Projects</span></h1>
                    <p>Everyday we work hard to make the life and productivity of our clients better.</p>
                </div>

                <div className=" projects-hero-btn portfolio-btn">
                    <p>see our portfolio</p>
                    <img src={rightarrow} alt="" />
                </div>
            </div>

            <div className="main-projects">
                <div className="main-project-wrapper" id="yyy">
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
