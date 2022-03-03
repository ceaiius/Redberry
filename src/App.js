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
function App(){
    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="personal" element={<Personal/>}/>
                    <Route path="technical" element={<Tech/>}/>
                    <Route path="covid" element={<Covid/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="submit" element={<Submit/>}/>
                    <Route path="thanks" element={<Thanks/>}/>
                </Routes>
        </Router>
    )
}

export default App;