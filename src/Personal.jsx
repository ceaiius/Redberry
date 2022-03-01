import React from "react";
import Input from "./Input";
import {Link} from "react-router-dom"

function Personal(){

    const text = "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
    const style = {
        color:"white",
        textDecoration : "none"
    }
    
    

    return (
        <div className="personal-container">
            <div className="leftDiv">
                <h1 className="coordinates-h1">Hey, Rocketeer, what are your coordinates?</h1>
                <div className="inputDiv">
                    <Input type="text" required placeholder="First Name"/>
                    <Input type="text" required placeholder="Last Name"/>
                    <Input type="email" required placeholder="E Mail"/>
                    <Input pattern="[5]{1}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" type="tel" placeholder="+995 5_ _ _ _"/>
                </div> 
                <div className="iconsDiv">
                      <Link style={style} to="/technical"><i class="fa-solid fa-circle-chevron-right"></i></Link>
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