import React, { useContext } from "react";
import "./index.scss"
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const BasketCard = ({image,category,price,brand,count,item}) => {
    const {handleRemove,handleCountVal} = useContext(BasketContext)
    const {toggleHeart,heart} = useContext(WishlistContext)

  return (
    <>
      <div className="cardProductt">
        <div className="cardContent">
          <div className="cardImg">
            <img src={image} alt="" />

            <div className="addToWishlist">
            <button  onClick={() => toggleHeart(item)}>
                      {heart.includes(item.id) ? <IoIosHeart /> : <FaRegHeart />}     
                      </button>
            </div>
          </div>
          <div className="cardBody">
            <p>{category}</p>
            <p>{price}$</p>
            <h4>brand {brand}</h4>
            <h4>sayi:{count}</h4>
            <button onClick={()=>handleRemove(item.id)}>remove</button>
            <button onClick={()=>handleCountVal(true,item)}>+</button>
            <button onClick={()=>handleCountVal(false,item)}>-</button>
            <p>
                total: {item.count*item.price} 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketCard;
