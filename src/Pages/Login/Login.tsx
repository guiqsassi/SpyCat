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
import axios from "axios"
import Api from "../../Api/Api"
const Login = () =>{
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {logged} = useSelector((rootReducer: RootState) => rootReducer.userReducer)

    const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()

        axios.post(`${Api}/login`, {
            email: email,
            password: password

        }).then((res)=>{
            dispatch({
                type: "user/login",
                payload: {
                    logged: true,
                    id: res.data.id,
                    icon: res.data.icon,
                    token: res.data.token
                }
            })
            navigate("/home")
        }).catch((err)=>{
            setError(true)
        })

        
    }

    return(
        <section className="Login">
        <div className="imageBg">

        </div>
        <div className="LoginForm">
        <h2>Entre na sua conta!!</h2>
        <form action="">
            <Input error={error} icon={"https://i.postimg.cc/8CV7NZSr/Vector.png"} placeholder="Email" value={email} setValue={setEmail} name={"Nome"}></Input>
            <Input error={error} password="password" placeholder="Senha" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={password} setValue={setPassword} name={"Senha"}></Input>
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