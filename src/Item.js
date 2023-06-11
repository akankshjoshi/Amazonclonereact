import React from 'react';
import "./Item.css";
import { useStateValue } from "./StateProvider";
function Item({ id, title, image, price, rating}) {
    const [{ basket}, dispatch] = useStateValue();
    console.log("this is the basket >>>", basket);
    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            Item: {
                id: id,
                title: title,
                image: image,
                price: price, 
                rating: rating,
            },
        });
    };
  return (
    <div className='item'>
        <div className='item__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>✡</p>
                ))}
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket}> Add to Basket</button>      
    </div>
  )
}

export default Item;
