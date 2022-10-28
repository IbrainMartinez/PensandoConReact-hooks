import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
const ProductTable = (props) =>{

  const {filterText} = props;
  
  const {inStockOnly} = props;
  const {inStockOnly2} = props;
  const {inStockOnly3} = props;

  const {product} = props;

    const rows = [];
    let lastCategory = null;

    product.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && product.tipo !=='online') {
        return;
      }
      if (inStockOnly2 &&  product.tipo !== 'mayoreo') {
        return;
      }if (inStockOnly3 && product.tipo !== 'menudeo') {
        return
      }
      if (product.estado !== lastCategory) {
        rows.push(
          <ProductCategoryRow
          estado={product.estado}
            key={product.estado} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.estado;
    });

    return (
      <>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </>
      
    );
  }

  export default ProductTable;