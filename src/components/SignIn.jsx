import React from 'react'
import { useForm } from "react-hook-form"
import "../SignIn.css"
import {
    Link
} from "react-router-dom"
import axios from 'axios'

const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        postLogin(data);
    }

    const postLogin = (data) => {
        const url = "https://ecomerce-master.herokuapp.com/api/v1/login"
        axios.post(url, data)
            .then(response => console.log(response))
            .catch((error) => {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    console.log(error.response.data.message);
                }
            });
        ;
    }
    
    return (
        <div className='signin-section'>

            <div className='left-signin-section' > </div>

            <div className='right-signin-section'>

                <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
                    <Link to={`/home`}>
                        <i className="fa-solid fa-house"></i>
                    </Link>
                    <h3 className='form-title1' >¡Hola!</h3>
                    <h2 className='form-title2' >Bienvenido</h2>
                    <h4 className='form-title3' >Iniciar Sesión</h4>

                    <div className='form-goup'>
                        <input type="text" placeholder='Correo' className='form-input' {...register('email', {
                            required: true,
                            pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                        })} />
                        {errors.email?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        {errors.email?.type === 'pattern' && <p className='form-error'>* Formato incorrecto</p>}
                    </div>

                    <div className='form-goup'>
                        <label ></label>
                        <input type="password" placeholder='Contraseña' className='form-input' {...register('password', {
                            required: true,
                            minLength: 5
                        })} />
                        {errors.password?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        {errors.password?.type === 'minLength' && <p className='form-error' >* Ingrese más de 5 caracteres</p>}
                    </div>


                    <input type="submit" value="ENTRAR" className='form-submit' />
                    <p className='form-text' >
                        <br />
                        <a href="/signup" className='form-link'>¿No tienes una cuenta?
                            <br />
                        </a>
                    </p>
                    <Link to={'/signup'}>
                        <button className='form-button-register'>REGISTRARME</button>
                    </Link>
                </form>



            </div>


        </div>
    )
}

export default SignIn
