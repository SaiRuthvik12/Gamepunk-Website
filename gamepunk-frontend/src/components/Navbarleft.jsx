import React from "react";

function Navbarleft(props){

    function handleClick0(){
        props.setCategory("0");
    }  
    function handleClick1(){
        props.setCategory("1");
    } 
    function handleClick2(){
        props.setCategory("2");
    } 
    function handleClick3(){
        props.setCategory("3");
    }   

    return <div class="navbarleft-container col-1">
        
        <button id="all" onClick={handleClick0} class="btn navbarleft-btn"><i class="fa-solid fa-hashtag"></i></button>
        <button id="cat1" onClick={handleClick1} class="btn navbarleft-btn"><i class="fa-solid fa-people-group"></i></button>
        <button id="cat2" onClick={handleClick2} class="btn navbarleft-btn"><i class="fa-solid fa-play"></i></button>
        <button id="cat3" onClick={handleClick3} class="btn navbarleft-btn"><i class="fa-solid fa-circle-question"></i></button>
    </div>
}

export default Navbarleft;