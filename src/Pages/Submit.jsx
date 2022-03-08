import React from "react";
import { Link } from "react-router-dom";
import Personal from "./Personal";

function Submit(){
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
                "token": "76977183-c0e1-4f49-b51d-34e590260b10",
                "first_name": "gela",
                "last_name": "gelashvili",
                "email": "gelashvili@gela.ge",
                "phone": "+995591933382",
                "skills": [
                    {
                    "id": 1,
                    "experience": 3
                    }
                ],
                "work_preference": "from_home",
                "had_covid": true,
                "had_covid_at": "2022-02-23",
                "vaccinated": true,
                "vaccinated_at": "2022-02-23",
                "will_organize_devtalk": true,
                "devtalk_topic": "I would ...",
                "something_special": "I am special!"
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