import NavSlide from "../../Components/NavSlide/NavSlide"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import Select from "../../Components/Select/Select"
import Button from "../../Components/Button/Button"
import filter from "../../images/filter.png"
import PetView from "../../Components/PetView/PetView"
import "./Home.css"
import { UseSelector } from "react-redux/es/hooks/useSelector"
import {useEffect, useState} from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Home = ()=>{

    const [pets, setPets] = useState([{}])
    const navigate = useNavigate()
    
    useEffect(
        ()=>{
            axios.get("http://192.168.15.79:8080/pets").then(res=> setPets(res.data))
        }
    ,[])
    return(
        <section className="Home">
            <NavSlide></NavSlide>
            <div className="top">
                <div className="tittle">
                    <h1>Encontre Pets</h1>
                </div>
                <div className="infoZone">
                    <div className="filterByData">
                    <Select label="Ordenar por data" options={["op1","op2"]} defaultValue="mais recentes"></Select>
                    </div>
                    <div className="newPetButton">
                        <div className="petsCounter">
                            <p>{pets.length} animais</p>
                        </div>
                        <div className="cadNewPet">
                            <button onClick={()=>{
                                navigate("/addPet")
                            }}> Cadastrar novo pet</button>
                        </div>
                    </div>
                </div>
            </div>
            <main className="content">
                <div className="filter">
                    <div className="filterTittle">
                    <img src={filter} alt="" />
                    <h3>Filtros</h3>
                    </div>
                    <div className="filterBanner">
                    <div className="filters">
                    <h5>Tipo de cadastro</h5>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <p>Abandonado</p>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <p>Perdido</p>
                        </li>
                    </ul>

                    <h5>Espécie</h5>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <p>Gato</p>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <p>Cachorro</p>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <p>Outro</p>
                        </li>
                    </ul>
                    <h5>Raça</h5>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <p>Vira-lata</p>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <p>Outro</p>
                        </li>
                    </ul>
                    <h5>Cor</h5>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <p>Vira-lata</p>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <p>Outro</p>
                        </li>
                    </ul>
                    </div>
                
                    </div>
                </div>
                <div className="pets">
                <div className="petsWrap">
                    {pets? pets.map((pet)=>{
                        return(
                            <PetView image={pet.url} pet={pet}></PetView>
                        )
                    })
                    : null}
                </div>
                </div>
            </main>
        </section>
    )
}
export default Home