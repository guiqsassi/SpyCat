import "./Pets.css"
import NavSlide from "../../Components/NavSlide/NavSlide"
import {useEffect, useState} from 'react';
const PetsPage = ()=>{
    const arrayImageCat = ["https://cdn.jwplayer.com/v2/media/OJGSRhSM/poster.jpg?width=720", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8SC76eRU3DWifJRqv3-PKZXTPWIBuFmxiw&usqp=CAU","https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/9749fcd8-168c-4b1b-979c-f162c491b7c2/article-the-daily-activities-of-your-cat.jpg"]
    const [bigImage, setBigImage] = useState(arrayImageCat[0])


    const positivo = (position)=>{
        console.log(position.coords.latitude)
    }
    const negativo = ()=>{
        console.log("deu ruim");
    }
    console.log(navigator.geolocation.getCurrentPosition(positivo,negativo))

    return(
        <section className="petsSection">
            <NavSlide></NavSlide>
            <div className="petInfo">
                <div className="imageSection">
                    <div className="images">
                    <div className="bigImage">
                        <img src={bigImage} alt="" />
                    </div>
                    <div className="imageCollunm">
                    {arrayImageCat? arrayImageCat.map((imag)=>{
                        return(
                            <img src={imag} onClick={()=>{setBigImage(imag)}} alt="" />
                        )
                    }): null}
                    </div>
                    </div>
                   
                </div>
                <div className="petAbout">
                    <div className="infoBanner">
                        <div className="bannerCotent">
                        <label>Descrição</label>
                        <div className="campoTexto"></div>
                        <label>Data de encontro</label>
                        <div className="campoTexto"></div>    
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default PetsPage