import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import "./index.scss"
import { WishlistContext } from "../../context/WishlistContext";
import WishlistCard from "../WishlistCard";

const WishlistSideBar = () => {
  const {activeWishlist} = useContext(MainContext);
  const { wishlist, setWishlist,heart,setHeart,toggleHeart} = useContext(WishlistContext)
  return (
    <>
      <div className={`wishlist ${activeWishlist ? "active" : ""}`}>
        <div className="wishlist-container">
          <div className="wishlist-title">
            <h1>wishlist</h1>
          </div>
          <div>
            {
                wishlist.map((item)=>(
                    <WishlistCard key={item.id} {...item} item={item}/>
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistSideBar;
