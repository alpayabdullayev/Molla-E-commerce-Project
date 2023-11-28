import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BasketContext } from "../../context/BasketContext";

const WishlistCard = ({image,category,description,price,rating,brand,item}) => {
    const {handleBasket} = useContext(BasketContext)
    const {toggleHeart,heart} = useContext(WishlistContext)
  return (
    <>
      <div className="cardProductt">
        <div className="cardContent">
          <div className="cardImg">
            <img src={image} alt="" />
            <div className="addTocart">
              <button onClick={() => handleBasket(item)}>AddToCart</button>
            </div>
            <div className="addToWishlist">
              <button onClick={() => toggleHeart(item)}>
                {heart.includes(item.id) ? (
                  <IoIosHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
          <div className="cardBody">
            <p>{category}</p>
            <p>{description}</p>
            <p>{price}</p>
            <h4>rating: {rating}</h4>
            <h4>brand {brand}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
