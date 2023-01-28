import React from "react";
import '../assets/images/style/headerContainer.css'
import logo from '../assets/img/logo.gif'



const Header=()=>{
    return(
        <div className="headerContainer">
        <div className="headerWrapper">
            <div className="logoWrapper">
                <img src={logo}/>
            </div>
            <h1>My Budget App</h1>
        </div>
        </div>
    )
}

export default Header;