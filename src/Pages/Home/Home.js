import React from "react";

import LeftMenu from "../../Components/LeftMenu";
import RightMenu from "../../Components/RightMenu";

import "./Home.css"


const Home = () => {
    return (
        <div className="home-container"> 
        <LeftMenu />
        <RightMenu />        
        </div>
    )
}

export default Home;