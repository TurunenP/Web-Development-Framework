import React ,{useEffect, useState} from 'react'
import "./AdminDash.css"
import AddProduct from '../components/AddProduct'
import Admincard from '../components/Admincard'

import axios from 'axios'

const API_HOST = "http://localhost:3004/api/v1/all/products";
function AdminDash() {
  const [items, setData] = useState([]);
  const fetchInventory = () => {
        
    fetch(`${API_HOST}`,{
        method: "GET",
        headers: {
            
            "Content-Type": "application/json"
            
        }},)
        .then(res => res.json())
        .then(json => setData(json));

}

// Calling the function on component mount
useEffect(() => {
    fetchInventory();
  
}, []);

function  sayHello(id) {
    // logic goes 

  const baseUrl = `http://localhost:3004/api/v1/product/${id}/delete`;
  axios.delete(baseUrl)
  
        
  
//   console.log(baseUrl)




  

  }



   const headingadm = {
     color:"black",
     textAlign:"center",
     fontSize:"50px"
   }
    




    return (
        <div className="admin">
          <h1 style={headingadm}>Admin Mode</h1>
        <div className="card-one">
            <h3>All products</h3>
            {items.map((item)=>{
            return(
             
              
             <div key={item._id} >
             <Admincard
              key={item.id}
             productname={item.product_name}
             productprize={item.product_prize}
             id={item._id}
             click = {() => sayHello(item._id)}
            
             
             
             />
             </div>


           
          
            );
          })}
            

           
          

        </div>
        <div className="card-two">

            

            <AddProduct/>

        </div>


        </div>
    )
}

export default AdminDash
