import React from "react";
import AboutForm from "../Forms/AboutForm";
import AboutSVG from "../SVGs/about-svg";
function About(){

    const text = "We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!"
    
    return (

        <div className="personal-container">
        <div className="leftDiv">
            <h1 className="covid-h1">What about you?</h1>
            <div >
               <AboutForm/>
                
            </div> 
            <div>
                <AboutSVG/>
            </div>
        
            
                    
                        
            </div>
        <div className="rightDiv">
            <h1 className="policies-h1">Redberrian Insights</h1>
            <p className="policies-p">{text}</p>
        </div>
    </div>
    )
}

export default About;