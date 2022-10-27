import React from 'react'

const Total = (props) => {
  
  return (
    <div className="total--div">
        <h1>Total price: {props.totalPrice}$ </h1>
    </div>
  )
}

export default Total