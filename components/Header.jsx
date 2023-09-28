import React from 'react'
import { Link } from "react-router-dom";
import { cartImg, eCommerce, checkoutImg } from '../assets/index'
import { useSelector } from "react-redux";
const Header = () => {
  const productData = useSelector((state) => state.counter.productData)
  console.log(productData)
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
              <Link to="/">
                <div>
                  <img className="w-18" src={eCommerce}></img>  
                </div>
              </Link>
              <div className="flex item-center gap-8">
              <ul className="flex item-center gap-8">
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Home
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Pages
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Shop
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Specials
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Newsletter
                  </li>
                  </ul>
                  <Link to="/cart">
                  <div className='relative'>
                      <img className='w-6' src ={cartImg} alt="cartImage"></img>
                      <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                      {productData.length}   
                      </span>    
                  </div>
                  </Link>
                  <img className='w-8 h-8 rounded-full' src={checkoutImg}></img>
          </div>
        </div>
    </div>
  )
}

export default Header