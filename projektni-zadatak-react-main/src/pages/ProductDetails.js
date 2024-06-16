import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useContext(ProductContext);
  const product = state.items.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-container">
      <div className="product">
        <h1 className="title-product">{product.title}</h1>
        <p className="des-product">{product.description}</p>
        <p className="price-product">{product.price} $</p>
        <img src={product.thumbnail} alt={product.title} />
        <Link to="/" id="backlink" className="back-product">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
