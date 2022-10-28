import FilterableProductTable from "./FilterableProductTable ";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import ProductTable from "./ProductTable";

const Category = (props) =>{
  const {PRODUCTS} = props;

      return(
        <>

          <div className="container ">
            <FilterableProductTable product={PRODUCTS} />
            <ProductRow product={PRODUCTS} />
            <ProductCategoryRow product={PRODUCTS} />
          </div>
        </>
      )

}


export default Category;