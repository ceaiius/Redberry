import React from "react";
import "./styles.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Personal from "./Personal";
import Home from "./Home";
import Tech from "./Technical";

function App(){
    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="personal" element={<Personal/>}/>
                    <Route path="technical" element={<Tech/>}/>
                </Routes>
        </Router>
    )
}

export default App;