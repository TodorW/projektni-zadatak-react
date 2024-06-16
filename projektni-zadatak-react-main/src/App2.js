import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
// import Home from './pages/Home';
// import ProductDetails from './pages/ProductDetails';
// import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductTable from './ProductTable.js';


function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
            {/* <Route path="/product/edit/:id" element={<EditProduct />} /> */}
            {/* <Route path="/product/add" element={<AddProduct />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
