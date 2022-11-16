import React from 'react'
import EveryCard from './EveryCard'

export default function CARD({catData,holdCat,addToCard}) {

  let addToBuy = catData.filter(cat =>{
         return(
           cat.addToCard?cat:""
         )
       })
       function getSum(total,cat){
         return total+cat.price
       }
  let totalprice = addToBuy.reduce(getSum,0)
  return (
    <>
    <div className='card-container'>
      <h3 className='title-about'>Your items to buy:</h3>
      {addToBuy.map(cat =>{
        return(
          <EveryCard
          key={cat.id}
          image={cat.image?cat.image.url:"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"}
          name={cat.name}
          price={cat.price}
          />
        )
      })}
     <h3 className='total-price'>Total price: $ {totalprice}</h3>
     <button className='btn-buy-checkout'>Checkout</button>      

    </div>
    </>
  )
}
