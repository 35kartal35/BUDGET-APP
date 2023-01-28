import React,{ useEffect,useState } from "react";
import Header from "./components/Header";
import './assets/images/style/general.css'
import CategoriesList from "./components/CategoriesList";
import axios from "axios";
import ListExpensive from "./components/ListExpensive";

function App() {

  const [categories,setCategories]=useState(null)
  const [expensive,setExpensive]=useState(null)

  useEffect(()=>{
    axios.get("http://localhost:3004/categories")
    .then((res)=>{
      setCategories(res.data)
    })
    .catch((res)=>{})
    axios.get("http://localhost:3004/expense")
    .then((res)=>{
      setExpensive(res.data)
    })
    .catch((res)=>{})
    
  },[])

  if( categories === null || expensive === null ) return null;
  return (
    <div className="container">
   <Header />
   <CategoriesList categories={categories}/>
   <ListExpensive expensive={expensive} />
   </div>
  );
}

export default App;
