import React from 'react'
import {useForm} from "react-hook-form"
import "../SignIn.css"

const SignUp = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='signin-section'>
           
            <div className='left-signin-section' > </div>

            <div className='right-signin-section'>
 
            <form onSubmit={handleSubmit(onSubmit)} className= "form-signin">
                        <h3 className='form-title1' >¡Hola!</h3> 
                        <h2 className='form-title2' >Bienvenido</h2>
                        <h4 className='form-title3' >Registrarse</h4>
                        
                        <div className='form-goup'>
                            <input type="text" placeholder='Nombre' className='form-input' {...register('nombre',{
                                required: true,
                            })} />
                            {errors.nombre?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        </div>

                        <div className='form-goup'>
                            <input type="text" placeholder='Apellidos' className='form-input' {...register('apellidos',{
                                required: true,
                            })} />
                            {errors.apellidos?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        </div>

                        <div className='form-goup'>
                            <input type="text" placeholder='Fecha Nacimiento' className='form-input' {...register('nacimiento',{
                                required: true,
                            })} />
                            {errors.nacimiento?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        </div>

                        <div className='form-goup'>
                            <input type="text" placeholder='Género' className='form-input' {...register('genero',{
                                required: true,
                            })} />
                            {errors.genero?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                        </div>

                        <div className='form-goup'>
                            <input type="text" placeholder='Correo' className='form-input' {...register('email',{
                                required: true,
                                pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                            })}/>
                            {errors.email?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                            {errors.email?.type === 'pattern' && <p className='form-error'>* Formato incorrecto</p>}
                            <span className='form-line'></span>
                        </div>
                        
                        <div className='form-goup'>
                            <input type="text" placeholder='Contraseña' className='form-input' {...register('password',{
                                required: true,
                                minLength: 5
                            })}/>
                            {errors.password?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                            {errors.password?.type === 'minLength' && <p className='form-error' >* Ingrese más de 5 caracteres</p>}
                            </div>

                        <input type="submit" value="REGISTRARSE"  className='form-submit'/>


                    </form>
                

                
            </div>


        </div>
    )
}

export default SignUp
