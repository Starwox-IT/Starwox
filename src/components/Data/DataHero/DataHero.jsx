import React from 'react'
import './DataHero.css'
import data_illu from 'assets/data-illustration.png'
import rightarrow from 'assets/right-arrow.png';
import { dataDoingsData } from 'Data/DataDoings';
import DataDoings from '../DataDoings/DataDoings';

const DataHero = () => {
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
                <div className="hero-text">
                    <h1><span className="main-red">Data</span> Analysis</h1>
                    <p className='web-p-bold'>Knowledge is power! Transform Big Data Useful Insights</p>
                    <p>You need to make the right decisions to constantly grow your business. It is important that your data is well-interpreted for understood for you to do that</p>
                </div>

                <img src={data_illu} alt="" />
            </div>

            <div className="hero-bottom" id='services'>
                <div className="hero-text">
                    <h1><span className="main-red">Analysis </span> service include:</h1>
                    <p>Our technical solutions include but all limited to social networks, e-commerce e-learning platforms, ecommerce projects, and much more- we are eager to tackle tech’s most bold innovative ideas. </p>
                </div>

                <div className="portfolio-btn">
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
