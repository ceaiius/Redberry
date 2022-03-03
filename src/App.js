import React from "react";
import "./styles.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Personal from "./Personal";
import Home from "./Home";
import Tech from "./Technical";
import Covid from "./Covid";
import About from "./About";
function App(){
    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="personal" element={<Personal/>}/>
                    <Route path="technical" element={<Tech/>}/>
                    <Route path="covid" element={<Covid/>}/>
                    <Route path="about" element={<About/>}/>
                </Routes>
        </Router>
    )
}

export default App;