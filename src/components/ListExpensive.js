import React from "react";
import '../assets/images/style/listContainer.css'
import SingleList from "./SingleLİst";

const ListExpensive=({expensive=[]})=>{
    return(
        <div className="listContainer">
            <div className="listWrapper">
            {
                expensive.map(expens=>(
                    <SingleList key={expens.id} expens={expens} />
                ))
            }
            </div>
        </div>
    )
}

export default ListExpensive;