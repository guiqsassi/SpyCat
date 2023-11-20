import "./Cadastro.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../../Components/Input/Input"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import email from "../../images/email.png"
import user from "../../images/user.png"
import cadeado from "../../images/cadeado.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Api from "../../Api/Api"
const Cadastro = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleClickRegister = async()=>{
      await axios.post("http://localhost:8080/users",{
      id: 0,
      username: name,
      email: email,
      password: password
    }).then((res)=> console.log(res)
        )
        navigate("/home")
    }
    return(
        <section className="Cadastro">
            <div className="imageBg">

            </div>
            <div className="CadForm">
            <h2>Cadastre-se!!</h2>
                <Input icon={"https://i.postimg.cc/8CV7NZSr/Vector.png"} placeholder="Nome" value={name} setValue={setName} name={"Nome"}></Input>
                <Input placeholder="Email" icon={"https://i.postimg.cc/VktJx338/email.png"} value={email} setValue={setEmail} name={"Email"}></Input>
                <Input password="password" placeholder="Senha" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={password} setValue={setPassword} name={"Senha"}></Input>
                <Input placeholder="Senha" password="password" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={password} setValue={setPassword} name={"Senha"}></Input>
                <div className="button">
                    <ButtonForms name="Cadastrar" onClick={handleClickRegister}/>
                    <p>já possui um conta? <Link to={"/Login"}>Clique aqui</Link></p>
                </div>

           
            </div>
        </section>
    )

}
export default Cadastro