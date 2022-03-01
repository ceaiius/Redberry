import React, { useState } from "react";
import Input from "./Input";
function SelectArea(props){
    const [skills,setSkills] = useState({
        skill:"",
        experience: ""
    })

    
  function handleChange(event){
    const {name, value} = event.target;
    setSkills(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
}

function submitInput(event){
    props.onAdd(skills);
    event.preventDefault();
    
}

    return(
        <form>
            <select name="skills" onChange={handleChange} >
                <option selected disabled>Skills</option>
                <option>Java</option>
                <option>Kotlin</option>
            </select>
            <Input className="experience-input" placeholder="Experience Duration in Years"  name="experience" onChange={handleChange} />
            <button onClick={submitInput} className="experience-button">Add Programming Language</button>
        </form>
    )
}

export default SelectArea;
