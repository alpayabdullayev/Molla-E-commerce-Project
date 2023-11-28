import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const Card = ({
  image,
  category,
  description,
  price,
  brand,
  color,
  size,
  rating,
  item,
}) => {
  const { handleBasket } = useContext(BasketContext);
  const {toggleHeart,heart} = useContext(WishlistContext)

  return (
    <>
      <div className="col-12 col-xs-6 col-md-4 col-lg-3">
        <div className="cardDF">
          <div className="cardProductt">
            <div className="cardContent">
              <div className="cardImg">
                <Link to={`/product/${item.id}`}><img src={image} alt="" /></Link>
                <div className="addTocart">
                  <button onClick={() => handleBasket(item)}>AddToCart</button>
                  <div>
                    {/* {
                        console.log(item)
                    } */}
                  </div>
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
                <p>${price}.00</p>

                <h4>Brand:{brand} </h4>
                <h5>
                  Color:{color} Size:{size}
                </h5>
                <h6>rating: {rating}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
