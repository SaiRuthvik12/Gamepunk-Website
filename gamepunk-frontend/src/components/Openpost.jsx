import React from "react";
import Navbartop from "./Navbartop";
import Navbarleft from "./Navbarleft";
import Comment from "./Comment";

function Home(){
    return <div class="home-container">
        <Navbartop />
        <div class="home-content row">
            <Navbarleft />
            <div class="posts-open col">
                <div class="post-content row">

                    <div class="post-caption col-6">
                        <h1>hi</h1>
                    </div>

                    <div class="comments col-3">
                        <input type="text" class="comment-textbox" placeholder="Enter comment"></input>
                        <button class="comment-button btn btn-primary">Post</button>

                        <div class="comments-area">
                        <Comment title="Sai Ruthvik" content="ddsfrgaergheththheth"/>
                        <Comment title="Sai Ruthvik" content="ddsfrgaergheththhethdsfrgaergheththhethdsfrgaergheththheth"/>
                        <Comment title="Sai Ruthvik" content="ddsfrgaergheththheth"/>
                        <Comment title="Sai Ruthvik" content="ddsfrgaergheththhethdsfrgaergheththhethdsfrgaergheththheth"/>
                        <Comment title="Sai Ruthvik" content="ddsfrgaergheththheth"/>
                        <Comment title="Sai Ruthvik" content="ddsfrgaergheththhethdsfrgaergheththhethdsfrgaergheththheth"/>
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>
        </div>
        
    </div>
}

export default Home;