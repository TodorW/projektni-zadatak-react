import React, { useState } from "react";
import './ProductTable.css';
import Swal from 'sweetalert2';


const products = [
  {
    id: 1,
    title: "Hat",
    description: "100% Cotton",
    brand: "Nike",
    rating: 4.99,
    category: "Clothes",
    stock: "Available",
    action: "",
  },
  {
    id: 2,
    title: "Laptop",
    description: "Black 8Gb RAM",
    brand: "Lenovo",
    rating: 599.99,
    category: "Laptops",
    stock: "Available",
    action: "",
  },
  {
    id: 3,
    title: "iPhone  13",
    description: "IoS 18",
    brand: "Apple",
    rating: 676.00,
    category: "Smartphones",
    stock: "Sale",
    action: "",
  },
  {
    id: 4,
    title: "Bag",
    description: "Gucci Bag",
    brand: "Gucci",
    rating: 899.95,
    category: "Accessories",
    stock: "Sale",
    action: "",
  },
  {
    id: 5,
    title: "Headset",
    description:"Bluetooth",
    brand: "Xiaomi",
    rating: 29.99,
    category: "Equimpent",
    stock: "Not available",
    action: "",
  },
  {
    id: 6,
    title: "Mouse",
    description: "5000dpi",
    brand: "Logitech",
    rating: 9.99,
    category: "Equipment",
    stock: "Available",
    action: "",
  },
  {
    id: 7,
    title: "Keyboard",
    description: "Wide keyboard",
    brand: "White Shark",
    rating: 79.99,
    category: "Equipment",
    stock: "Available",
    action: "",
  },
  {
    id: 8,
    title: "T-shirt",
    description: "Nike Logo",
    brand: "Nike",
    rating: 29.99,
    category: "Clothes",
    stock: "Available",
    action: "",
  },
  {
    id: 9,
    title: "Monitor",
    description: "144Hz",
    brand: "Apple",
    rating: 149.99,
    category: "Equipment",
    stock: "Canceled",
    action: "",
  },
  {
    id: 10,
    title: "Keyboard",
    description: "Black with orange",
    brand: "Lenovo",
    rating: 49.99,
    category: "Equipment",
    stock: "Sale",
    action: "",
  },
];


const $ = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};

 
  
    
  








const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );



  



}
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table>
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
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.rating}</td>
              <td>{product.category}</td>
              <td>
                <span
                  style={{
                    backgroundColor:
                      product.stock === "Available"
                        ? "lightgreen"
                        : product.stock === "Sale"
                        ? "yellow"
                        : product.stock === "Not available"
                        ? "lightcoral"
                        : "lightgray",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {product.stock}
                </span>
              </td>
              <td>
                <button>Edit</button>
                <button onClick={$}>Delete</button>
              
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage)}>
          {currentPage}
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
;

export default ProductTable;