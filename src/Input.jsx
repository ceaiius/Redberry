import React from "react";

function Input({placeholder, type, pattern, handleSubmit, value, onChange, className, onClick, name}){
    return(
        <div>
            <form>
                <input name={name} onClick={onClick} className={className} onSubmit={handleSubmit} pattern={pattern} type={type} minLength="2" placeholder={placeholder} onChange={onChange} value={value}/>
            
            </form>
            
        </div>
    )
}

export default Input;