import React from 'react'
import Data from '../../data.js'
import Cards from './Cards.js'
const carddata = Data.map(data => {
    return <Cards 
    key={data.id}
    {...data}
  
     />
   })


export default function Main() {
    
  return (
    <div className="section2">
      {carddata}
    </div>
  )


}


