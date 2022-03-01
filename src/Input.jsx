import React from "react";

function Input({placeholder, type, pattern, handleSubmit, value, onChange}){
    return(
        <div>
            <form>
                <input onSubmit={handleSubmit} pattern={pattern} type={type} minLength="2" placeholder={placeholder} onChange={onChange} value={value}/>
            
            </form>
            
        </div>
    )
}

export default Input;