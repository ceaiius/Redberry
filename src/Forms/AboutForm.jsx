import React from "react";

function AboutForm(){
    return(
        <div className="covidDiv covidDivSecond">
            <form className="radioForm">
            <h2>Would you attend Devtalks and maybe also organize your own?</h2>
            <div className="radioDiv">
                <div>
                    <input className="radioInput" type="radio" name="work" id="yes" />
                    <label>Yes</label>
                </div>
                <div>
                    <input className="radioInput" type="radio" name="work" id="no" />
                    <label>No</label>
                </div>
                
            </div>
            <div className="textAreaDiv">
                
                <div>
                    <h2>What would you speak about at Devtalk?</h2>
                    <input placeholder="I would..." type="text" className="textAreaInput"/>
                </div>
                
                <div className="h2InputDiv">
                    <h2>Tell us something special</h2>
                    <input placeholder="I..." type="text" className="textAreaInput2"/>
                </div>
            </div>
           
            </form>
        </div>
    )
}

export default AboutForm;