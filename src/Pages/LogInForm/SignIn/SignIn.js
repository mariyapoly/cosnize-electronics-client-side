import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import './SignIn.css'
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {

    const { loginUserWithEmailPassword, error } = useAuth();
    const { register, handleSubmit, } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = data => {
        loginUserWithEmailPassword(data.email, data.password, navigate, location)
    };


    return (
        <div>
            <div className="signin user-info-feild">
                <h4>Login</h4>
                <p style={{ color: 'red' }}>{error}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Username or email  *</label>
                    <input id='email' {...register("email", { required: true })} />
                    <label htmlFor="pass">Passwords  *</label>
                    <input type="password" required id='pass'  {...register("password")} />
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
            </div>
        </div >
    );
};

export default SignIn;