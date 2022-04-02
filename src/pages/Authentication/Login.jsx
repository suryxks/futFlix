import { useState } from "react";
import axios from 'axios';
import { Header } from "../../components";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate,Link } from 'react-router-dom'
import './Authentication.css';

export const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const guest = {
        email: 'adarshbalika@gmail.com',
        password: 'adarshBalika123',
    }
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const loginHandler = async (credentials) => {
        const { data } = await axios.post('/api/auth/login', credentials);
        console.log(data)
        const { foundUser, encodedToken } = data;
        setAuth({ token: encodedToken, userInfo: foundUser });
        localStorage.setItem('token', encodedToken);
        localStorage.setItem('user', JSON.stringify(foundUser));
    }
    return (
        <div>
            <Header />
            <form className="auth-form" >
                <h1>LOGIN</h1>
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
                    loginHandler(formValues);
                    navigate('/');
                }}>Login</button>
                <button className="btn-outlined" onClick={(e) => {
                    e.preventDefault();
                    loginHandler(guest);
                    navigate('/');
                }}>Login as Guest</button>
                <Link to='/signup' className="Signup-Link">Sign Up</Link>
            </form>
        </div>
    )
}