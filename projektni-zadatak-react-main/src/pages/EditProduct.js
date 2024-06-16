import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";

import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  const product = state.items.find((item) => item.id === parseInt(id));

  const [title, setTitle] = useState(product?.title || "");
  const [price, setPrice] = useState(product?.price || "");
  const [description, setDescription] = useState(product?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "UPDATE_PRODUCT", payload: data });
        navigate("/");
      });
  };

  return (
    <div className="product-container">
      <div className="product">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="edit-input"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="edit-input"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="edit-textarea"
          />
          <button type="submit" className="edit-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
