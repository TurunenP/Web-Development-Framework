import React from 'react'
import "./Admincard.css"
function Admincard({productname,productprize,id,click}) {


    return (
        <div className="admin-card">
            <div className="card">
        <div className="container">
            <h4><b>{productname}</b></h4>
            <p> ${productprize}</p>
            <button onClick={click}>Delete product</button>
        </div>
        </div>
        </div>
    )
}

export default Admincard
