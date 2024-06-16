import React, { createContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, items: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { items: [] });

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_PRODUCTS', payload: data.products });
        console.log(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
