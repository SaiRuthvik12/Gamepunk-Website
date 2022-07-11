import React from "react";
import { useNavigate } from "react-router-dom"

function Post(props){
    const history = useNavigate()

    function handleClick(){
        history("/Openpost")
    }

    return <button class="btn post col-lg-3" type="button" onClick={handleClick}>
        <div>
            <p class="post-display">User: {props.user}</p>
            <p class="post-display">Game: {props.game}</p>
            <p class="post-display">Category: {props.category}</p>
            <p class="post-display">Title: {props.title}</p>
            {/* <p>{props.content}</p> */}
        </div>
    </button>
}

export default Post;