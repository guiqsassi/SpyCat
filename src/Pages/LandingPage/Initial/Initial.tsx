import "./Initial.css"

import initialImage from "../../../images/ImageInitial.png"
import Button from "../../../Components/Button/Button"
const Initial = () => {
    return(
        <section className="Initial">
            <div className="MarketingText">
            <div className="Textcontent">
                <h1>Resgate um pet, ajude uma vida!!</h1>
                <p>Encontre pets abandonados ou perdidos e compartilhe para que outras pessoas também possam ajuda-los!!!</p>
                <div className="buttons">
                    <button>Cadastre-se</button>
                    <button className="about">Contate-nos</button>
                    
                </div>
            </div>
            </div>
            <div className="catImage">
                <img src={initialImage}/>
            </div>
        </section>
    )
}

export default Initial