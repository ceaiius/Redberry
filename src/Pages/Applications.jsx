import React from "react";

function Applications(){
    return(
        <div className="appDiv">
            <h1>Submitted Application</h1>
            <div className="whiteDiv">
                <div className="personalDiv">
                    <h2>Personal Information</h2>
                    <div>
                        <h3>First Name</h3>
                        <h4>Eren</h4>
                    </div>
                    <div>
                        <h3>Last Name</h3>
                        <h4>Yaegar</h4>
                    </div>
                    <div>
                        <h3>E Mail</h3>
                        <h4 className="h4padding">eren@wings-of-freedom.ml</h4>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <h4 className="h4padding">+995 591 93 50 80</h4>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Skillset</h2>
                    <div>
                        <h3>PHP</h3>
                        <h4>Years of Experience: 3</h4>
                    </div>
                    <div>
                        <h3>React</h3>
                        <h4>Years of Experience: 9</h4>
                    </div>
                </div>
                <div className="covid-situationDiv">
                
                    <h2>Covid Situation</h2>
                    <div className="preferDiv"><h2 >how would you prefer to work?</h2></div>
                    <div><h3>From Office</h3></div>
                    <div><h3>From Home</h3></div>
                    <div><h3>Hybrid</h3></div>
                    
                </div>
                <div className="insightDiv">
                
                    <h2>Insights</h2>
                    <div className="preferDiv"><h2 >Would you attend Devtalks?</h2></div>
                    <div><h3>Yes</h3></div>
                    <div><h3>No</h3></div>
                   
                    
                </div>
                <div className="covid19Div">
                    <h2>Did you have Covid 19?</h2>
                    <div><h3>Yes</h3></div>
                    <div><h3>No</h3></div>
                </div>
                <div className="speakDiv">
                    <h2>What would you speak?</h2>
                    
                </div>
                <div className="whenCovidDiv">
                    <h2>When did you have covid?</h2>
                    
                </div>
                <div className="tellDiv">
                    <h2>Tell us something special</h2>
                    
                </div>
                <div className="vaccineDiv">
                    <h2>Have you been vaccinated?</h2>

                    <h2>When did you get covid vaccine?</h2>
                    
                </div>
                
            </div>
        </div>
    )
}


export default Applications;