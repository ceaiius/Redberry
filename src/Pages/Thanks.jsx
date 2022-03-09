import React from "react";

function Thanks(){
    setTimeout(()=>{
        window.location.replace("/Redberry/")
    }, 3000)
    return(
        <div className="thanksDiv">
            <h1>Thanks for Joining 😊</h1>
        </div>
    )
}


export default Thanks;