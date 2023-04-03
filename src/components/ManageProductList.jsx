import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const ManageProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () =>{
        try {
            const response = await axios.get("http://localhost:5000/products")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (productId) => {
        try {
          await axios.delete(`http://localhost:5000/products/${productId}`);
          getProducts();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
  <div className="container mt-5">
  <Link to={'/addproducts'} className="button is-success">
    Add New Product
  </Link>
  <br /><br />
  <div className="columns is-multiline">
    {products.map((product)=>(
           <div className="column is-2" key={product.id}>
           <div className="card">
             <div className="card-image">
               <figure className="image is-4by3">
                 <img src={product.url} 
                 alt="Image"/>
               </figure>
             </div>
             <div className="card-content">
               <div className="media">
                
                 <div className="media-content">
                   <p className="title is-6">{product.name}</p>
                 </div>
               </div> 
              
             </div>

             <footer className='card-footer'>
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
               <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
             </footer>
           </div>
           </div>
    ))}
 
            </div>
        </div>
    </div>
  )
}

export default ManageProductList
