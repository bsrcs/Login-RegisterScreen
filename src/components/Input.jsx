import React from "react";

// catch the props from Login
function Input(props){
    return(
        <div>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;