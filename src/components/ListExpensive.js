import React, { useState, useEffect } from "react";
import '../assets/images/style/listContainer.css'
import SingleList from "./SingleLİst";

const ListExpensive=({expense=[]})=>{
    return(
        <div className="listContainer">
            <div className="listWrapper">
            {
                expense.map(expense=>(
                    <SingleList key={expense.id} expense={expense} />
                ))
            }
            </div>
        </div>
    )
}

export default ListExpensive;