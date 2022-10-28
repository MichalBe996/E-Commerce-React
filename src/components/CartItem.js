import React from 'react'

const CartItem = (props) => {
  
  
  
  const [quant, setQuant] = React.useState(props.productQuantity)
  const [wholePrice, setWholePrice] = React.useState(quant * props.productPrice)
  
  
  return (
    
    
    <div className="cart--item--div">
        <img className="cart--image" src={props.productImg}></img>
        <div className="cart--info">
            <h3>{props.productName}</h3>
            <h3>{quant} x {props.productPrice}$  = {wholePrice}$ </h3>
            <div className="cart-buttons">
                <button className="increase--decrease" onClick={()=>{
                
                  setQuant((prevState)=>{
                    return prevState + 1
                  })
                  setWholePrice((prevState) => {
                    return prevState + props.productPrice;
                  })
                  props.setTotalPrice((prevState)=>{
                    return prevState + props.productPrice
                  })
                  

                }}>+</button>
                <button className="increase--decrease" onClick={()=>{
                setQuant(quant-1)
                setWholePrice((prevState)=>{
                  return prevState - props.productPrice;
                })
                props.setTotalPrice((prevState)=>{
                  return prevState - props.productPrice
                })

                }}>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem