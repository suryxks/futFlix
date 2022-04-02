import { useState } from "react";
import axios from 'axios';
import { Header } from "../../components";
import  {useAuth} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom'
import './Authentication.css';

export const Signup = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const {auth,setAuth}=useAuth();
    const navigate=useNavigate();
    const signupHandler=async()=>{
        const {data}=await axios.post('/api/auth/signup',formValues);
        const {createdUser,encodedToken}=data;
        setAuth({token:encodedToken,userInfo:createdUser});
        localStorage.setItem('token',encodedToken);
        localStorage.setItem('user',JSON.stringify(createdUser));
    }
    return (
        <div>
            <Header />
            <form className="auth-form" >
                <h1>SIGN UP</h1>
                <input type='email'
                    placeholder='Email address..'
                    className="auth-input" value={formValues.email}
                    onChange={(e) => setFormValues(prev => ({ ...prev, email: e.target.value }))}
                />
                <input type='password'
                    placeholder="password"
                    className="auth-input"
                    value={formValues.password} onChange={(e) => setFormValues(prev => ({ ...prev, password: e.target.value }))}
                />
                <button className="btn-cta" onClick={(e) => {
                    e.preventDefault();
                    signupHandler();
                    navigate('/');
                }}>SIGN UP</button>

            </form>
        </div>
    )
}