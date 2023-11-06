import NavSlide from "../../Components/NavSlide/NavSlide";
import "./User.css"
import { BiSolidXCircle } from "react-icons/bi";
import PetView from "../../Components/PetView/PetView";
import Edit from "../../images/edit.png"
import React, { useState, useRef, useEffect } from 'react';
import arrow from "../../images/Arrow.png"
import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import ButtonForms from "../../Components/ButtonForms/ButtonForms";
import UploadWidgetUser from "../../Components/UploadWidgedUser/UploadWidgetUser";
import axios from "axios";
const User = () => {
    const [estado, setEstado] = useState()
    const [cidades, setCidades] = useState([])
    const [display, setDisplay] = useState("none")
    const siglasEstadosBrasil = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
      
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const couroselfav = useRef(null)
    const courosel = useRef(null)
    const pet = {
        "id": 1,
    "characteristics": "asdas",
    "description": "dasdasdasf",
    "city": "Florianópolis",
    "state": "Santa Catarina",
    "url": "http://res.cloudinary.com/guiqsassi/image/upload/v1698510521/9a3c3fb5f73822af8514df07f6676392_lmu1p8.gif",
    "status": null,
    "locations": [],
    "images": [],
    "user": null,
    "comment": null,
    "lat": -27.543719484487116,
    "lng": -48.500416874885566
    }
    const onClickRightFav = (e)=>{
        e.preventDefault()
        console.log(couroselfav.current.offsetWidth);
        couroselfav.current.scrollLeft += couroselfav.current.offsetWidth
        
    }
    const onClickLeftFav = (e)=>{
        e.preventDefault()
        console.log(couroselfav.current.offsetWidth);
        couroselfav.current.scrollLeft -= couroselfav.current.offsetWidth
        
    }
    const onClickRight = (e)=>{
        e.preventDefault()
        console.log(courosel.current.offsetWidth);
        courosel.current.scrollLeft += courosel.current.offsetWidth
        
    }
    const onClickLeft = (e)=>{
        e.preventDefault()
        console.log(courosel.current.offsetWidth);
        courosel.current.scrollLeft -= courosel .current.offsetWidth
        
    }
    const handleStateSelected =async (e)=>{
        const estado = (e.target.value)
        console.log(estado);
        setCidades([])
        await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`).then((res)=>{
            const resposta = res.data

            console.log(resposta);
            resposta.map((municipio)=>{
                if(!cidades.includes(municipio.microrregiao.nome))(
                        setCidades((prev) =>  [...prev, municipio.nome ])

                )
                // setCidades([...cidades, municipio.microrregiao.nome])
            })
        })
    }
    return (
        <>
        <NavSlide/>
        <section className="UserSection">
            <div className="userInformation">
                <img src="https://pbs.twimg.com/profile_images/1564084321098629122/JljknKFp_400x400.jpg" className="userIcon"/>
                <div className="userEdit">
                 <h3>Olá Celso Portiolli</h3> <img src={Edit} className="editIcon" style={{cursor: "pointer"}} onClick={()=>{setDisplay("flex")}}/>
                </div>
            </div>
            <div className="userPets">
                <div className="carrosels">
                    <div className="PetsCarrosel">
                    <div className="tittlePets">
                    <h3>Pets Favoritos</h3>
                    <h4> Veja Mais</h4>

                    </div>
                    <div className="carouselArrows">
                    <img src={arrow} onClick={onClickLeftFav} className="arrow"/>

                    <div className="petCards" ref={couroselfav}>
                    <PetView image={"https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    </div>
                    <img src={arrow} onClick={onClickRightFav} style={{transform: "scaleX(-1)"}} className="arrow"/>

                    </div>
                    </div>
                    <div className="PetsCarrosel">
                    <div className="tittlePets">
                    <h3>Meus pets</h3>
                    <h4> Veja Mais</h4>
                    </div>
                    <div className="carouselArrows">
                    <img src={arrow} onClick={onClickLeft} className="arrow"/>

                    <div className="petCards" ref={courosel}>
                    <PetView image={"https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    <PetView image={pet.url} pet={pet}></PetView>
                    </div>
                    <img src={arrow} onClick={onClickRight} style={{transform: "scaleX(-1)"}} className="arrow"/>

                    </div>
                    </div>

                    
                </div>
            </div>
           
        </section>
        <div className="modalUser" style={{display: display}}>
                <div className="modalContainerUser">
                    <div className="modalTittle">
                        <h3>Editar Cadastro</h3>
                        <BiSolidXCircle  color="F98AAE" size={35} style={{marginRight: "20px", cursor: "pointer"}} onClick={()=>{ setDisplay("none")}}></BiSolidXCircle>
                    </div>
                    <div className="userEditContainer">
                    <UploadWidgetUser></UploadWidgetUser>
                    <Input icon={"https://i.postimg.cc/8CV7NZSr/Vector.png"} placeholder="Nome" value={name} setValue={setName} name={"Nome"}></Input>
                <Input placeholder="Email" icon={"https://i.postimg.cc/VktJx338/email.png"} value={email} setValue={setEmail} name={"Email"}></Input>
                <Input password="password" placeholder="Senha" icon={"https://i.postimg.cc/MKNcrW35/cadeado.png"} value={password} setValue={setPassword} name={"Senha"}></Input>
                        <Select label={"Estado"} defaultValue={"Insira o seu estado"} onChange={handleStateSelected} options={ siglasEstadosBrasil}/>
                        <Select dataList={true} list="cidades" label={"Cidade"} defaultValue={"Insira o seu estado"} options={ cidades}/>
                    <ButtonForms name="atualizar"></ButtonForms>
                    </div> 
                </div>
            </div>
        </>
      );
}
 
export default User;