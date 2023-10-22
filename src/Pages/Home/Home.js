import React from "react";

import HomeLeftMenu from "../../Components/HomeComponents/HomeLeftMenu";
import HomeRightMenu from "../../Components/HomeComponents/HomeRightMenu";

import "./Home.css"


const Home = () => {
    return (
        <div className="home-container"> 
        <HomeLeftMenu />
        <HomeRightMenu />        
        </div>
    )
}

export default Home;