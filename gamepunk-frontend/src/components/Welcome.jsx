import React from "react";
import logo from "./GamingLogoWhite.png"
import { useNavigate } from "react-router-dom"

function Welcome(props){
    const history = useNavigate()

    function buttonClick(){
        history("/Home")

    }
    return (
        <div class="login-container row">
        <div class="col-lg-6">
        <img class="logo2" src={logo} alt="Yes" />
        <h1 class="gametitle h3 font-weight-normal">GAMEPUNK</h1>
        </div>
        <div class="col-lg-6 login-form">
            <h1 class="login-title welcome-msg">Welcome!</h1>
            <h1 class="login-title">{props.username}</h1>
            <form class="form-signin">
                <button class="login-btn btn btn-lg btn-primary btn-block" type="button" onClick={buttonClick}>CONTINUE</button>
            </form>
            
            
        </div>
    </div>)
}

export default Welcome;