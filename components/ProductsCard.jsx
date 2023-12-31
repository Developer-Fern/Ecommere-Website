import React from 'react'
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/counterSlice";

const ProductsCard = ({product}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group">
      <div
      onClick= {handleDetails}
      className="w-full h-95 cursor-pointer overflow-hidden"
      >
        <img
        className="w-full h-full object-cover group-hover:scale-110 duration-500"
        src={product.image} 
        alt="productImg">
        </img>
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="font-semibold">${product.price}</p>
              <p className="font-semibold">({product.rating.count})</p>
            </div>
            <p onClick={()=>dispatch(
              addToCart({
                id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description
            }))} className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart {" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard