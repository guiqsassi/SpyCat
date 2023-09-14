import Button from "../../Pages/LandingPage/Button/Button";
import "./ButtonForms.css"

type ButtonFormsProps = {
    name: string,
    onClick?: ()=> void;
}

const ButtonForms = (props: ButtonFormsProps)=>{
    return(
        <>
        <button onClick={props.onClick} className="ButtonForms">{props.name}</button>
        </>
    )
}
export default ButtonForms