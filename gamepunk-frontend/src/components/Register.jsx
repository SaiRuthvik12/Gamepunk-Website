import React, { useState } from "react";
import logo from "./GamingLogoWhite.png"
import axios from "axios"

function Register(){


    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    })

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
        const {username,email,password} = user

        if(username && email && password)
        {
            // alert("posted")
            axios.post("http://localhost:5000/Register",user)
            .then(function(res){console.log(res)})
        }
        else{
            alert("invalid")
        }
       
    }



    return <div class="login-container row">
    <div class="col-lg-6">
    <img class="logo2" src={logo} alt="Yes" />
    <h1 class="gametitle h3 font-weight-normal">GAMEPUNK</h1>
    </div>
    <div class="col-lg-6 register-form">
        <h1 class="login-title">Enter your details</h1>

        <form class="form-signin" action="/Login">

        <input type="text" name="username" value={user.username} class="form-control top" placeholder="Username" onChange={handleChange} required autofocus />
        <input type="email" name="email" value={user.email} class="form-control middle" placeholder="Email address" onChange={handleChange} required ></input>
        <input type="password" name="password" value={user.password} class="form-control bottom" placeholder="Password" onChange={handleChange} required />

        <button class="login-btn btn btn-lg btn-primary btn-block" type="submit" onClick={buttonClick}>REGISTER</button>
  
        </form>
    </div>
    </div>
}

export default Register;