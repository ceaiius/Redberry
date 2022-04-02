import { Form } from "formik";
import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";


function CovidForm(){
    function onFocus(e){
        e.currentTarget.type = "date"
    }
    function onBlur(e){
        e.currentTarget.type="text"
    }
    const {lastVaccine, setLastVaccine} = useContext(FormContext);
    const {vaccine,setVaccine} = useContext(FormContext);
    const {work,setWork} = useContext(FormContext);
    const {covid, setCovid} = useContext(FormContext)
    const {date, setDate} = useContext(FormContext)
    return(
        <div className="covidDiv">
            <form className="radioForm">
            <h2>how would you prefer to work?</h2>
            <div className="radioDiv">
                <div>
                    <input onChange={(e)=>setWork(e.target.value)} value="from_office" className="radioInput" type="radio" name="work" id="office" />
                    <label>From Sairme Office</label>
                </div>
                <div>
                    <input onChange={(e)=>setWork(e.target.value)} value="from_home" className="radioInput" type="radio" name="work" id="home" />
                    <label>From Home</label>
                </div>
                <div>
                    <input onChange={(e)=>setWork(e.target.value)} value="hybrid" className="radioInput" type="radio" name="work" id="hybrid" />
                    <label>Hybrid</label>
                </div>
                <h2>Did you contact covid 19? :(</h2>
                <div>
                    <input onChange={(e)=>setCovid(e.target.value === "true")} value={true} className="radioInput" type="radio" name="covid" id="yes" />
                    <label>Yes</label> 
                </div>
                <div>
                    <input onChange={(e)=>setCovid(e.target.value === "false")} value={false} className="radioInput" type="radio" name="covid" id="no" />
                    <label>No</label> 
                    
                </div>
                
            </div>
            <div className="dateForm">
                <h2>When?</h2>
                <div>
                    <input onChange={(e)=>setDate(e.target.value)} className="dateInput" type="text" placeholder="Date" onFocus={onFocus} onBlur={onBlur}/>
                </div>
                
            </div>     
            <div className="radioDiv radioDivSecond">
            <h2>Have you been vaccinated?</h2>
                    <div>
                        <input onChange={(e)=>setVaccine(e.target.value === "true")} value={true} className="radioInput" type="radio" name="vacine" id="yes"/>
                        <label>Yes</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setVaccine(e.target.value === "true")} value={true} className="radioInput" type="radio" name="vacine" id="no"/>
                        <label>No</label>
                    </div>
            </div>
            <div className="dateForm">
                <h2>When did you get your last vaccine?</h2>
                <div>
                    <input onChange={(e)=>setLastVaccine(e.target.value)} className="dateInput" type="text" placeholder="Date" onFocus={onFocus} onBlur={onBlur}/>
                </div>
            </div>   
            </form>
        </div>
    )
}

export default CovidForm;