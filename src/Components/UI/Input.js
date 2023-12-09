import React from "react";
import '../UI/Input.css';

function Input({ label, id, ...props }) {
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} required {...props}></input>
        </div>
    );
}

export default Input;
