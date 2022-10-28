import React from 'react'
import Navbar from './Navbar'
import CartItem from './CartItem'
import Total from './Total'

const Cart = (props) => {
  
  
  console.log(props.cart)
  let productsList = props.cart;
  const arrUniq = [...new Map(productsList.map(v => [v.productId, v])).values()]  
  console.log(arrUniq)
  let sumOfPrices = 0;
  arrUniq.map(element=>{
    sumOfPrices  += element.price * props.cart.filter(obj => obj.productId===element.productId).length
  })
  const [totalPrice, setTotalPrice] = React.useState(sumOfPrices)

  const cartItems = arrUniq.map(element=>{
    //finalPrice += element.price * props.cart.filter(obj => obj.productId===element.productId).length;

    return <CartItem 
    productImg={element.productImg}
    productName={element.productName}
    productPrice={element.price}
    productQuantity={props.cart.filter(obj => obj.productId===element.productId).length}
    finalProductPrice={element.price * props.cart.filter(obj => obj.productId===element.productId).length}
    setTotalPrice={setTotalPrice}
    />
  })
    
    
    
  



  return (
    <div className="cart--body">
        <Navbar quantity={props.cart.length}/>
        <div className="cart--items--total">
            <div className="cart--items">
              {cartItems}
            </div>
            

            <Total
            totalPrice={totalPrice}/>
        </div>
    </div>
  )
}

export default Cart