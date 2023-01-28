import React from "react";
import '../assets/images/style/single.css'

const SingleList=({expens})=>{
    return(
        <div className="singleListContainer">
            <h1 className="singleListWrapper">
                {expens.title}</h1>
                <p className="price">{expens.description}</p>
                <p className="price">{expens.price}</p>
        </div>
    )
}

export default SingleList;