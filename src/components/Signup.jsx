import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import "../SignIn.css"

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        postRegister(data);
    }

    const postRegister = (data) => {
        const url = "https://ecomerce-master.herokuapp.com/api/v1/signup"
        // Hay que checar lo del nacimiento por M, F o X, tal vez cambiando el input por otro
        const sortData = {
            first_name: data.nombre,
            last_name: data.apellidos,
            birth_date: data.nacimiento,
            gender: data.genero,
            email: data.email,
            password: data.password
        }
        axios.post(url, sortData)
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
                    <Link to={ `/signin` }>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </Link>
                    <h3 className='form-title1' >¡Hola!</h3>
                    <h2 className='form-title2' >Bienvenido</h2>
                    <h4 className='form-title3' >Registrarse</h4>

                    <div className='form-goup'>
                        <input type="text" placeholder='Nombre' className='form-input' {...register('nombre', {
                            required: true,
                        })} />
                        {errors.nombre?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                    </div>

                    <div className='form-goup'>
                        <input type="text" placeholder='Apellidos' className='form-input' {...register('apellidos', {
                            required: true,
                        })} />
                        {errors.apellidos?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                    </div>

                    <div className='form-goup'>
                        <div className='lbl'>Fecha de Nacimiento</div>
                        <input type="date" placeholder='Fecha Nacimiento' className='form-input' {...register('nacimiento', {
                            required: true,
                        })} />
                        {errors.nacimiento?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                    </div>

                    <div className='form-goup'>
                    <div className='lbl'>Género</div>
                        <input type="radio" name='genero' value={"M"} placeholder='Género' className='form-radio' {...register('genero', {
                            required: true,
                        })} /> Masculino
                        <input type="radio" name='genero' value={"F"} placeholder='Género' className='form-radio' {...register('genero', {
                            required: true,
                        })} /> Femenino
                        <input type="radio" name='genero' value={"X"} placeholder='Género' className='form-radio' {...register('genero', {
                            required: true,
                        })} /> Otro
                        {errors.genero?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                    </div>

                    <div className='form-goup'>
                        <input type="text" placeholder='Correo' className='form-input' {...register('email', {
                            required: true,
                            pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                        })} />
                        {errors.email?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        {errors.email?.type === 'pattern' && <p className='form-error'>* Formato incorrecto</p>}
                    </div>

                    <div className='form-goup'>
                        <input type="password" placeholder='Contraseña' className='form-input' {...register('password', {
                            required: true,
                            minLength: 5
                        })} />
                        {errors.password?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        {errors.password?.type === 'minLength' && <p className='form-error' >* Ingrese más de 5 caracteres</p>}
                    </div>

                    <input type="submit" value="REGISTRARSE" className='form-submit' />


                </form>



            </div>


        </div>
    )
}

export default SignUp
