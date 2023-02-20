import React from 'react'
import './ITDoings.css'

const ITDoings = (props) => {
  return (
    <div className="it-doings">
        <div className="it-doings-wrapper">
            <div className="it-doings-item">
                <img src={props.image} alt="" className='it-doings-img'/>
                <div className="it-doings-text">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ITDoings
