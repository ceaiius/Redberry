import React, { useContext } from "react";
import { FormContext } from "./FormContext";
function AboutForm(){

    const {attend, setAttend} = useContext(FormContext);
    const {talk, setTalk} = useContext(FormContext);
    const {special, setSpecial} = useContext(FormContext);
    return(
        <div className="covidDiv covidDivSecond">
            <form className="radioForm">
            <h2>Would you attend Devtalks and maybe also organize your own?</h2>
            <div className="radioDiv">
                <div>
                    <input onChange={(e)=>setAttend(e.target.value === "true")} value={true} className="radioInput" type="radio" name="work" id="yes" />
                    <label>Yes</label>
                </div>
                <div>
                    <input onChange={(e)=>setAttend(e.target.value === "true")} value={false} className="radioInput" type="radio" name="work" id="no" />
                    <label>No</label>
                </div>
                
            </div>
            <div className="textAreaDiv">
                
                <div>
                    <h2>What would you speak about at Devtalk?</h2>
                    <input onChange={(e)=>setTalk(e.target.value)} placeholder="I would..." type="text" className="textAreaInput"/>
                </div>
                
                <div className="h2InputDiv">
                    <h2>Tell us something special</h2>
                    <input onChange={(e)=>setSpecial(e.target.value)} placeholder="I..." type="text" className="textAreaInput2"/>
                </div>
            </div>
           
            </form>
        </div>
    )
}

export default AboutForm;