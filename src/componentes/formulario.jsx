import 'semantic-ui-css/semantic.min.css';
import {Form, Button} from 'semantic-ui-react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
//import { useState } from 'resact';

const Formulario = () =>{

    const URL = process.env.REACT_APP_URL;

    //Hooks de manejos de estado
    const {register, handleSubmit, reset, formState: {errors}} = useForm();  //Funciones predefinidas de useForm

    //Hooks de manejos de estado
    //Creas las variables y las asignas con useState
    // const[nombre,setNombre] = useState('');
    // const[apellido,setApellido] = useState('');
    // const[email,setEmail] = useState('');
    // const[password,setPassword] = useState('');

    const onSubmit = (datos, e) =>{

        e.preventDefault();
        try{
            console.log(datos); //datos del evento
            axios.post(URL,datos);
            e.target.reset(); //resetea los datos del form

        }catch (error){
            console.log(error)
        }
    }


    return(
        <div className='App'>
            <h1>Formulario de registro</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label htmlFor="">Nombre:</label>
                    <input  type="text"
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
                    <label htmlFor="">Apellido:</label>
                    <input  type="text"
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
                    <label htmlFor="">Email:</label>
                    <input  type="email"
                            placeholder='Email'
                            name='email' 
                            {...register('email', 
                            {
                                required: true,
                                //pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63})/i
                                //Para poder hacer el deploy
                            }
                        )}
                    />
                </Form.Field>
                {errors.email && <p className='errores'>El email es obligatorio</p>}
                <Form.Field>
                    <label htmlFor="">Password:</label>
                    <input  type="password"
                            placeholder='Password'
                            name='password' 
                            {...register('password', 
                            {
                                required: true,
                                minLength: 8
                            }
                        )}
                    />
                </Form.Field>
                {errors.password && <p className='errores'>El password es obligatorio y con un mímino de 8 caracteres</p>}

                <div className="centrar">

                    <Button.Group>
                        <Button primary type='button' onClick={()=>reset()}> Limpiar Formulario </Button>
                        <Button.Or/>r
                        <Button positive type='submit'> Enviar Datos </Button>
                    </Button.Group>

                    {/* <Button type='submit'> Enviar Datos </Button>
                    <Button type='button' onClick={()=>reset()} > Limpiar formulario </Button> */}
                </div>
            </Form>
        </div>
    )
}

export default Formulario;