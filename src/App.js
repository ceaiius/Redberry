import React, { useState } from "react";
import "./styles.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Personal from "./Pages/Personal";
import Home from "./Pages/Home";
import Tech from "./Pages/Technical";
import Covid from "./Pages/Covid";
import About from "./Pages/About";
import Submit from "./Pages/Submit";
import Thanks from "./Pages/Thanks";
import Applications from "./Pages/Applications";
import {FormContext} from "./Forms/FormContext";


function App(){
    const [talk, setTalk] = useState("");
    const [special, setSpecial] = useState("")
    const [attend, setAttend] = useState("")
    const [lastVaccine, setLastVaccine] = useState("")
    const [vaccine, setVaccine] = useState("")
    const [date,setDate] = useState("")
    const [covid,setCovid] = useState("")
    const [work, setWork] = useState("")
    const [experience,setExperience] = useState("");
    const [skill,setSkill] = useState("")
    const [skills,setSkills] = useState([]);
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return(
        <FormContext.Provider value={{
            fName,lName,email,phone,setfName,setlName,setEmail,setPhone, skills, setSkills,experience,setExperience
            ,skill,setSkill, work, setWork, covid, setCovid, date, setDate, vaccine, setVaccine, lastVaccine,setLastVaccine,
            attend,setAttend, talk, setTalk, special, setSpecial}}>

        <Router>
                <Routes>
                    <Route path="/Redberry" element={<Home/>}/>
                    <Route path="/Redberry/personal" element={<Personal/>}/>
                    <Route path="/Redberry/technical" element={<Tech/>}/>
                    <Route path="/Redberry/covid" element={<Covid/>}/>
                    <Route path="/Redberry/about" element={<About/>}/>
                    <Route path="/Redberry/submit" element={<Submit/>}/>
                    <Route path="/Redberry/thanks" element={<Thanks/>}/>
                    <Route path="/Redberry/applications" element={<Applications/>}/>
                </Routes>
        </Router>
        </FormContext.Provider>
    )
}

export default App;