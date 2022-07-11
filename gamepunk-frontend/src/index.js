import React, { useState } from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Openpost from "./components/Openpost"
import Welcome from "./components/Welcome"
import Createpost from "./components/Createpost"

function App(){

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/Login" element={<Login setUserLogin={setUser}/>}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Welcome" element={<Welcome username={user.name}/>}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Createpost" element={<Createpost username={user.name}/>}></Route>
      <Route path="/Openpost" element={<Openpost />}></Route>
    </Routes>
  </BrowserRouter>)
}

ReactDOM.render(<App />,document.getElementById("root"));
