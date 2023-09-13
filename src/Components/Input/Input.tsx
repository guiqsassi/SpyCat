import "./Input.css"
import React, {SetStateAction, Dispatch } from 'react';

type InputProps = {
    value: string,
    name: String,
    placeholder: string,
    setValue: Dispatch<SetStateAction<string>>;
    textArea?: Boolean;
}

const Input = (props:InputProps )=>{
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        props.setValue(e.target.value)
        console.log(props.value)
    }
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        props.setValue(e.target.value)
        console.log(props.value)
    }

    return(
        <div className="InputContainer">
            <label>{props.name}</label>
            {props.textArea?             
                <textarea value={props.value} onChange={handleChangeTextArea} placeholder={props.placeholder}/>    
:             <input value={props.value} onChange={handleChange} placeholder={props.placeholder}/>    
}
        </div>
    )
}

export default Input;