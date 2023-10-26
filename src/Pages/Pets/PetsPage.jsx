import "./Pets.css"
import NavSlide from "../../Components/NavSlide/NavSlide"
import {useEffect, useState, useCallback, useMemo, useRef} from 'react';
import fav from "../../images/fav.png"
import Input from "../../Components/Input/Input";
import ButtonForms from "../../Components/ButtonForms/ButtonForms";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet"
import { useSelector } from "react-redux";
import axios from "axios";
import petReducer from "../../Redux/Pet/PetReducer";

const PetsPage = ()=>{
    const arrayImageCat = ["https://cdn.jwplayer.com/v2/media/OJGSRhSM/poster.jpg?width=720", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/9749fcd8-168c-4b1b-979c-f162c491b7c2/article-the-daily-activities-of-your-cat.jpg"]
    const [bigImage, setBigImage] = useState(arrayImageCat[0])
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [position, setPosition] = useState([-27.548258, -48.498994])
    const [markerPosition, setMarkerPosition] = useState(null)
    const pet = useSelector(state=> state.petReducer)
    const marker = [pet.pet.lat, pet.pet.lng]
    console.log(pet);
    const markerIcon = new L.Icon({
        iconUrl: require("../../images/locator.png"),
        iconSize: [30, 30],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
      });



    return(
        <section className="petsSection">
        
            <NavSlide></NavSlide>
            <div className="petInfo">
                <div className="imageSection">
                    <div className="images">
                    <div className="bigImage">
                        <img src={pet.pet.url} alt="" />
                    </div>
                    <div className="imageCollunm">
                    {arrayImageCat? arrayImageCat.map((imag)=>{
                        return(
                            <img src={imag} className="imgCollunmSon" onClick={()=>{setBigImage(imag)}} alt="" />
                        )
                    }): null}

                    </div>
                    
                    
                   </div>
                   
                   <div className="petData">
                        <div className="cadBy">
                            <p>Cadastrado por: User</p>
                        </div>
                        <div className="favoritar">
                            <img src={fav}  />
                        </div>
                        
                    </div>
                    <div className="map">
                    <MapContainer id="map" dragging={true} style={{maxHeight: "300px", maxWidth: "400px", zIndex:0}} center={marker}  zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={marker} icon={markerIcon}>
                    <Popup>
                        {pet.pet.city}
                    </Popup>
                </Marker>

                </MapContainer>
                    </div>
                </div>
                <div className="petAbout">
                    <div className="infoBanner">
                        <div className="bannerCotent">
                        <label>Descrição</label>
                        <div className="campoTextoDescricao"> {pet.pet.description} </div>
                        <label>Descrição</label>
                        <div className="campoTextoDescricao"> {pet.pet.characteristics} </div>
                        {/* <label>Espécie</label>
                        <div className="campoTexto"></div>    
                        <label>Cor</label>
                        <div className="campoTexto"></div>    
                        <label>Data de encontro</label>
                        <div className="campoTexto"></div>     */}
                        </div>

                    </div>
                </div>
            </div>
            <div className="comentarios">
                <div className="tittleComentarios">
                    <h3>Comentários</h3>
                </div>
                <div className="input">
                <label>Compartilhe suas descobertas!!</label>
                <Input textArea={true} placeholder="sua mensagem"></Input>
                <ButtonForms name="Enviar"></ButtonForms>
                </div>
                <div className="lastMessage">

                </div>
            </div>

        </section>
    )
}
export default PetsPage