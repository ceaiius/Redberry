import React, { useState } from "react";
import {Link} from "react-router-dom"
import SelectArea from "./SelectArea";
import Output from "./Output";
function Tech(){

    const text = "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."
    const style = {
        color:"white",
        textDecoration : "none"
    }

    const [skills,setSkills] = useState([]);

    function addSkills(newSkill){
        setSkills(prevSkills => {
            return [...prevSkills, newSkill];
        })
    }

    function deleteSkill(id){
        setSkills(prevSkills => {
            return prevSkills.filter((skillItem,index)=>{
                return index!==id
            })
        })
    }

   
    return(
        <div className="personal-container">
        <div className="leftDiv">
            <h1 className="tech-h1">Tell us about your skills</h1>
            <div className="inputDiv">
                <SelectArea onAdd={addSkills}/>
                {skills.map((skillItem,index)=>{
                    return  <div className="outputDiv"><Output
                        key={index}
                        id={index}
                        skills={skillItem.skills}
                        experience={skillItem.experience}
                        onDelete={deleteSkill}
                    />
                    </div>
                })}
            </div> 
           
            <div className="iconsDiv">
                  <Link style={style} to="/technical"><i class="fa-solid fa-circle-chevron-right"></i></Link>
            </div>
          
                
                      
        </div>
        <div className="rightDiv">
            <h1 className="tech-h1">A bit about our battles</h1>
            <p className="tech-p">{text}</p>
        </div>
    </div>
    )
}

export default Tech;