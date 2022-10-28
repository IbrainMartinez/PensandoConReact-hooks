import { useState } from "react";

const FormularioAlta= (props) =>{
   
    const estadoInicial ={id: null, category: '', price:'',stocked: '', name: ''}
    const [usuario, setUsuario] = useState(estadoInicial);

/////
    const handleInputChange = (event) =>{
        
        setUsuario({
            ...usuario,[event.target.name] : event.target.value
        });  
    }   

    const guardarDatos=(event)=>{
        event.preventDefault();
        console.log(usuario);

        if ( !usuario.category || !usuario.price || !usuario.stocked || !usuario.name) return //nuevo
        // if(usuario.stocked == 'false'){
        //     usuario.stocked == false
        // }
        props.addUsuario(usuario);
        setUsuario(estadoInicial) //nuevo
    } 
    


    

    return (
        <section className="container">
            <form onSubmit={guardarDatos}>

                <label >Category</label>
                <input type="text" placeholder="Escribe la categoria"  onChange={handleInputChange} name='category' value={usuario.category} required/>  

                <label >Precie</label>
                <input type="text" placeholder="Escribe el precio"  onChange={handleInputChange} name='price' value={usuario.price} required/>

                <label >Stocked</label>
                <select onChange={handleInputChange} name='stocked' value={usuario.stocked} required>
                <option>selecionar</option>
                    <option value='true'>TRUE</option>
                    <option value='false'>FALSE</option>
                </select>

                <label >Product</label>
                <input type="text" placeholder="Escribe el nombre del producto"  onChange={handleInputChange} name='name' value={usuario.name} required/>
  

                <p>"Si guarda los datos, Pero no actualiza la tabla. En la consola, se muestra que si guarda el arreglo actualizado"</p>

                <input type="submit" value="enviar"/>
                
            </form>
            
        </section>
    )
   
};

export default FormularioAlta;