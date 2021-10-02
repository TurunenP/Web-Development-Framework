import React from 'react'
import Header from './components/Header'
import "./App.css"
import ProductCard from './components/ProductCard'
import Search from './components/Search'
import {data} from "./components/Data/data"
import NotFoundCard from './components/NotFoundCard'

function App() {
  const [items] = React.useState(data);
  const [search, setSearch] = React.useState("");

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
   
      
      <Search searchParam={search} onChange={(e) => setSearch(e.target.value)}/>
    

    
      <div class="row">
          

      {filterList().length > 0 ? (
                 <>
                     {filterList().map(item => (
                       <div class="column">
              
                      
                       <ProductCard
                     productname = {item.productName}
                     productprize ={item.productprize}
                     productdesc= {item.productdesc}
                     productdetails= {item.productdetails}
                     
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

export default App


