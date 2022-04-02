import React, { useContext} from "react";
import Input from "../Forms/Input";
import PersonalSVG from "../SVGs/personal-svg";
import { FormContext } from "../Forms/FormContext";



function Personal(){

    const text = "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
    const {fName,lName,email,phone,setfName,setlName,setEmail,setPhone} = useContext(FormContext);

    

    
    

    return (
        <div className="personal-container">
            <div className="leftDiv">
                <h1 className="coordinates-h1">Hey, Rocketeer, what are your coordinates?</h1>
                <div className="inputDiv">
                    <form>

                    <Input value={fName} type="text" onChange={(e) => setfName(e.target.value)} required placeholder="First Name"/>
                    <Input value={lName}  type="text"   onChange={(e) => setlName(e.target.value)}  required placeholder="Last Name"/>
                    <Input value={email}  type="email"  onChange={(e) => setEmail(e.target.value)} required placeholder="E Mail"/>
                    <Input value={phone}  onChange={(e) => setPhone(e.target.value)} pattern="[5]{1}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" type="tel" placeholder="+995 5_ _ _ _"/>
                    

                    </form>
                </div> 
                <div>
                     <PersonalSVG />
                </div>
                   
                
              
                    
                          
            </div>
            <div className="rightDiv">
                <h1 className="origins-h1">Redberry Origins</h1>
                <p className="origins-p">{text}</p>
            </div>
        </div>
    )
}

export default Personal;