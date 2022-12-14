import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const  FilterableProductTable = (props) => {
  
  const {product} = props;
  const [filterText,setOnFilterTextChange] = useState('');
  const [inStockOnly,setOnInStockChange] = useState(false);
  const {listaUsuarios} = props;

  //fin
    
      return (
        <>

          <SearchBar
            filterText={filterText} inStockOnly={inStockOnly}
            handleFilterTextChange= {setOnFilterTextChange}
            handleInStockChange = {setOnInStockChange}
          />
          <ProductTable
            listaUsuarios={listaUsuarios}
            product={product}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </>
      );
  }
  
  export default FilterableProductTable;