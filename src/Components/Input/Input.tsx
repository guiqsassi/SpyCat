import "./Input.css"
import React, {SetStateAction, Dispatch, useState, useEffect } from 'react';
import passwordOpen from "../../images/password.png"
import passwordClosed from "../../images/passwordClosed.png"

type InputProps = {
    value: string,
    name: String,
    placeholder: string,
    setValue: Dispatch<SetStateAction<string>>;
    icon?: string;
    textArea?: Boolean;
    password?: string;
}

const Input = (props:InputProps )=>{

    const[view, setView] = useState(false)
    useEffect(
    ()=>{
        if(props.password){
            setView(true)
        }
        else{
            setView(false)
        }
    }  
    ,[])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        props.setValue(e.target.value)
        console.log(props.value)
    }
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        props.setValue(e.target.value)
        console.log(props.value)
    }

    return(
        <div className="campoInput">
            <label>{props.name}</label>
        {props.textArea? <div className="TextContaier">
        <textarea value={props.value} onChange={handleChangeTextArea} placeholder={props.placeholder}/>   
        </div>:
          <div className="inputContainer">
         {props.icon? <img className="iconInput" src={props.icon}/>:null}
         <input type={view? "password" : "text"} value={props.value} onChange={handleChange} placeholder={props.placeholder}/>   
         {props.password? <img className="passwordInput" onClick={()=>{ view? setView(false): setView(true)}} src={view? passwordClosed: passwordOpen}/> : null}

        </div>
        
    }
          
    
        </div>
    )
}

export default Input;