import "./AddPet.css";
import NavSlide from "../../Components/NavSlide/NavSlide";
import Input from "../../Components/Input/Input";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import UploadWidget from "../../Components/UploadWidged/UploadWidget";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonForms from "../../Components/ButtonForms/ButtonForms";
import { useSelector } from "react-redux";
import Select from "../../Components/Select/Select";
import Api from "../../Api/Api";
import Map from "../../Components/Map/Map";

const AddPet = () => {
  const navigate = useNavigate();

  const [markerPosition, setMarkerPosition] = useState(null);
  const [description, setDescription] = useState("");
  const [especie, setEspecie] = useState("");
  const [Cor, setCor] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [status, setStatus] = useState("");
  const [view, setView] = useState("");

  const { city, state, type, latitude, longitude } = useSelector(
    (state) => state.mapReducer
  );
  const { userID } = useSelector(
    (state) => state.userReducer
  );



  const date = new Date().toJSON();

  const handleClick = async () => {
    // const {url} = {...petUrl}
    const url ="https://vivoverde.com.br/wp-content/uploads/2010/02/sphynx_cats_1a_thumb.jpg";
    const location = {
      latitude: latitude,
      longitude: longitude,
      date: date,
    };
    console.log(Cor, especie, city, state, location, status, url);
    if (
      type.toLocaleLowerCase() !== "ocean" &&
      latitude &&
      url !== "" &&
      description !== "" &&
      Cor !== "" &&
      especie !== "" &&
      status !== ""
    ) {
      await axios
        .post(`${Api}/pets`, {
          id: 0,
          description: description,
          color: Cor,
          specie: especie,
          city: city,
          state: state,
          location: location,
          images: [url],
          status: status.toUpperCase(),
          user:{ id: 2}
        })
        .then((res) => {
          console.log(res);
        });
    }
    navigate("/home");
  };

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
                  <Select
                    options={["Abandonado", "Perdido"]}
                    defaultValue="Faça sua escolha"
                    onChange={(e) => {
                      if (e.target.value == "Perdido") {
                        setView(true);
                      } else {
                        setView(false);
                      }
                      setStatus(e.target.value);
                    }}
                  ></Select>
                </div>
              </div>
              <Input
                name={"Espécie"}
                value={especie}
                setValue={setEspecie}
              ></Input>
              <Input name={"Cor"} value={Cor} setValue={setCor}></Input>
              <Input
                name={"Descrição"}
                value={description}
                setValue={setDescription}
                textArea={true}
              ></Input>
              {view ? (
                <>
                  <Input
                    name={"Email de Contato"}
                    setValue={setEmail}
                    value={email}
                  ></Input>
                  <Input
                    name={"Telefone"}
                    setValue={setTelefone}
                    value={telefone}
                  ></Input>
                </>
              ) : null}
            </div>
            <div className="imagesMaps">
              <UploadWidget></UploadWidget>
              <Map findUser={true} placeMarker={true}></Map>
            </div>
          </div>
          <div className="confirmButton">
            <ButtonForms name="Cadastrar" onClick={handleClick}></ButtonForms>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPet;
