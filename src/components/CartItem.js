import React from 'react'

const cartItem = (props) => {
  return (
    <div className="cart--item--div">
        <img className="cart--image" src={props.productImg}></img>
        <div className="cart--info">
            <h3>{props.productName}</h3>
            <h3>{props.productQuantity} x {props.productPrice}$  = {props.finalProductPrice}$ </h3>
            <div className="cart-buttons">
                <button>ADD</button>
                <button>REMOVE</button>
            </div>
        </div>
    </div>
  )
}

export default cartItem