import "./Nav.css"
import logo from "../../../images/logo.png"
import Button from "../../../Components/Button/Button"
import { Link, NavLink } from "react-router-dom"
const Nav = ()=>{
    return (
        <header className="navOutside">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        Inicio
                    </li>
                    <li>
                        Sobre nós
                    </li>
                    <li>
                        <NavLink className={"navLink"} to={"/login"}>
                        Entre
                        </NavLink>
                    </li>
                    <li>
                        <Link to={"/Cadastro"}>
                            <Button name={"Cadastre-se"}></Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav