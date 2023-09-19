import NavSlide from "../../Components/NavSlide/NavSlide"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import "./Home.css"
const Home = ()=>{
    return(
        <section className="Home">
            <NavSlide></NavSlide>
            <div className="a">
                <ButtonForms name="CARALHO"></ButtonForms>
            </div>
        </section>
    )
}
export default Home