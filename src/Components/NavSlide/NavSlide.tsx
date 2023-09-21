import { useState } from "react"
import "./NavSlide.css"
import { BiMenu, BiUserCircle, BiMap} from "react-icons/bi";
import Logo from "../../images/logo.png"
import home from "../../images/home.png"
import fav from "../../images/fav.png"
import suporte from "../../images/suporte.png"
import logOut from "../../images/logOut.png"
import config from "../../images/config.png"
import add from "../../images/add.png"
import { useNavigate } from "react-router-dom";

type NavProps = {
    image?: string,
    local?: string
}

const NavSlide = (props:NavProps)=>{
    const navigate = useNavigate()
    const [slideView, setSlideView] = useState("-50vh")

    const handleClick = ()=>{
        slideView == "-50vh"?
        setSlideView("0vh"):
        setSlideView("-50vh")
    }
    const handleClickLogo = ()=>{
        navigate("/home")
    }
    return (
        <div className="navContainer">
        <header className="navInside">
        <div className="navOptions">
        <BiMenu className="burguer" size={45} color="#3D1723" onClick={handleClick}></BiMenu>
        <img src={Logo} className="logoImg" onClick={handleClickLogo}/>
        </div>
        <div className="userOptions">
        <div className="localization">
        <BiMap size={40} color="#F98AAE"></BiMap>
        <p>Florianópolis - Sc</p>
        </div>
        <BiUserCircle size={45} color="#F98AAE"></BiUserCircle>
        </div>
        </header>
        <div className="slide" style={{transform:`translateX(${slideView})` }}>
            <nav>
                <ul>
                    <li>
                        <img src={home}/>
                        <p>Home</p>
                    </li>
                    <li>
                        <img src={fav}/>
                        <p>Salvos</p>
                    </li>
                    <li>
                        <img src={add}/>
                        <p>Adcionar Pet</p>
                    </li>
                    <li>
                        <img src={suporte}/>
                        <p>Suporte</p>
                    </li>
                </ul>
            </nav>
            <div className="configure">
                <hr />
                <ul>
                    <li>
                    <img src={config}/>
                    <p>Configuraçoes</p>
                    </li>
                    <li>
                    <img src={logOut}/>
                    <p>LogOut</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    
        
    )
}

export default NavSlide