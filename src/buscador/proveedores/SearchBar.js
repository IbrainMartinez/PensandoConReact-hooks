 
  const SearchBar=(props)=>{
  
    const {filterText} = props;
    const {inStockOnly} = props;
    const {inStockOnly2} = props;
    const {inStockOnly3} = props;

    const {handleFilterTextChange} = props;

    const {handleInStockChange} = props;
    const {handleInStockChange2} = props;
    const {handleInStockChange3} = props;
  
  
    return (
      
      <>
          <form>
         <h1>Proveedores</h1>
          <input
              type="text"
              placeholder="Search..."
              value={filterText}
              onChange={(e) => handleFilterTextChange(e.target.value)}
          />
          <p>
              <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => handleInStockChange(e.target.checked)}
              />{" "}
                Tipo Online
          </p>
          <p>
              <input
                  type="checkbox"
                  checked={inStockOnly2}
                  onChange={(e) => handleInStockChange2(e.target.checked)}
              />{" "}
                Tipo Mayoreo
          </p>
          <p>
              <input
                  type="checkbox"
                  checked={inStockOnly3}
                  onChange={(e) => handleInStockChange3(e.target.checked)}
              />{" "}
                Tipo Menudeo
          </p>
      </form>
  
      </>
      );
  }
  
  export default SearchBar;