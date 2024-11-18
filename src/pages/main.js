import Home from "./home";
import About from "./about";
import React from 'react';
import '../App.css';
import My_work from "./work";
import Skills from "./skill";
const Main=()=>{
    return(
        <div data-bs-spy="scroll"className=" main-container px-4 bg-black">
            <div id="home" className="d-flex flex-column justify-content-center text-white bg-black py-5">
                <Home/>
            </div>
            
            <div id="about" className=" bg-black  text-light h-100 py-5">
                <About/>
            </div>
            <div id="skills" className=" text-white h-100 py-5">
                <Skills/>
            </div>
            <div id="my_works" className="bg-black  py-5 h-100  ">
                <My_work/>
            </div>
        </div>
    )
}
export default Main;