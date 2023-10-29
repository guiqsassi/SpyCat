import { type } from "os"
import seta from "../../images/seta.png"
import "./PetView.css"
import { url } from "inspector"
import { useNavigate } from "react-router-dom"
type propsPetView={
    image: string
}
const PetView = (props:propsPetView)=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/pets")
    }
    return(
        <div className="petContainer" onClick={handleClick} >
            <div style={{backgroundImage: `url(${props.image})`}} className="petImage">
            </div>
            <div className="viewMore">
                <p>Me ajude</p>
                <img src={seta} alt="" />
            </div>
        </div>
    )
}

export default PetView