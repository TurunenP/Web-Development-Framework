import React from 'react'
import './App.css'
import Bar from './components/Bar'
import MostRead from './components/MostRead'
import Header from './components/Header'
import Homeland from './components/Homeland'
import ImageContainer from './components/ImageContainer'



function App() {
  return (
    <div className="container-fluid">
      <Header/>

    <div className="container">


     <div className="row">

       <div className="col-md-12 mt-2">
       <Bar
       content ="The following toolchains offer more flexibility and choice. "
       
       />
       </div>
       <div className="col-md-12 mt-2">
       <Bar
       content ="The following toolchains offer more flexibility and choice. "
       
       />
       </div>
       <div className="col-md-12 mt-2">
       <Bar  
       content ="The following toolchains offer more flexibility and choice."
       
       />
       </div>

     </div>

      <div className="row" >
        <div className="col-md-9 img-card mt-2">
          <ImageContainer/>

          <a href="#" ><Homeland/></a>
          <hr/>
          <a href="#"><Homeland/></a>
          <hr/>
          <a href="#"><Homeland/></a>
         

        </div>
        <div className="col-md-3 mt-2 ">
          <MostRead/>
        </div>
      </div>


    </div>
    </div>
  )
}


export default App
