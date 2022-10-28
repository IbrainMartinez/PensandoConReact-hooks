import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
const ProductTable = (props) =>{

  const {filterText} = props;
  const {inStockOnly} = props;
  const {product} = props;
  const {listaUsuarios} = props;

    const rows = [];
    let lastCategory = null;

    product.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && product.stocked =='false' ) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
        
        rows.push(
          <ProductRow
          listaUsuarios={listaUsuarios}
            product={product}
            key={product.name}
          />
        );

      lastCategory = product.category;
    });

    return (
      <>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
       
          
        
              <tbody>
              {
                rows
              }
      
            </tbody>
         
          

        
      </table>
      </>
      
    );
  }

  export default ProductTable;