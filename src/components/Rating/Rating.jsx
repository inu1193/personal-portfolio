import React, { useState } from 'react'
import './Rating.css'

const Rating = () => {
  const [starCount, setStarCount] = useState(0);
  const [starHoverCount, setStarHoverCount] = useState(0);
  return (
    <div>
      <p className='ratePara'>How would you rate your experience throughout the journey?</p>
      <div className="star">
        {[...Array(5)].map((_,index)=>{
          return <span key={index} className={`${index+1<=starCount?'selected':''}`}
           onClick={()=>{
            setStarCount(index+1)
           }}
           onMouseOver={()=>{
            setStarHoverCount(index+1)
           }}
           onMouseLeave={()=>{
            setStarHoverCount(0)
           }}
           >
            &#9733;
          </span>
        })}
      </div>
      <p>(Rated <span>{starCount}
        </span> out of 5)</p>
    </div>
  )
}

export default Rating
