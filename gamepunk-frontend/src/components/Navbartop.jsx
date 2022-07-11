import React from "react";
import logo from "./GamingLogoWhite.png"
import { useNavigate } from "react-router-dom"


function Navbartop() {
  const history = useNavigate()

  function handleClick(){
    history("/Createpost")
  }

  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="."><img src={logo} alt="" width="90"/>  GAMEPUNK</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <span class="dot"> <a class="nav-link"><i class="fa-solid fa-phone-flip profile-symbol"></i></a></span>
               
              </li>

              <li class="nav-item">
                <span class="dot"><a class="nav-link" onClick={handleClick}><i class="fa-solid fa-plus profile-symbol"></i></a></span>
                
              </li>

              <li class="nav-item">
                <span class="dot"><a class="nav-link"><i class="fa-solid fa-user profile-symbol"></i></a></span>
                
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Navbartop;
