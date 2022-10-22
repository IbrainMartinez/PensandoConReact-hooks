import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProductCategoryRow from './buscador/ProductCategoryRow';
import SearchBar from './buscador/SearchBar';
import ProductTable from './buscador/ProductTable';
import ProductRow from './buscador/ProductRow';
import FilterableProductTable from './buscador/FilterableProductTable ';
import Category from './buscador/category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Category/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
