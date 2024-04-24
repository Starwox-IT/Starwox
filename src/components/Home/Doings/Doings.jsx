import React from 'react'
import './Doings.css'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"


const Doings = (props) => {

  let see
  if (props.link1 === "link1"){
    see = (props.see)
  }

  let hashlink
  if (props.id === "Custom-solutions" || props.id === "strategy-planning" || props.id === "cyber-security"){
    hashlink = (props.hashlink)
  }

  return (
    <div className={`doings-main ${props.class}`}>
      <div className="doings">
        <div className="doings-wrapper home-doings">
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            {see && <p className="see-more"><Link to={`/${props.link}`}>{props.see}</Link></p>}
            {hashlink && <p className="see-more"><HashLink to={hashlink}>{props.see}</HashLink> </p>}
        </div> 
        
      </div>
      <img src={props.arrow} alt="" className='arrow'/>
    </div>
    
  )
}

export default Doings
