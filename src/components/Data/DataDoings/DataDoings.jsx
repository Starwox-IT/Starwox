import React from 'react'
import './DataDoings.css'

const DataDoings = (props) => {
  return (
    <div className="data-doings">
        <div className="data-doings-wrapper">
            <div className="data-doings-item">
              <img src={props.image} alt="" />
              <div className="data-doings-text">
                  <h3>{props.title}</h3>
                  <p>{props.text}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DataDoings
