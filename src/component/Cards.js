import { useState } from "react";

import React from "react";



function Cards({id, name, info, image, price,removeTour}){
    
   console.log(typeof(removeTour));
   const[readmore,setReadmore] = useState(false);
    const description = readmore?info  : `${info.substring(0,200)}....`;
    function readmoreHandler()
    {
        setReadmore(!readmore);
    }

    return(
    <div className="card">

<img src={image} alt="img"className="image"></img>

     <div className="tours-info"> 

        <div className="tour-details">
        <h4 className="tour-price">₹{price}</h4>
        <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description" >{description}
        <span onClick={readmoreHandler}  className="readmore">
            {readmore ? `show less` : `readmore`}
        </span>
        </div>
        </div>
 
        <button className="btn"  onClick={() =>  removeTour(id)} >Not Intrested</button>
    </div>
   );
}


export default Cards;