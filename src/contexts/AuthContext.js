import { useState, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext=createContext(null);

export const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        token:'',
        userInfo:{},
    })
    const isAuthenticated=()=>{
        if(localStorage.getItem('token')){
            return true;
        }else{
            return false;
        }
    }
    const logoutHandler=()=>{
        localStorage.clear();
    }
    return (
    <AuthContext.Provider value={{auth,setAuth,isAuthenticated,logoutHandler}}>
         {children}
    </AuthContext.Provider>)
}
export const useAuth=()=>useContext(AuthContext);