import React, { useEffect, useState } from "react";
import CategoriesList from "../components/CategoriesList";
import ListExpensive from "../components/ListExpensive";
import Header from "../components/Header";
import axios from "axios";



const Home =()=>{
    const [expense, setExpense] = useState(null);
    const [categories, setCategories ] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState({
        id: "0",
        name: "Hepsi",
    });

    useEffect(()=>{
        axios.get("http://localhost:3004/categories")
        .then((res)=> {
            setCategories(res.data);
        })
        .catch((err)=>{});
        axios.get("http://localhost:3004/expense")
        .then((res)=>{
            console.log(res.data)
            setExpense(res.data);
        })
        .catch((err)=>{});
    }, []);

    if(categories === null || expense === null) return null;
    return(
        <div>
            <Header whichPage={"home"} />
      <CategoriesList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ListExpensive
        selectedCategory={selectedCategory}
        categories={categories}
        expense={expense}
      />
        </div>
    );
};


export default Home;