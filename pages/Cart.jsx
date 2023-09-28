import React from 'react'
import { useSelector } from "react-redux";
import { cartBackground } from '../assets';
import CartItem from '../components/CartItem';
const Cart = () => {
  const productData = useSelector((state) => state.counter.productData)
  return (
    <div>
      <img
      className="w-full h-60 object-cover" 
      src={cartBackground} 
      alt="cartBackground" />
    <div>
      <CartItem />
    </div>
    </div>
  )
}

export default Cart