import React, { useEffect,useState } from "react";
import Navbartop from "./Navbartop";
import Navbarleft from "./Navbarleft";
import Post from "./Post";
import axios from "axios";

function Home(){

    const [cat,setCat]=useState("0")

    const [data,setData]=useState([]);

    useEffect(()=>{
        if(cat==="0")
        {
            axios.get("http://localhost:5000/allposts").then(res=>{
            setData(res.data.post)
            // console.log(data)
            })
        }
        else if(cat==="1")
        {
            axios.get("http://localhost:5000/cat1").then(res=>{
            setData(res.data.post)
            // console.log(data)
            })
        }
        else if(cat==="2")
        {
            axios.get("http://localhost:5000/cat2").then(res=>{
            setData(res.data.post)
            // console.log(data)
            })
        }
        else if(cat==="3")
        {
            axios.get("http://localhost:5000/cat3").then(res=>{
            setData(res.data.post)
            // console.log(data)
            })
        }
        
    })




    return <div class="home-container">
        <Navbartop />
        <div class="home-content row">
            <Navbarleft setCategory={setCat}/>
            
            <div class="posts col">
            <form action="/Openpost">
                <div class="row">
                    {
                        data.map((item)=>{
                            return(
                            <Post user={item.user} game={item.game} category={item.category} title={item.title} content={item.content}/>
                            )
                        })
                        
                        
                    }

                    
                    
                    {/* <Post />
                    <Post />
                    <Post />

                    <Post />
                    <Post />
                    <Post />
                    
                    <Post />
                    <Post />
                    <Post /> */}
                    
                </div>
                </form>
            </div>
            
        </div>
        
    </div>
}

export default Home;