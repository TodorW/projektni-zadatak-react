import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import "./Home.css";

const Home = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 9;

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dummyjson.com/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => dispatch({ type: "DELETE_PRODUCT", payload: id }));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const getStockStatus = (stock) => {
    if (stock > 0 && stock <= 100) {
      return "Available";
    } else if (stock <= 0) {
      return "Not available";
    } else if (stock > 100) {
      return "Sale";
    } else {
      return "Unknown";
    }
  };

  const getStockClass = (stockStatus) => {
    switch (stockStatus) {
      case "Available":
        return "available";
      case "Not available":
        return "not-available";
      case "Sale":
        return "sale";
      default:
        return "";
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = state.items.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="home-container">
      <div className="top-bar-home">
        <label className="label-home">
          <input
            className="searchbar-home"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </label>
        <Link to="/product/add" id="addnew" className="add-home">
          Add
        </Link>
      </div>
      <table className="table-home">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => {
            const stockStatus = getStockStatus(product.stock);
            return (
              <tr key={product.id}>
                <td>#{product.id}</td>
                <td>
                  <Link to={`/product/${product.id}`} className="product-link">
                    {product.title}
                  </Link>
                </td>{" "}
                <td className="description-home">{product.description}</td>
                <td>{product.brand}</td>
                <td>{product.price} $</td>
                <td>{capitalizeFirstLetter(product.category)}</td>
                <td>
                  <span
                    className={`stock-status ${getStockClass(stockStatus)}`}
                  >
                    {stockStatus}
                  </span>
                </td>
                <td className="action">
                  <Link
                    to={`/product/edit/${product.id}`}
                    className="edit-link"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1875 4H4.1875C3.65707 4 3.14836 4.21071 2.77329 4.58579C2.39821 4.96086 2.1875 5.46957 2.1875 6V20C2.1875 20.5304 2.39821 21.0391 2.77329 21.4142C3.14836 21.7893 3.65707 22 4.1875 22H18.1875C18.7179 22 19.2266 21.7893 19.6017 21.4142C19.9768 21.0391 20.1875 20.5304 20.1875 20V13"
                        stroke="#624DE3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.6875 2.5C19.0853 2.10217 19.6249 1.87868 20.1875 1.87868C20.7501 1.87868 21.2897 2.10217 21.6875 2.5C22.0853 2.89782 22.3088 3.43739 22.3088 4C22.3088 4.56261 22.0853 5.10217 21.6875 5.5L12.1875 15L8.1875 16L9.1875 12L18.6875 2.5Z"
                        stroke="#624DE3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="delete-button"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.1875 6H5.1875H21.1875"
                        stroke="#A30D11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.1875 6V4C8.1875 3.46957 8.39821 2.96086 8.77329 2.58579C9.14836 2.21071 9.65707 2 10.1875 2H14.1875C14.7179 2 15.2266 2.21071 15.6017 2.58579C15.9768 2.96086 16.1875 3.46957 16.1875 4V6M19.1875 6V20C19.1875 20.5304 18.9768 21.0391 18.6017 21.4142C18.2266 21.7893 17.7179 22 17.1875 22H7.1875C6.65707 22 6.14836 21.7893 5.77329 21.4142C5.39821 21.0391 
                  5.1875 20V6H19.1875Z"
                        stroke="#A30D11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.1875 11V17"
                        stroke="#A30D11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.1875 11V17"
                        stroke="#A30D11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-home">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active-page" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
