import React, { useState ,useEffect} from "react";
import Layout from "../Layout";
import {getProducts,deleteProduct} from './apiAdmin'
import { isAuthenticated } from "../auth/index";
// import { Link } from "react-router-dom";

const ManageProducts = () => {
    const [products , setProducts] = useState([])
    const {user,token} = isAuthenticated()

    const loadProducts = ()=>{
        getProducts().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setProducts(data)
            }
        })
    }
    const destroy = productId =>{
        deleteProduct(productId,user._id,token).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                loadProducts()
            }
        })
    }

    useEffect(()=>{
        loadProducts()
    },[])
    return (
        <Layout
          title="Manage products"
          description="Manage All products here"
          className="container-fluid"
        >
          
         <div className="row">
            <div className="col-12">
                <ul className="list-group">
                 {products.map((p,i)=>(
                       <li key={i} className="list-group-item d-flec justify-content-betwwen align-items-center">
                          <strong> {p.name}</strong>
                       </li> 
                 ))}
                </ul>
            </div>
         </div>
         
        </Layout>
      );
}
 
export default ManageProducts;
