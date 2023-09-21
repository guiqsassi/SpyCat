import NavSlide from "../../Components/NavSlide/NavSlide"
import ButtonForms from "../../Components/ButtonForms/ButtonForms"
import Select from "../../Components/Select/Select"
import Button from "../../Components/Button/Button"
import filter from "../../images/filter.png"
import PetView from "../../Components/PetView/PetView"
import "./Home.css"
import {useEffect, useState} from 'react';
import axios from "axios"

const Home = ()=>{

    const [pets, setPets] = useState([{}])
    useEffect(
        ()=>{
            axios.get("https://api.thecatapi.com/v1/images/search?limit=10").then(res=> setPets(res.data))
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
                            <button>Cadastrar novo pet</button>
                        </div>
                    </div>
                </div>
            </div>
            <main>
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
                            <PetView image={pet.url}></PetView>
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