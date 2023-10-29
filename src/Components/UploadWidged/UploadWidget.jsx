import "./UploadWidget.css"
import { useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from 'react';
import Axios from "axios";
import add from "../../images/circle-addRose.png"
const UploadWidget = () => {
    const [file, setFiles] = useState()
    const [resImg, setResImg] = useState()
    const dispatch = useDispatch()
    const uploadImage = (files)=>{
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "ml_default")

        Axios.post("https://api.Cloudinary.com/v1_1/guiqsassi/image/upload",formData).then((res)=>{
            const url =  res.data.url   
        dispatch({
                type: "url",
                payload: {
                    url: url
                }

            })
            console.log(url);
            setResImg(res.data.url)
        })
    };


    return ( 
        <>
        {resImg?
        <img src={resImg} className="resImg" alt="" />
        :
        <form className="file">
        
        <input type="file" className="upload" onChange={(e)=>{
            uploadImage(e.target.files)
        }}/>
        <div className="formCenter">
        <label className="labelUpload"> Enviar imagem</label>
        <img src={add} className="addImg" />
        </div>
        </form>


}
       

        </>
     );
}
 
export default UploadWidget;