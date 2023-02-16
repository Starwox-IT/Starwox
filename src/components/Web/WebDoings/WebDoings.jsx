import React from 'react'
import './WebDoings.css'

const WebDoings = (props) => {
  return (
    <div className="web-doings">
        <div className="web-doings-wrapper">
            <div className="web-doings-item">
              <img src={props.image} alt="" className='web-doings-img'/>
              <div className="web-doings-text">
                  <h3>{props.title}</h3>
                  <p>{props.text}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WebDoings
