import React from 'react'


const Product = (props) => {
    const handleClick = () => {
        const newList = props.cart.concat(props);
        props.setCart(newList);
        console.log(newList)
    }
  return (
    <div className="product--card">
        <img className="product--image" src={props.productImg}></img>
        <div className="product--data">
            <h3 className="product--name">{props.productName}</h3>

            <p className="product--price">${props.price}</p>
            <p className="product--rating">{props.rating}/5</p>
        </div>
        <button className="add--button" onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default Product