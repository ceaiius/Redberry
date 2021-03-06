import React from "react";
import { Link } from "react-router-dom";

function CovidSVG(){
   
    const style = {
        color:"white",
        textDecoration : "none",
        paddingTop:"5px"
    }

    return(
        <div className="iconsDiv">
            <Link style={style} to="/Redberry/technical">  
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9393 15.0607C11.5251 15.6464 12.4749 15.6464 13.0607 15.0607C13.6464 14.4749 13.6464 13.5251 13.0607 12.9393L10.9393 15.0607ZM9 11L7.93934 9.93934C7.35355 10.5251 7.35355 11.4749 7.93934 12.0607L9 11ZM13.0607 9.06066C13.6464 8.47487 13.6464 7.52513 13.0607 6.93934C12.4749 6.35355 11.5251 6.35355 10.9393 6.93934L13.0607 9.06066ZM3.5 11C3.5 6.85786 6.85786 3.5 11 3.5V0.5C5.20101 0.5 0.5 5.20101 0.5 11H3.5ZM11 3.5C15.1421 3.5 18.5 6.85786 18.5 11H21.5C21.5 5.20101 16.799 0.5 11 0.5V3.5ZM18.5 11C18.5 15.1421 15.1421 18.5 11 18.5V21.5C16.799 21.5 21.5 16.799 21.5 11H18.5ZM11 18.5C6.85786 18.5 3.5 15.1421 3.5 11H0.5C0.5 16.799 5.20101 21.5 11 21.5V18.5ZM13.0607 12.9393L10.0607 9.93934L7.93934 12.0607L10.9393 15.0607L13.0607 12.9393ZM10.0607 12.0607L13.0607 9.06066L10.9393 6.93934L7.93934 9.93934L10.0607 12.0607Z" fill="#FE3B1F"/>
                </svg>
            </Link>

            <Link style={style} to="/Redberry/personal">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.5" cy="9.5" r="9.5" fill="#FE3B1F"/> 
                </svg>
            </Link>
                
            <Link style={style} to="/Redberry/technical">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="9.5" fill="#FE3B1F"/> 
                </svg>
            </Link>

            
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="9.5" fill="#FE3B1F"/> 
                </svg>
            <Link style={style} to="/Redberry/about">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.1" cx="9.5" cy="9.5" r="9.5" fill="#FE3B1F"/>
                </svg>
            </Link>
            <Link style={style} to="/Redberry/submit">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.1" cx="9.5" cy="9.5" r="9.5" fill="#FE3B1F"/>
                </svg>
                </Link>
                <Link style={style}  to="/Redberry/about">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0607 6.93934C10.4749 6.35355 9.52513 6.35355 8.93934 6.93934C8.35355 7.52513 8.35355 8.47487 8.93934 9.06066L11.0607 6.93934ZM13 11L14.0607 12.0607C14.6464 11.4749 14.6464 10.5251 14.0607 9.93934L13 11ZM8.93934 12.9393C8.35355 13.5251 8.35355 14.4749 8.93934 15.0607C9.52513 15.6464 10.4749 15.6464 11.0607 15.0607L8.93934 12.9393ZM18.5 11C18.5 15.1421 15.1421 18.5 11 18.5V21.5C16.799 21.5 21.5 16.799 21.5 11H18.5ZM11 18.5C6.85786 18.5 3.5 15.1421 3.5 11H0.5C0.5 16.799 5.20101 21.5 11 21.5V18.5ZM3.5 11C3.5 6.85786 6.85786 3.5 11 3.5V0.5C5.20101 0.5 0.5 5.20101 0.5 11H3.5ZM11 3.5C15.1421 3.5 18.5 6.85786 18.5 11H21.5C21.5 5.20101 16.799 0.5 11 0.5V3.5ZM8.93934 9.06066L11.9393 12.0607L14.0607 9.93934L11.0607 6.93934L8.93934 9.06066ZM11.9393 9.93934L8.93934 12.9393L11.0607 15.0607L14.0607 12.0607L11.9393 9.93934Z" fill="#FE3B1F"/>
                    </svg>
                </Link>
                        </div>
    )
}


export default CovidSVG;