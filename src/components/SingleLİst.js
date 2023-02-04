import React, {useState} from "react";
import '../assets/images/style/single.css'


const SingleList=({expense})=>{
    return(
        <div className="singleListContainer">
            <h1 className="singleListWrapper">
                {expense.title}</h1>
               <h3> <p className="price">{expense.description}</p></h3>
                <h2><p className="price">{expense.price}</p></h2>
        </div>
    )
}

export default SingleList;