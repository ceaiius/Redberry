import { Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
function Output(props){

    // button that deletes the submitted input
   const {setExperience,setSkill} = useContext(FormContext);
    function handleClick(){ 
        props.onDelete(props.id);
    }

    useEffect(()=>{
        setExperience(props.experience)
        
        
    },[])
    return(
        <div className="card">
            <div className="card-container">
                <h4>{props.skills}</h4>
                {props.skills === "HTML" && setSkill(0) }
                {props.skills === "CSS" && setSkill(1)}
                {props.skills === "PHP" && setSkill(2)}
                {props.skills === "Laravel" && setSkill(3)}
                {props.skills === "React.JS" && setSkill(4)}
                {props.skills === "Vue.JS" && setSkill(5)}
                {props.skills === "Svelte" && setSkill(6)}
                {props.skills === "Angular" && setSkill(7)}
                <p >Years of Experience: {props.experience}</p>
                <i onClick={handleClick} class="fa-solid fa-circle-minus"></i>
                
                
            </div>
        </div>
    )
}

export default Output;