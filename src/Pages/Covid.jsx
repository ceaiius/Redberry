import React from "react";
import {Link} from "react-router-dom"
import CovidSVG from "../SVGs/covid-svg";
import CovidForm from "../Forms/CovidForm";
function Covid(){

    const text = "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. "
    
    return (

        <div className="personal-container">
        <div className="leftDiv">
            <h1 className="covid-h1">Covid Stuff</h1>
            <div >
               <CovidForm/> 
                
            </div> 
            <div>
                <CovidSVG/>
            </div>
        
            
                    
                        
            </div>
        <div className="rightDiv">
            <h1 className="policies-h1">Redberry Covid Policies</h1>
            <p className="policies-p">{text}</p>
        </div>
    </div>
    )
}

export default Covid;