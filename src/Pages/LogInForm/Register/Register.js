import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const { createUserEmailPassword } = useAuth();
    const { register, handleSubmit, } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        createUserEmailPassword(data.email, data.password, data.name, navigate);
    };

    return (
        <div>
            <div className="register user-info-feild">
                <h4>Register</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Your name  *</label>
                    <input id='username' {...register("name", { required: true })} />
                    <label htmlFor="useremail">Username or email  *</label>
                    <input id='useremail' {...register("email", { required: true })} />
                    <label htmlFor="userpass">Passwords  *</label>
                    <input type="password" required id='userpass' {...register("password")} />
                    <input className='submit-btn' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;