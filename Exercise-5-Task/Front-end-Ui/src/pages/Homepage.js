import React ,{useEffect, useState}from 'react'
import Header from '../components/Header'
import "../App.css"
import ProductCard from '../components/ProductCard'
import Search from '../components/Search'

import NotFoundCard from '../components/NotFoundCard'

const API_HOST = "http://localhost:3004/api/v1/all/products";

function Homepage() {
  const [items, setData] = useState([]);
  // const [items] = React.useState(data);
  const [search] = React.useState("");

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

    const filterList = () => {
        if(search === ""){
            return items;
        }
        return items.filter(item => item.productName.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
  
  return (
    <div className="main">
      {/* header */}
      <Header/>
      {/* layout */}
   
      
      <Search />
    

    
      <div class="row">
          

      {filterList().length > 0 ? (
                 <>
                     {filterList().map(item => (
                       <div class="column">
              
                      
                       <ProductCard
                     productname = {item.product_name}
                     productprize ={item.product_prize}
                     productdesc= {item.product_desc}
                     productimg= {item.product_img}
                     
                     />
         
         
                     </div>
                     
                         
                             
                        
                     ))}
                 </>
             ) : (
              <div class="column">
                 <NotFoundCard text="Sorry, we do not have results" />
                 </div>
             )}
          




          
          
          {/* {data.map((data,key)=>{
            return(
              <div class="column">
              
              <div key={key}>
              <ProductCard
            productname = {data.productName}
            productprize ={data.productprize}
            
            />


            </div>
            </div>
            );
          })} */}
            
          
          {/* ends */}
    </div>
     
      

      
    </div>
  )
}

export default Homepage

