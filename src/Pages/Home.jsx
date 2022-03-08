import React from "react";
import "../styles.css";
import {Link} from "react-router-dom"

function Home(){

    const style = {
        color:"white",
        textDecoration : "none"
    }

    return(
        <div className="container">
            <div><h1 className="welcome-h1">Welcome Rocketeer !</h1></div>
            <div><Link style={style} to="/Redberry/personal"><button className="homeButton">Start Questionnaire</button></Link></div>
            <div><Link style={style} to="/Redberry/applications"><a><h2>Submitted Applications</h2></a></Link></div>
            <div><div className="rocketman"></div></div>

           
           

           
        </div>
    )
}

export default Home;