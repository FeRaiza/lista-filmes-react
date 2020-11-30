import React from 'react';
import { GiPopcorn } from 'react-icons/gi';
import { TiUserOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';


import '../Style/Pages/home.css'

const Home = () => {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <main>
                    <h1>
                        O que eu faço para relaxar. 
                    </h1>
                    <p>Meus filmes favoritos</p>
                </main>
                <Link to="/filmes" className="enter-app">
                    <GiPopcorn size={30} color="#FFFF"/>
                </Link>
                <Link to="/sobre" id="btnUser" className="enter-about">
                    <TiUserOutline size={35} color="#FFFF"/>
                </Link>
                
            </div>
        </div>
    );
}

export default Home;