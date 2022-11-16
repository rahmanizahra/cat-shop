import React from 'react';
import Cat from './Cat';


export default function Home({catData,holdCat,addToCard,search,isSearched,serachResault}) {



  return (
    <>
    <div className='introduction'>
     <h1 style={{marginBottom:"30px"}}>List of Cats</h1>
     <h2>Here you can find different breeds of cats and add your favorite ones in your card</h2>
    </div>
    <div className='grid-container'>
      {!isSearched?
      catData.map( cat => {
      return(
      <Cat
      key={cat.id}
      image={cat.image?cat.image.url:"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"}
       name={cat.name}
      life={cat.life_span}
      weight={cat.weight.metric}
      isHeld={cat.isHeld}
      holdCat={()=>holdCat(cat.id)} 
      addToCard={()=>addToCard(cat.id)}
      />
     )
    }
    ):
    serachResault.map(cat=>{
      return(
        <Cat
      key={cat.id}
      image={cat.image?cat.image.url:"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"}
       name={cat.name}
      life={cat.life_span}
      weight={cat.weight.metric}
      isHeld={cat.isHeld}
      holdCat={()=>holdCat(cat.id)} 
      addToCard={()=>addToCard(cat.id)}
        />
      )
    })
      }
     
    </div>
    
    </>
  )
}
