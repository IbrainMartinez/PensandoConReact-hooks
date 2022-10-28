const ProductCategoryRow = (props) =>{
  const {estado} = props;
      return (
        <>
          <tr>
            <th colSpan="2">
              {estado}
            </th>
          </tr>
        </>
        
      );
    }


export default ProductCategoryRow;