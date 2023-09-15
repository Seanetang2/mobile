import React from "react";
import styled from "styled-components"
import Hero from "./Hero";
import Welcome from "../Pages/Welcome"
import Awesome from "./Awesome";


const Homescreen = () =>{
    return(
        <div>
            <Hero/>
            <Welcome />
            <Awesome />
        </div>
    )
}
export default Homescreen;

