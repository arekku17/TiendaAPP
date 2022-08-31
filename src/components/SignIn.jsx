import React from 'react'
import {useForm} from "react-hook-form"
import "../SignIn.css"
import {
    Link
} from "react-router-dom"

const SignIn = () => {

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
                        <h4 className='form-title3' >Iniciar Sesión</h4>

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
                            <label ></label>
                            <input type="text" placeholder='Contraseña' className='form-input' {...register('password',{
                                required: true,
                                maxLength: 5
                            })}/>
                            {errors.password?.type === 'required' && <p className='form-error'>* Campo requerido</p>}
                            {errors.password?.type === 'maxLength' && <p className='form-error' >* Debe tener al menos 5 caracteres</p>}
                        </div>
                        

                       <input type="submit" value="ENTRAR"  className='form-submit'/>
                       <p className='form-text' > 
                            <br/>
                            <a href="" className='form-link'>¿No tienes una cuenta?
                                <br/>
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
