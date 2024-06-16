import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";

import "./AddProduct.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_PRODUCT", payload: data });
        navigate("/");
      });
  };

  return (
    <div className="product-container">
      <div className="product">
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

export default AddProduct;
