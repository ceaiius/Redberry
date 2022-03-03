import React from "react";



function CovidForm(){
    function onFocus(e){
        e.currentTarget.type = "date"
    }
    function onBlur(e){
        e.currentTarget.type="text"
    }


    return(
        <div className="covidDiv">
            <form className="radioForm">
            <h2>how would you prefer to work?</h2>
            <div className="radioDiv">
                <div>
                    <input className="radioInput" type="radio" name="work" id="office" />
                    <label>From Sairme Office</label>
                </div>
                <div>
                    <input className="radioInput" type="radio" name="work" id="home" />
                    <label>From Home</label>
                </div>
                <div>
                    <input className="radioInput" type="radio" name="work" id="hybrid" />
                    <label>Hybrid</label>
                </div>
                <h2>Did you contact covid 19? :(</h2>
                <div>
                    <input className="radioInput" type="radio" name="covid" id="yes" />
                    <label>Yes</label> 
                </div>
                <div>
                    <input className="radioInput" type="radio" name="covid" id="no" />
                    <label>No</label> 
                </div>
            </div>
            <div className="dateForm">
                <h2>When?</h2>
                <div>
                    <input className="dateInput" type="text" placeholder="Date" onFocus={onFocus} onBlur={onBlur}/>
                </div>
            </div>     
            <div className="radioDiv radioDivSecond">
            <h2>Have you been vaccinated?</h2>
                    <div>
                        <input className="radioInput" type="radio" name="vacine" id="yes"/>
                        <label>Yes</label>
                    </div>
                    <div>
                        <input className="radioInput" type="radio" name="vacine" id="no"/>
                        <label>No</label>
                    </div>
            </div>
            <div className="dateForm">
                <h2>When did you get your last vaccine?</h2>
                <div>
                    <input className="dateInput" type="text" placeholder="Date" onFocus={onFocus} onBlur={onBlur}/>
                </div>
            </div>   
            </form>
        </div>
    )
}

export default CovidForm;