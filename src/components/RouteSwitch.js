import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import Cart from "./Cart";



import React from 'react'

const RouteSwitch = () => {
    const [cart, setCart] = React.useState([])
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App cart={cart} setCart={setCart} />}/>
            <Route path="/cart" element={<Cart cart={cart}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;