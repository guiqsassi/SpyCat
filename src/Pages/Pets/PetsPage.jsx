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
import arrow from "../../images/Arrow.png"
import petReducer from "../../Redux/Pet/PetReducer";
import { useSearchParams } from "react-router-dom";
import { BiSolidXCircle } from "react-icons/bi";
import seta from "../../images/seta.png"

const PetsPage = ()=>{
    const imageCollunm = useRef()
    const [bigImage, setBigImage] = useState()
    const [arrayImageCat, setArrayImageCat] = useState("")
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    console.log("O seu id é:"+ id);
    const [pet, setPet] = useState()
    const [marker, setMarker] = useState()
    const [modalImg, setModalImg] = useState(0)
    console.log(pet);
    const markerIcon = new L.Icon({
        iconUrl: require("../../images/locator.png"),
        iconSize: [30, 30],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
      });

      useEffect(
        ()=>{
            axios.get(`http://192.168.15.79:8080/pets/${id}`).then((res)=>{
                setPet(res.data)
                setMarker([res.data.lat, res.data.lng])
                setBigImage(res.data.url)
                setArrayImageCat([res.data.url,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/9749fcd8-168c-4b1b-979c-f162c491b7c2/article-the-daily-activities-of-your-cat.jpg"])
            })
        }
      ,[])
        const handleClickUp = ()=>{
            console.log(imageCollunm.current.offsetHeight);
            imageCollunm.current.scrollTop -= imageCollunm.current.offsetHeight
        }
        const handleClickBottom = ()=>{
            console.log(imageCollunm.current.offsetHeight);
            imageCollunm.current.scrollTop += imageCollunm.current.offsetHeight
        }
        const modalImageLeft=()=>{
            if(modalImg + 1 < arrayImageCat.length)
            setModalImg(modalImg+1)
            console.log(modalImg);
        }
        const modalImageRight=()=>{
            if(modalImg-1 != -1){
                setModalImg(modalImg - 1)
            }
        }
    return(
        <section className="petsSection">
        
            <NavSlide></NavSlide>
            {pet?
                    <div className="petInfo">
                <div className="imageSection">
                    <div className="images">
                    <div className="bigImage">
                        <img src={bigImage} alt="" />
                    </div>
                    <div className="Collunm" >
                        <img src={seta} style={{maxWidth: "24px", transform: "scaleY(-1)", cursor: "pointer", marginBottom: "5px"}} onClick={handleClickUp} alt="" />
                    <div className="imagesCollums" ref={imageCollunm}>
                    {arrayImageCat? arrayImageCat.map((imag)=>{
                        return(
                            <img src={imag} className="imgCollunmSon" onClick={()=>{setBigImage(imag)}} alt="" />
                        )
                    }): null
                    }
                    </div>

                    <img src={seta} style={{maxWidth: "24px", cursor: "pointer",  marginTop: "5px"}} onClick={handleClickBottom}  alt="" />
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
                        {pet.city}
                    </Popup>
                </Marker>

                </MapContainer>
                    </div>
                </div>
                <div className="petAbout">
                    <div className="infoBanner">
                        <div className="bannerCotent">
                        <label>Descrição</label>
                        <div className="campoTextoDescricao"> {pet.description} </div>
                        <label>Espécie</label>
                        <div className="campoTexto"></div>    
                        <label>Cor</label>
                        <div className="campoTexto"></div>    
                        <label>Data de encontro</label>
                        <div className="campoTexto"></div>    
                        </div>

                    </div>
                </div>
            </div>:
            null
        }
    
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
        {/* <div className="imageModal">
            <div className="imageModalContainer">
            <BiSolidXCircle size={30} color="F98AAE" className="close"></BiSolidXCircle>
            <img src={arrow} onClick={modalImageLeft}  className="arrow"/>
            <div className="corouselImages">
                <img src={arrayImageCat[modalImg]} className="imagesFromModal" alt="" />
            </div>
            <img src={arrow} onClick={modalImageRight}  className="arrow"/>

            </div>
        </div> */}
        </section>
    )
}
export default PetsPage