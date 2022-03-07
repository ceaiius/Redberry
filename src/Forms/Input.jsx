import React, { useState } from "react";

function Input({placeholder, type, pattern, value, onChange, className, onClick, name}){
    

  
    return(
        <div>
            
                <input name={name} onClick={onClick} className={className}  pattern={pattern} type={type} minLength="2" placeholder={placeholder} onChange={onChange} value={value}/>
                
            
            
        </div>
    )
}

export default Input;