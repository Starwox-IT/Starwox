import React from 'react'
import './Doings.css'
import { Link } from 'react-router-dom'


const Doings = (props) => {
  return (
    <div className="doings-main">
      <div className="doings">
        <div className="doings-wrapper home-doings">
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p className="see-more"><Link to={`/${props.link}`}>{props.see}</Link></p>
        </div>
        
      </div>
      <img src={props.arrow} alt="" className='arrow'/>
    </div>
    
  )
}

export default Doings
