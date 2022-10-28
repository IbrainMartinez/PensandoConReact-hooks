import FilterableProductTable from "./FilterableProductTable ";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const Category2 = () =>{
    const PRODUCTS = [
        { id: 1, stocked:true, name: 'NIKE', estado: 'ACTIVO', tipo: 'online'},
        { id: 2, stocked:true, name: 'ADIDAS', estado: 'ACTIVO', tipo: 'online'},
        { id: 3, stocked:true, name: 'PIRMA', estado: 'ACTIVO', tipo: 'mayoreo'},
        { id: 4, stocked:true, name: 'PUMAS', estado: 'ACTIVO', tipo: 'mayoreo'},
        { id: 5, stocked:false, name: 'JORDAN', estado: 'INACTIVO', tipo: 'menudeo'}
      ];

      return(
        <>
        <div className="container">
          <FilterableProductTable product={PRODUCTS} />
          <ProductRow product={PRODUCTS} />
          <ProductCategoryRow product={PRODUCTS} />
        </div>
          
        </>

      )

}


export default Category2;