import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const  FilterableProductTable = (props) => {
  
  const {product} = props;

  const [filterText,setOnFilterTextChange] = useState('');
  const [inStockOnly,setOnInStockChange] = useState(false);
  const [inStockOnly2,setOnInStockChange2] = useState(false);
  const [inStockOnly3,setOnInStockChange3] = useState(false);
  
      

  //fin
    
      return (
        <>

          <SearchBar
            filterText={filterText} inStockOnly={inStockOnly}
            handleFilterTextChange= {setOnFilterTextChange}
            handleInStockChange = {setOnInStockChange}
            handleInStockChange2 = {setOnInStockChange2}
            handleInStockChange3 = {setOnInStockChange3}
          />
          <ProductTable
            product={product}
            filterText={filterText}
            inStockOnly={inStockOnly}
            inStockOnly2={inStockOnly2}
            inStockOnly3={inStockOnly3}

          />
        </>
      );
  }
  
  export default FilterableProductTable;