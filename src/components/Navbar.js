import React from 'react'
import { redirect } from 'react-router'
import {useNavigate} from "react-router-dom"

const Navbar = (props) => {
  let navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  }
  const navigateToCart = () => {
    navigate("/cart")
  }
  return (
    <nav className="navbar">
        <div className="logo--div">
            <img className="navbar--logo" src="/images/shopping-cart.png"></img>
            <h1 className="navbar--header">E-commerce React</h1>
        </div>
        <div className="navbar--buttons--div">
            <button className="navbar--button" onClick={navigateToMain}>Shop</button>
            <button className="navbar--button" onClick={navigateToCart}>Cart</button>

            <div className="cart--quant">
                <h3 className="items--quantity">{props.quantity}</h3>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar