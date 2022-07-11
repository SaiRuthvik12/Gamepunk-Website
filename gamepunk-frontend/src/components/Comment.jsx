import React from "react";

function Comment(props){
    return <div class="comment">
        <h5>{props.title}</h5>
        <p>{props.content}</p>
    </div>
}

export default Comment;