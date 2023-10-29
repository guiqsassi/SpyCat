import "./Login.css"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from "../../Components/Input/Input"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import { useDispatch } from "react-redux"
import rootReducer from "../../Redux/rootReducer"
import { RootState } from "../../Redux/rootReducer"
import { useSelector } from "react-redux"
import { MouseEvent } from "react"
const Login = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {logged} = useSelector((rootReducer: RootState) => rootReducer.userReducer)

    const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        dispatch({
            type: "user/login",
            payload: {logged: true}
        })
        console.log(logged)
    }

    console.log(logged)
    return(
        <section className="Login">
        <div className="imageBg">

        </div>
        <div className="LoginForm">
        <h2>Entre na sua conta!!</h2>
        <form action="">
            <Input icon={"https://i.postimg.cc/8CV7NZSr/Vector.png"} placeholder="Nome" value={name} setValue={setName} name={"Nome"}></Input>
            <Input password="password" placeholder="Senha" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={message} setValue={setMessage} name={"Senha"}></Input>
            <div className="button">
                <ButtonForms name="Logar" onClick={handleClick}/>
                <p>Não possui um conta? <Link to={"/Cadastro"}>Clique aqui</Link></p>
            </div>

        </form>
       
        </div>
    </section>
    )
}
export default Login