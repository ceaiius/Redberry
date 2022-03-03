import React from "react";
import { Link } from "react-router-dom";

function Submit(){
    const style = {
        color:"white",
        textDecoration : "none"
    }
    return (
        <div className="submitDiv">
            <Link style={style} to="/thanks"><button className="submitButton">Submit</button></Link>
            <div><a><Link style={style} to="/about"><h2>go back</h2></Link></a></div>
        </div>
    )
}

export default Submit;