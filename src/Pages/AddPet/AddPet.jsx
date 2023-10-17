import "./AddPet.css"
import NavSlide from "../../Components/NavSlide/NavSlide";
import Input from "../../Components/Input/Input";
import "leaflet/dist/leaflet.css"
import {useState} from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet"
import ButtonForms from "../../Components/ButtonForms/ButtonForms";
const AddPet = () => {
    const [position, setPosition] = useState([-27.548258, -48.498994])
    const [markerPosition, setMarkerPosition] = useState(null)
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
          click(e) {
            // setState your coords here
            // coords exist in "e.latlng.lat" and "e.latlng.lng"
            setMarkerPosition([e.latlng.lat, e.latlng.lng])
            console.log(e.latlng.lat);
            console.log(e.latlng.lng);
            console.log(markerPosition);
           
          },
        });
        return markerPosition === null ? null : (
            <Marker icon={markerIcon} position={markerPosition}>
              <Popup>You are here</Popup>
            </Marker>
          )
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
                            <Input name={"Descrição"} textArea={true}></Input>
                            <Input name={"Email de Contato"}></Input>
                            <Input name={"Telefone"}></Input>

                        </div>
                        <div className="imagesMaps">
                            <input type="file" name="" id="" />
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
                        <ButtonForms name="Cadastrar"></ButtonForms>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AddPet;