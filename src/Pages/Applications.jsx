import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Applications(){

    const [names,setNames] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        language: "",
        experience: "",
        work: "",
        attend:"",
        covid: "",
        date: "",
        topic: "",
        special: "",
        vaccine: "",
        vaccinated: ""
    })

    const values =  ()  => {

        

        fetch(`https://bootcamp-2022.devtest.ge/api/applications?token=4c6558a2-3c74-4128-af54-95722a5a51c3`)
        .then(response=>response.json()).then(
            data=>{
                const lastArray = data.length - 1;
                setNames({
                    firstName: data[lastArray].first_name,
                    lastName: data[lastArray].last_name,
                    email: data[lastArray].email,
                    phone: data[lastArray].phone,
                    language: data[lastArray].skills[0].id,
                    experience: data[lastArray].skills[0].experience,
                    work : data[lastArray].work_preference,
                    attend: data[lastArray].will_organize_devtalk,
                    covid: data[lastArray].had_covid,
                    date: data[lastArray].had_covid_at,
                    topic: data[lastArray].devtalk_topic,
                    special: data[lastArray].something_special,
                    vaccine: data[lastArray].vaccinated,
                    vaccinated: data[lastArray].vaccinated_at
                })
            }
        )
    }

    useEffect(()=>{
        values();
    },[])
    const style = {
        color:"white",
        textDecoration : "none"
    }
    return(
        <div className="appDiv">
            <h1>Submitted Application</h1>
            <div className="whiteDiv">
                <div className="personalDiv">
                    <h2>Personal Information</h2>
                    <div>
                        <h3>First Name</h3>
                        <h4>{names.firstName}</h4>
                    </div>
                    <div>
                        <h3>Last Name</h3>
                        <h4>{names.lastName}</h4>
                    </div>
                    <div>
                        <h3>E Mail</h3>
                        <h4 className="h4padding">{names.email}</h4>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <h4 className="h4padding">{names.phone}</h4>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Skillset</h2>
                    <div>
                        {names.language === 7 && <h3>Angular</h3>}
                        {names.language === 6 && <h3>Svelte</h3>}
                        {names.language === 5 && <h3>Vue.JS</h3>}
                        {names.language === 4 && <h3>React.JS</h3>}
                        {names.language === 3 && <h3>Laravel</h3>}
                        {names.language === 2 && <h3>PHP</h3>}
                        {names.language === 1 && <h3>CSS</h3>}
                        {names.language === 0 && <h3>HTML</h3>}
                        <h4>Years of experience : {names.experience}</h4>
                    </div>
                    
                </div>
                <div className="covid-situationDiv">
                
                    <h2>Covid Situation</h2>
                    <div className="preferDiv"><h2 >how would you prefer to work?</h2></div>
                    {names.work === "from_home" && <h3>From Home</h3>}
                    {names.work === "hybrid" && <h3>Hybrid</h3>}
                    {names.work === "from_office" && <h3>From Sairme Office</h3>}
                    
                    
                </div>
                <div className="insightDiv">
                
                    <h2>Insights</h2>
                    <div className="preferDiv"><h2 >Would you attend Devtalks?</h2></div>
                    {names.attend === false ? <h3>No</h3> : <h3>Yes</h3>}
                   
                    
                </div>
                <div className="covid19Div">
                    <h2>Did you have Covid 19?</h2>
                    {names.covid === false ? <h3>No</h3> : <h3>Yes</h3>}
                </div>
                <div className="speakDiv">
                    <h2>What would you speak?</h2>
                    <h3>{names.topic}</h3>
                </div>
                <div className="whenCovidDiv">
                    <h2>When did you have covid?</h2>
                    <h3>{names.date}</h3>
                </div>
                <div className="tellDiv">
                    <h2>Tell us something special</h2>
                    <h3>{names.special}</h3>
                </div>
                <div className="vaccineDiv">
                    <h2>Have you been vaccinated?</h2>
                    {names.vaccine === true ? <h3>Yes</h3> : <h3>No</h3>}
                    <h2>When did you get covid vaccine?</h2>
                    <h3>{names.vaccinated}</h3>
                </div>
                
            </div>
            <div>
                <div ><a><Link style={style} to="/Redberry"><h2 className="backDiv">go back</h2></Link></a></div>
            </div>
        </div>
    )
}


export default Applications;