import "./Suporte.css"
import Input from "../../Components/Input/Input"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import planeGuy from "../../images/TorresGemeas.png"
import NavSlide from "../../Components/NavSlide/NavSlide"
import { useState } from "react"
const Suporte = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <>
                <NavSlide></NavSlide>

                <section className="Suporte">
        <div className="SupportContainer">
            <div className="imagePaper">
                <h2>Entre em contato</h2>
                <img src={planeGuy} alt="" />
            </div>
            <div className="Formulario">
                <form action="">
                    
                    <Input placeholder="Nome" value={name} setValue={setName} name={"Nome"}></Input>
                    <Input placeholder="Email" value={email} setValue={setEmail} name={"Email"}></Input>
                    <Input textArea={true} placeholder="Mensagem" value={message} setValue={setMessage} name={"Mensagem"}></Input>
                    <ButtonForms name={"Enviar"}></ButtonForms>
                </form>
            </div>
        </div>
    </section>
        </>

     );
}
 
export default Suporte;