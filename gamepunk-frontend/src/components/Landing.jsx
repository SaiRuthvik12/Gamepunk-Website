import React from "react";
import logo from "./GamingLogoWhite.png"

function Landing(){
    return (
    <div class="form-container">
        
        <img class="logo1" src={logo} alt="Yes" />
        <h1 class="gametitle h3 font-weight-normal">GAMEPUNK</h1>
        <form class="form-signin" action="/Login" method="get">
        <button class="my-btn btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
        </form>
        <form class="form-signin" action="/Register" method="get">
        <button class="my-btn btn btn-lg btn-primary btn-block" type="submit">REGISTER</button>
        </form>
      
    
    </div>)
}

export default Landing;