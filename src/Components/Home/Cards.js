import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Cards(props) {
let badgeText 
  if(props.openSpots === 0){
    badgeText = 'Sold Out'
  } else if(props.location === 'Online'){
    badgeText = "Online"
  }


  return (
    <>
      <div className='card1'>
{    badgeText &&  <span className='tag'>{badgeText}</span>
}        <img src={`${process.env.PUBLIC_URL}${props.img}`}alt={props.title}/>
        <div className='icon-list'>
        <FontAwesomeIcon icon={faStar} color='red'/>
        <p>{props.stats.rating}</p><span>({props.stats.reviewCount}).{props.location}</span>

        </div>    
        <div className='card-content'>
            <h4>{props.title}</h4>
            <p>From <b>${props.price}</b>/ person</p>
          </div>
          </div>
          
    </>
  )
}
