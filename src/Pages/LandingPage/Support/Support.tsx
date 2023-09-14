import "./Support.css"
import Input from "../../../Components/Input/Input"
import planeGuy from "../../../images/TorresGemeas.png"
import { useState } from "react"
const Support = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return(
        <section className="Support">
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
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Support