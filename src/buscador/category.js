import FilterableProductTable from "./FilterableProductTable ";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const Category = () =>{
    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ];

      return(
        <>
          <FilterableProductTable product={PRODUCTS} />
          <ProductRow product={PRODUCTS} />
          <ProductCategoryRow product={PRODUCTS} />
        </>

      )

}


export default Category;