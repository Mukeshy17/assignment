import React from 'react'
import "./Card.css"

function Card({image,title,cost,variable}) {
  return (
    <div className='card'>
        <img src={image} alt="Card Image" />
        <div className="text">
         <p>{title}</p>
        <h3>{cost}</h3>
        <p>{variable}</p>
        </div>
    </div>
  )
}

export default Card