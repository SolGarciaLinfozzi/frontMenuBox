import 'semantic-ui-css/semantic.min.css';
import '../css/contacto.css';
import React from 'react';
import swal from 'sweetalert'; 
import {Form, Button} from 'semantic-ui-react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const Contacto = () => {

    const URL = process.env.REACT_APP_URL;
   

    //Hooks de manejos de estado
    const {register, handleSubmit, reset, formState: {errors}} = useForm();  //Funciones predefinidas de useForm

    const onSubmit = (datos, e) =>{

        e.preventDefault();
        try{
            console.log(URL);
            console.log(datos); //datos del evento
            axios.post(URL,datos);
            
            e.target.reset(); //resetea los datos del form
            
            swal({
                title: 'Consulta recibida',
                text: 'Nos pondremos en contacto con usted.',
                icon: 'success',
                buttons: false,
                timer: 3000,
            });
        }catch (error){
            console.log(URL);
            console.log(error)
        }
    }

    return (
        <div className="bodyContacto">
            <form onSubmit={handleSubmit(onSubmit)} className="formContacto">
                <div className="content">
                    <h1 className="title centrado tituloContacto "> Contactate con nosotros! </h1>
                    <input maxLength="200" type="text" className="mail casilla" placeholder="Nombre" id="nombre" name="nombre" required />
                    <input maxLength="200" type="email" className="mail casilla" placeholder="Email" id="email" name="email" required />
                    <textarea maxLength="400" type="text" className="mail casilla" placeholder="Mensaje" id="consulta" name="consulta" required />
                    <p className="text infoMail">Nuestro equipo se contactará contigo.</p>
                    <button className="botonEfecto2" type="submit"> Enviar </button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;
