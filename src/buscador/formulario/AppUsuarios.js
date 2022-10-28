import { useState } from "react";
import FormularioAlta from "./FormularioAlta";

import FilterableProductTable from "../FilterableProductTable ";
import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";
import Category2 from "../proveedores/category2";



const Completo = () =>{
 
  
  const UsuariosData = [
    {id: 1, category: 'Sporting Goods', price: '$49.99', stocked: 'true', name: 'Football'},
    {id: 2, category: 'Sporting Goods', price: '$9.99', stocked: 'true', name: 'Baseball'},
    {id: 3, category: 'Sporting Goods', price: '$29.99', stocked: 'false', name: 'Basketball'},
    {id: 4, category: 'Electronics', price: '$99.99', stocked: 'true', name: 'iPod Touch'},
    {id: 5, category: 'Electronics', price: '$399.99', stocked: 'false', name: 'iPhone 5'},
    {id: 6, category: 'Electronics', price: '$199.99', stocked: 'true', name: 'Nexus 7'}
  ];

    const[listaUsuarios, setListaUsuario] = useState(UsuariosData);
    

    //agregar usuario //no
    const addUsuario = (objetoUsuario) =>{
        objetoUsuario.id  = listaUsuarios.length + 1
        setListaUsuario([...listaUsuarios, objetoUsuario])     
    }

    console.log(listaUsuarios);

    return (
      <main className="container">
      <section className="flex-row">
          <section className="flex-large">

          <div className="container">
            <br></br>
            <br></br>
            <h2>Agregar Producto</h2>
              <FormularioAlta addUsuario={addUsuario}/>
          </div> 


          <div className="flex-row">
                  <div className="flex-large">
                      <div className="container ">
                        <FilterableProductTable product={listaUsuarios}/>
                        <ProductRow product={UsuariosData} />
                        <ProductCategoryRow product={UsuariosData} />
                      </div>
                  </div>
 
                    <div className="flex-large">
                        <div className='container'>
                            <Category2/>
                        </div>

                    </div>
                </div>

          
              
              <br></br>
          
  

          </section>
          
      </section>
  </main>
    )
};
export default Completo;