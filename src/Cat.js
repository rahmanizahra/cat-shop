import React from 'react'

export default function Cat({name,image,weight,life,holdCat,isHeld,addToCard}) {
  
  return (
    <div className='main-container'>
      <img className='image' src={image} alt=''/>
      <h2 className='name'>{name}</h2>
   
      <p className='para'>Life : {life}</p>
      <p className='para'>Weight : {weight}</p>
      <img onClick={holdCat} className='heart-img' src={isHeld?"./red-haert.jpeg":"./heart-empty1.webp"} alt=''/>
      <button onClick={addToCard} className='btn-buy'>Add to my card</button>
      
    </div>
  )
}
