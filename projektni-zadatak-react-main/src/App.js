 

import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout'
import ProtectedRoute from './context/ProtectedRoute';

   
 
function App() {
  return (
    <div>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/product/:id" element={<ProtectedRoute component={ProductDetails} />} />
            <Route path="/product/edit/:id" element={<ProtectedRoute component={EditProduct} />} />
            <Route path="/product/add" element={<ProtectedRoute component={AddProduct} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
   
    </div>
  );
}
 

export default App;
