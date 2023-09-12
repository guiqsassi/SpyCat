import "./Nav.css"
import logo from "../../../images/logo.png"
import Button from "../Button/Button"
const Nav = ()=>{
    return (
        <header>
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
                        Entre
                    </li>
                    <li>
                        <Button name={"Cadastre-se"}></Button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav