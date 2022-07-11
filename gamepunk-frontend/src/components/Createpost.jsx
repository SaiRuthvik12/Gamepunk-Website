import React, { useState } from "react";
// import logo from "./GamingLogoWhite.png"
import Navbartop from "./Navbartop";
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Createpost(props){

    const history = useNavigate()
    const [postdetails,setPost]=useState({
        user:props.username,
        game:"",
        category:"",
        title:"",
        content:""
    })
    
    function handleChange(event){
        const {name,value}=event.target;
        setPost({
            ...postdetails,
            [name]:value

        })

        console.log(postdetails);
    }

    function handleClick(){
        const {user,game,category,title,content} = postdetails

        if(user && game && category && title && content)
        {
            // alert("posted")
            axios.post("http://localhost:5000/createpost",postdetails)
            .then(res=>{
                history("/Home")
                console.log(res)
            })
        }
        else{
            alert("invalid")
        }

    }

    return (
        <div>
            <Navbartop />
            <div class="form-container">
                
                {/* <img class="logo1" src={logo} alt="Yes" /> */}
                <h1 class="gametitle h3 font-weight-normal">Create New Post</h1>
                <form class="form-signin" method="get">
                    <input type="text" name="game" class="form-control top" placeholder="Game" onChange={handleChange} required autofocus />
                    <select class="form-control middle" name="category" onChange={handleChange} >
                        <option value="" disabled selected>Category</option>
                        <option value = "1">Looking for teammates</option>
                        <option value = "2">Videos and Clips</option>
                        <option value = "3">Question and Answer</option>
                    </select>
                    <input type="text" name="title" class="form-control bottom" placeholder="Title" onChange={handleChange} required />
                    <textarea name="content" class="form-control post-text" rows="5" placeholder="Content" onChange={handleChange}></textarea>
                    <button class="my-btn btn btn-lg btn-primary btn-block" type="button" onClick={handleClick}>Create</button>
                    
                </form>
            
            
            </div>
        </div>)
}

export default Createpost;