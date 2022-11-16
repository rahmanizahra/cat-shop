import React from 'react'

export default function EveryCard({name,image,price}) {
  return (
   <>
   <div className='everycard-container'>
      <img className='image-card' src={image} alt=''/>
      <h2 className='name-card'>{name}</h2>
      <h3 className='name-card'>Price: $ {price} </h3>

   </div>
   </>
  )
}
