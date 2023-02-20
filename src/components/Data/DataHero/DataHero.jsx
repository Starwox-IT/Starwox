import React, { useEffect } from "react";
import {gsap, Power4 } from 'gsap';
import './DataHero.css'
import data_illu from 'assets/data-illustration.png'
import rightarrow from 'assets/right-arrow.png';
import { dataDoingsData } from 'Data/DataDoings';
import DataDoings from '../DataDoings/DataDoings';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DataHero = () => {
    useEffect(() => {
        let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})

        tl.to('.data-hero-img', {opacity:1, 'transform': 'scale(1)'})
            .to('.data-hero-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)', opacity:1, y:0,  duration:2.2}, '-=2')

        let tltwo = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-bottom-text',
            }
        });

        tltwo.to('.data-service-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',opacity: 1,y: '0', delay: .5})
            .to('.data-service-portfolio', {opacity: 1, y: 0})

        
        const dataDoingsImgs = gsap.utils.toArray(".data-doings-img");
        dataDoingsImgs.forEach(dataDoingImg => {
            gsap.to(dataDoingImg,{
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: dataDoingImg,
                start: "top 90%"
            }
            });
        })

        const dataDoingsTxts = gsap.utils.toArray(".data-doings-text");
        dataDoingsTxts.forEach(dataDoingTxt => {
            gsap.to(dataDoingTxt,{
            y: 0,
            opacity:1,
            delay: .3,
            'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',
            scrollTrigger: {
                trigger: dataDoingTxt,
                start: "top 90%"
            }
            });
        })
    })



    const dataDoings = dataDoingsData.map(dataDoing => {
        return(
           <DataDoings
            image = {dataDoing.image}
            title={dataDoing.title}
            text={dataDoing.text}
           /> 
        )
    })
  return (
    <div className="data-hero">
        <div className="data-hero-wrapper">
            <div className="hero-top">
                <div className="hero-text data-hero-text">
                    <h1><span className="main-red">Data</span> Analysis</h1>
                    <p className='web-p-bold'>Knowledge is power! Transform Big Data Useful Insights</p>
                    <p>You need to make the right decisions to constantly grow your business. It is important that your data is well-interpreted for understood for you to do that</p>
                </div>

                <img src={data_illu} alt="" className='data-hero-img'/>
            </div>

            <div className="hero-bottom">
                <div className="data-service-text hero-text">
                    <h1><span className="main-red">Analysis </span> service include:</h1>
                    <p>Our technical solutions include but all limited to social networks, e-commerce e-learning platforms, ecommerce projects, and much more- we are eager to tackle tech’s most bold innovative ideas. </p>
                </div>

                <div className="portfolio-btn data-service-portfolio">
                    <p>see our portfolio</p>
                    <img src={rightarrow} alt="" />
                </div>
            </div>

            <div className="data-doing-display">
                {dataDoings}
            </div>
        </div>
    </div>
  )
}

export default DataHero
