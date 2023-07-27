import 'semantic-ui-css/semantic.min.css';
import { Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../css/contacto.css';
import swal from 'sweetalert'; 

const Contacto = () => {

    const URL = process.env.REACT_APP_URL;

    //Hooks de manejos de estado
    const { register, handleSubmit, formState: { errors } } = useForm();  //Funciones predefinidas de useForm


    const onSubmit = (datos, e) => {

        e.preventDefault();
        try {
            console.log(datos); //datos del evento
            axios.post(URL, datos);
            e.target.reset(); //resetea los datos del form
            swal({
                title: 'Consulta recibida',
                text: 'Nos contactaremos con usted.',
                icon: 'success',
                buttons: false,
                timer: 3000,
            });

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="bodyContacto App ">
            <Form onSubmit={handleSubmit(onSubmit)} className="formContacto">
                <div className="content">
                <h1 className="title tituloContacto"> ¡Contactate con nosotros! </h1>
                    <Form.Field>
                        <input style={{ width: '800px' }} className="mail casilla"  type="text"
                            placeholder='Nombre'
                            name='nombre'
                            {...register('nombre',
                                {
                                    required: true,
                                    maxLength: 50
                                }
                            )}
                        />
                    </Form.Field>
                    {errors.nombre && <p className='errores'>El nombre es obligatorio y con un máximo de 50 caracteres</p>}
                    <Form.Field>
                        <input style={{ width: '800px' }} className="mail casilla"  type="text"
                            placeholder='Apellido'
                            name='apellido'
                            {...register('apellido',
                                {
                                    required: true,
                                    maxLength: 80
                                }
                            )}
                        />
                    </Form.Field>
                    {errors.apellido && <p className='errores'>El apellido es obligatorio y con un máximo de 80 caracteres</p>}
                    <Form.Field>
                        <input style={{ width: '800px' }} className="mail casilla" type="email"
                            placeholder='Email'
                            name='email'
                            {...register('email',
                                {
                                    required: true
                                }
                            )}
                        />
                    </Form.Field>
                    {errors.email && <p className='errores'>El email es obligatorio</p>}
                    <Form.Field>
                        <textarea style={{ width: '800px' }} className="mail casilla"  type="text"
                            placeholder='Consulta'
                            name='consulta'
                            {...register('consulta',
                                {
                                    required: true,
                                    maxLength: 800
                                }
                            )}
                        />
                    </Form.Field>
                    {errors.consulta && <p className='errores'>La consulta es obligatoria y con un máximo de 800 caracteres</p>}
                    <div className="centrar">
                    <p className="text infoMail">Nuestro equipo se contactará contigo.</p>

                    <button className="botonEfecto2" type='submit'> Enviar Consulta </button>


                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Contacto;