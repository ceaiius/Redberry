import React from "react";
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
function App(){
    return(
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
    )
}

export default App;