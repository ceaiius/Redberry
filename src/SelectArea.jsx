import React, { useEffect, useState } from "react";
import Input from "./Input";


function SelectArea(props){
    const [skills,setSkills] = useState({
        skill:"",
        experience: ""
    })


    
    const [skill,setSkill] = useState([]);
    
    // fetching the list of skills from the API
    const fetchData = async () => {
        const data = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
        const skills = await data.json();
        setSkill(skills);
        
}

useEffect(()=>{
    fetchData();
   
},[])

    
  function handleChange(event){
    const {name, value} = event.target;
    setSkills(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
}
// functionality of the ADD PROGRAMMING LANGUAGE button
function submitInput(event){
    props.onAdd(skills);
    event.preventDefault();
    
}

    return(
        <form>
            <select name="skills" onChange={handleChange} >
                <option hidden selected>Skills</option>
                {skill.map(skill=>{
                    return <option>{skill.title}</option>
                })}
            </select>
            <Input className="experience-input" placeholder="Experience Duration in Years"  name="experience" onChange={handleChange} />
            <button onClick={submitInput} className="experience-button">Add Programming Language</button>
        </form>
    )
}

export default SelectArea;
