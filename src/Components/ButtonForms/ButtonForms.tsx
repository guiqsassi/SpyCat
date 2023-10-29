import Button from "../Button/Button";
import "./ButtonForms.css"

type ButtonFormsProps = {
    name: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void;
}

const ButtonForms = (props: ButtonFormsProps)=>{
    return(
        <>
        <button onClick={props.onClick} className="ButtonForms">{props.name}</button>
        </>
    )
}
export default ButtonForms