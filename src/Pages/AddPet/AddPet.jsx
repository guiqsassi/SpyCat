import "./AddPet.css"
import NavSlide from "../../Components/NavSlide/NavSlide";
import Input from "../../Components/Input/Input";
import "leaflet/dist/leaflet.css"
import {useState} from "react"
import UploadWidget from "../../Components/UploadWidged/UploadWidget";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonForms from "../../Components/ButtonForms/ButtonForms";
import { useSelector } from "react-redux";
const AddPet = () => {
  const navigate = useNavigate()
    const [position, setPosition] = useState([-27.548258, -48.498994])
    const [markerPosition, setMarkerPosition] = useState(null)
    const [description, setDescription] = useState("")
    const [characteristics, setCharacteristics] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const petUrl = useSelector(state=> state.petReducer)
    const markerIcon = new L.Icon({
        iconUrl: require("../../images/locator.png"),
        iconSize: [30, 30],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
      });
      function MyComponent() {
            const map = useMapEvents({
            click() {
              map.locate()
            },
            locationfound(e) {
              setPosition(e.latlng)
              map.flyTo(e.latlng, map.getZoom())
            },
          }) 
        return 
      } 
      
      const MapEvents = () => {
        useMapEvents({
          click (e) {
            // setState your coords here
            // coords exist in "e.latlng.lat" and "e.latlng.lng"
            setMarkerPosition([e.latlng.lat, e.latlng.lng])
            axios.post(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=${e.latlng.lng},${e.latlng.lat}`).then((res)=>{
                setCity(res.data.address.City)
                setState(res.data.address.Region)
            })
            console.log(e.latlng.lat);
            console.log(e.latlng.lng);
            console.log(city);
           
          },
        });
        return markerPosition === null ? null : (
            <Marker icon={markerIcon} position={markerPosition}>
              <Popup className="popup">{city} <br></br> {state}</Popup>
            </Marker>
          )
    }

    const handleClick = async()=>{
      console.log(characteristics);
      console.log(description);
      console.log(city);
      console.log(state);
      console.log(markerPosition[0]);
      console.log(markerPosition[1]);
    const {url} = {...petUrl}
      console.log(url);
      await axios.post("http://192.168.15.79:8080/pets", { characteristics: characteristics, description: description, city: city, state: state, lat: markerPosition[0], lng: markerPosition[1], url: url}).then((res)=>{
        console.log(res);
      })
      navigate("/home")
      

    }
    return ( 
        <section className="addPet">
            <NavSlide></NavSlide>
            <div className="petCreateContainer">
                <div className="banner">
                    <div className="bannerTittle">
                        <h1>Novo Pet</h1>
                    </div>
                    <div className="bannerContent">
                        <div className="BannerInputs">
                            <div className="cadType">
                                <div className="TypeTittle">
                                 <h3>Tipo de cadastro</h3>   
                                </div>
                                <div className="checkboxes">
                                <div className="campoCheckBox">
                                <input type="checkbox" name="" id="" />
                                <label>Perdido</label>    
                                </div>
                                <div className="campoCheckBox">
                                <input type="checkbox" name="" id="" />
                                <label>Abandonado</label>    
                                </div>

                                </div>
                               
                            </div>
                            <Input name={"Espécie"}></Input> 
                            <Input name={"Cor"}></Input> 
                            <Input name={"Caracteristicas"} value={characteristics} setValue={setCharacteristics} textArea={true}></Input>
                            <Input name={"Descrição"} value={description} setValue={setDescription} textArea={true}></Input>
                            <Input name={"Email de Contato"}></Input> 
                            <Input name={"Telefone"}></Input> 

                        </div>
                        <div className="imagesMaps">
                            <UploadWidget className={"uploadWidget"}></UploadWidget>
                            <MapContainer id="map"className="mapAdd" center={position}  zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyComponent/>
                <MapEvents />

                </MapContainer>
                        </div>
                    </div>
                    <div className="confirmButton">
                        <ButtonForms name="Cadastrar" onClick={handleClick}></ButtonForms>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AddPet;