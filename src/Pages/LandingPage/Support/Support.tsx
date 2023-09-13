import "./Support.css"
import Input from "../../../Components/Input/Input"
import planeGuy from "../../../images/TorresGemeas.png"
import { useState } from "react"
const Support = ()=>{
    const [name, setName] = useState("")

    return(
        <section className="Support">
            <div className="SupportContainer">
                <div className="imagePaper">
                    <h2>Entre em contato</h2>
                    <img src={planeGuy} alt="" />
                </div>
                <div className="Formulario">
                    <form action="">
                        <Input placeholder="nome" value={name} setValue={setName} name={"Nome"}></Input>
                        <Input placeholder="nome" value={name} setValue={setName} name={"Nome"}></Input>
                        <Input textArea={true} placeholder="nome" value={name} setValue={setName} name={"Nome"}></Input>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Support