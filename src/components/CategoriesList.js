import React from "react";
import '../assets/images/style/categorilist.css'


const CategoriesList=({categories=[]})=>{
    return(
        <div className="categoriesContainer">
          <div className="categoriestWrapper">
           <p className="categoryItem">Hepsi</p>
           {
        
            categories.map(category=>(
                <p className="categoryItem">
                    {category.name}
                </p>
            ))
           }
           
           </div>
        </div>
    )
}

export default CategoriesList;