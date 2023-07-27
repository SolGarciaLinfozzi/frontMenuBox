import 'semantic-ui-css/semantic.min.css';
import '../css/contacto.css';
import React from 'react';
import swal from 'sweetalert'; // Asegúrate de haber instalado la librería 'sweetalert'

const Contacto = () => {
    const handleConsultaEnviada = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const nombre = event.target.nombre.value.trim();
        const consulta = event.target.consulta.value.trim();

        if (nombre.length > 0 && consulta.length > 0 && email.length > 0 && /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63})/i.test(email)) {
            swal({
                title: 'Consulta recibida',
                text: 'Revise su buzón de entrada.',
                icon: 'success',
                buttons: false,
                timer: 3000,
            });
            // Aquí podrías enviar el formulario al backend si necesitas guardar los datos
            // Por ejemplo, utilizando Axios o Fetch
        }
    };

    return (
        <div className="bodyContacto">
            <form onSubmit={handleConsultaEnviada} className="formContacto">
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
