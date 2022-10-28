const ProductRow = (props)=>{

  const {product} = props;

    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

      return (
        <>
            <tr>
              <td>{name}</td>
              <td>{product.tipo}</td>
            </tr>
          
        </>
        
      );
    }

export default ProductRow;
  