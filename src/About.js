import React from 'react';

import FavoriteCat from './FavoriteCat';

export default function About({catData,holdCat,addToCard}) {
  // const[hasFavorite,setHasFavorite] =React.useState()
  console.log(catData)
  let favoriteCats = catData.filter(cat => { return(
         cat.isHeld?cat:""
       )})
  //  if (favoriteCats.length>0) {
  // setHasFavorite(true)
  //  } 
       
  return (
    <>
    <div className='about-container'>
       <h2 className='title-about'>Your favorite items:</h2>
       { favoriteCats.map(cat => {return(
         <FavoriteCat
      key={cat.id}
      image={cat.image?cat.image.url:"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"}
      description={cat.description}
      name={cat.name}
      life={cat.life_span}
      weight={cat.weight.metric}
      isHeld={cat.isHeld}
      holdCat={()=>holdCat(cat.id)} 
      intelligence={cat.intelligence}
      temperment={cat.temperament}
      freindly={cat.stranger_friendly}
      addToCard={()=>addToCard(cat.id)}
         />
       )})
       }
      
    </div>
    </>
  )
}
