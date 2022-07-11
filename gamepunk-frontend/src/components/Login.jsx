import axios from "axios";
import React, { useState } from "react";
import logo from "./GamingLogoWhite.png"
import { useNavigate } from "react-router-dom"

function Login(props){

    const history = useNavigate()

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const [msg,setMsg]=useState()

    function handleChange(event)
    {
        const {name,value}=event.target;
        setUser({
            ...user,
            [name]:value

        })

        console.log(user);
    }

    function buttonClick(){
        
        axios.post("http://localhost:5000/login", user).then(res => {
            // alert(res.data.message);
            if(res.data.user && res.data.user._id)
            {
                props.setUserLogin(res.data.user)
                history("/Welcome")
            }
            else{
                setMsg(res.data.message)
                history("/Login");
            }
                
        })
    }


    return (
    <div class="login-container row">
        <div class="col-lg-6">
        <img class="logo2" src={logo} alt="Yes" />
        <h1 class="gametitle h3 font-weight-normal">GAMEPUNK</h1>
        </div>
        <div class="col-lg-6 login-form">
            <h1 class="login-title">Enter your details</h1>

            <form class="form-signin" >

            <input type="text" name="username" value={user.username} class="form-control top" placeholder="Username" onChange={handleChange} required autofocus />
            
            <input type="password" name="password" value={user.password} class="form-control bottom" placeholder="Password" onChange={handleChange} required />

            <button class="login-btn btn btn-lg btn-primary btn-block" type="button" onClick={buttonClick}>LOGIN</button>
      
            </form>
            <h3 class="login-title failed-msg">{msg}</h3>
        </div>
    </div>)
}

export default Login;