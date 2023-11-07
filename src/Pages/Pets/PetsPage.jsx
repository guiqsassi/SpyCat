import "./Pets.css"
import NavSlide from "../../Components/NavSlide/NavSlide"
import {useEffect, useState, useRef} from 'react';
import fav from "../../images/fav.png"
import Input from "../../Components/Input/Input";
import ButtonForms from "../../Components/ButtonForms/ButtonForms";
import UploadWidget from "../../Components/UploadWidged/UploadWidget";
import "leaflet/dist/leaflet.css"
import { Marker, Popup} from 'react-leaflet';
import markerIcon from "../../Components/Map/MarkerIcon";
import { useSelector } from "react-redux";
import axios from "axios";
import Map from "../../Components/Map/Map";
import { useSearchParams } from "react-router-dom";
import { BiSolidXCircle } from "react-icons/bi";
import seta from "../../images/seta.png"
import { useDispatch } from "react-redux";
import Api from "../../Api/Api";

const PetsPage = ()=>{
    const dispatch = useDispatch()
    const imageCollunm = useRef()
    const [bigImage, setBigImage] = useState()
    const [arrayImageCat, setArrayImageCat] = useState("")
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const [pet, setPet] = useState()
    const [marker, setMarker] = useState()
    const [position, setPosition] = useState([])
    const [markerPosition, setMarkerPosition] = useState([12,12])
    const [viewRescueModal, setViewRescueModal] = useState("none")


    console.log(position);

    const handleModalRescueClick =()=>{
        if(viewRescueModal === "none"){
            setViewRescueModal("flex")
        }else{
            setViewRescueModal("none")
        }
    }

      useEffect(
        ()=>{
            axios.get(`${Api}/pets/${id}`).then((res)=>{
                setPet(res.data)
                setMarker(res.data.locations)
                setPosition([res.data.locations[0].latitude, res.data.locations[0].longitude])
                setBigImage(res.data.images[0])
                dispatch({
                    type: "newPosition",
                    payload:{
                        position: [res.data.locations[0].latitude, res.data.locations[0].longitude]
                    }
                })
                setArrayImageCat([res.data.url,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/9749fcd8-168c-4b1b-979c-f162c491b7c2/article-the-daily-activities-of-your-cat.jpg"])
            })
        }
      ,[])
        const handleClickUp = ()=>{
            imageCollunm.current.scrollTop -= imageCollunm.current.offsetHeight
        }
        const handleClickBottom = ()=>{
            imageCollunm.current.scrollTop += imageCollunm.current.offsetHeight
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
                 <Map position={position}>
                    {markerPosition?
                    pet.locations.map((markerP)=> {
                        return <Marker icon={markerIcon} position={[markerP.latitude, markerP.longitude]}>
                                <Popup>{markerP.date}</Popup>
                             </Marker>
                        
                    }): null}

                 </Map>
                    </div>
                </div>
                <div className="petAbout">
                    <div className="infoBanner">
                        <div className="bannerCotent">
                        <label>Descrição</label>
                        <div className="campoTextoDescricao"> {pet.description} </div>
                        <label>Espécie</label>
                        <div className="campoTexto">{pet.specie}</div>    
                        <label>Cor</label>
                        <div className="campoTexto">{pet.color}</div>    
                        <label>Data de encontro</label>
                        <div className="campoTexto"></div>    
                        </div>
                    </div>
                        <ButtonForms name="Resgatar Pet"></ButtonForms>
                        <ButtonForms onClick={handleModalRescueClick}  name="Atualizar Encontro"></ButtonForms>
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


        <div className="rescueModal" style={{display: viewRescueModal}}>
            <div className="rescueModalContainer">
            <BiSolidXCircle size={30} onClick={handleModalRescueClick} color="F98AAE" className="close"></BiSolidXCircle>
            <h2>Avistamento de Pet</h2>
            <UploadWidget></UploadWidget>
            <Map placeMarker={true} findUser={true}></Map>
                <ButtonForms name="Enviar"></ButtonForms>
            </div>
        </div>
        </section>
    )
}
export default PetsPage