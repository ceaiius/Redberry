import React from "react";

function Output(props){

    // button that deletes the submitted input
    function handleClick(){
        props.onDelete(props.id);
    }

    return(
        <div className="card">
            <div className="card-container">
                <h4>{props.skills}</h4>
                <p>Years of Experience: {props.experience}</p>
                <i onClick={handleClick} class="fa-solid fa-circle-minus"></i>
            </div>
        </div>
    )
}

export default Output;