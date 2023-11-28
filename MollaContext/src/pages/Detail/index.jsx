import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  const { handleBasket } = useContext(BasketContext);
  const {toggleHeart,heart} = useContext(WishlistContext)

  async function getProductDetails() {
    const data = await fetch(`http://localhost:3000/products/${productId}`);
    const res = await data.json();
    setProduct(res);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="detailCard">
      <div className="container">
        <h1>Detail page</h1>
        <div className="detail-content">
          <div className="product-img">
            <img src={product.image} alt="" />
          </div>
          <div className="product-info">
            <h3> Poduct Category:{product.category}</h3>
            <h2>{product.description}</h2>
            <h1>$ {product.price}.00</h1>
            <p> Color : {product.color}</p>
            <p> size :{product.size}</p>
            <button onClick={() => handleBasket(product)}>AddToBasket</button>
            <button onClick={() => toggleHeart(product)}>
              {heart.includes(product.id) ? <IoIosHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
