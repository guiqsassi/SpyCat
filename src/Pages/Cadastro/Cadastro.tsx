import "./Cadastro.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../../Components/Input/Input"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import email from "../../images/email.png"
import user from "../../images/user.png"
import cadeado from "../../images/cadeado.png"
const Cadastro = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return(
        <section className="Cadastro">
            <div className="imageBg">

            </div>
            <div className="CadForm">
            <h2>Cadastre-se!!</h2>
            <form action="">
                <Input icon={"https://i.postimg.cc/8CV7NZSr/Vector.png"} placeholder="Nome" value={name} setValue={setName} name={"Nome"}></Input>
                <Input placeholder="Email" icon={"https://i.postimg.cc/VktJx338/email.png"} value={email} setValue={setEmail} name={"Email"}></Input>
                <Input password="password" placeholder="Senha" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={message} setValue={setMessage} name={"Senha"}></Input>
                <Input placeholder="Senha" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={message} setValue={setMessage} name={"Senha"}></Input>
                <div className="button">
                    <ButtonForms name="Cadastrar"/>
                    <p>já possui um conta? <Link to={"/Login"}>Clique aqui</Link></p>
                </div>

            </form>
           
            </div>
        </section>
    )

}
export default Cadastro