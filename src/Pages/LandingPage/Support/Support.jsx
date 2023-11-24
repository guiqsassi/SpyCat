import "./Support.css"
import Input from "../../../Components/Input/Input"
import ButtonForms from "../../../Components/ButtonForms/ButtonForms"
import planeGuy from "../../../images/AirplaneGuy.png"
import { useState, useRef } from "react"
import NotificationError from "../../../Components/Notification/NotificationError"
import NotificationOkay from "../../../Components/Notification/NotificationOkay"
import emailjs from '@emailjs/browser';

const Support = ()=>{
    const [notification, setNotification] = useState(false)
    const [notificationError, setNotificationError] = useState(false)
    const [errorText, setErrorText] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      if(name !== "" && email!== ""&& message !== ""){
      emailjs.sendForm('service_1ivi5yg', 'template_r3qrv95', form.current, 'Ho6N_yBd1QwlMUZ7K')
        .then((result) => {
            console.log(result.text);
            setNotification(true)
            setTimeout(()=>{setNotification(true)}, 7000);   
        }, (error) => {
            console.log(error.text);
            setErrorText("Houve algum erro inesperado")
            setNotificationError(false)
            setTimeout(()=>{setNotificationError(false)}, 7000);   
        });
    }    else{
        setErrorText("Escreva todos os dados no formulário")
        setNotificationError("on")
        
        setTimeout(()=>{setNotificationError(false)}, 7000);   

    }};
    return(
        <section className="Support">
            <NotificationError text={errorText} state={notificationError}></NotificationError>
            <NotificationOkay state={notification}></NotificationOkay>
            <div className="SupportContainer">
                <div className="imagePaper">
                    <h2>Entre em contato</h2>
                    <img src={planeGuy} alt="" />
                </div>
                <div className="Formulario">
                <form action="" ref={form}>
                    
                    <Input placeholder="Nome" formName="from_name" value={name} setValue={setName} name={"Nome"}></Input>
                    <Input placeholder="Email" formName="from_email" value={email} setValue={setEmail} name={"Email"}></Input>
                    <Input textArea={true} formName="message" placeholder="Mensagem" value={message} setValue={setMessage} name={"Mensagem"}></Input>
                    <ButtonForms onClick={sendEmail} name={"Enviar"}></ButtonForms>
                </form>
                </div>
            </div>
        </section>
    )
}
export default Support