import React from 'react'

export default function FavoriteCat({name,image,weight,life,holdCat,isHeld,description,intelligence,temperment,freindly,addToCard}) {
    return ( 
     <>
 <div className='main-container-about'>
      <img className='image-about' src={image} alt=''/>
      <h2 className='name-about'>{name}</h2>
      <p className='para-about'>Description : {description}</p>
      <p className='para-about'>Life : {life}</p>
      <p className='para-about'>Weight : {weight}</p>
      <p className='para-about'>Intelligence : {intelligence}</p>
      <p className='para-about'>Temperment :{temperment}</p>
      <p className='para-about'>Stranger_friendly : {freindly}</p>
     
      <button onClick={addToCard} className='btn-buy-about'>Add to my card</button>
      
    </div>
     </>
    )
}