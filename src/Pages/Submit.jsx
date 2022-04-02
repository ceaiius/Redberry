import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../Forms/FormContext";

function Submit(){

    const {fName,lName,email,phone,skill,experience, work, covid, vaccine, date, lastVaccine,attend, special, talk} = useContext(FormContext);

    const style = {
        color:"white",
        textDecoration : "none"
    }

    const onSubmit = (e) => {
     
        console.log("submitted");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "token": "4c6558a2-3c74-4128-af54-95722a5a51c3",
                "first_name": fName,
                "last_name": lName,
                "email": email,
                "phone": phone,
                "skills": [
                    {
                    "id": skill,
                    "experience":experience
                    }
                ],
                "work_preference": work,
                "had_covid": covid,
                "had_covid_at": date,
                "vaccinated": vaccine,
                "vaccinated_at": lastVaccine,
                "will_organize_devtalk": attend,
                "devtalk_topic": talk,
                "something_special": special
             })
        };
        fetch('https://bootcamp-2022.devtest.ge/api/application', requestOptions)
            
    }

    return (
        <div className="submitDiv">
            
            <Link style={style} to="/Redberry/thanks"><button onClick={onSubmit} className="submitButton">Submit</button></Link>
            <div><a><Link style={style} to="/Redberry/about"><h2>go back</h2></Link></a></div>
        </div>
    )
}

export default Submit;