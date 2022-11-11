import { useState, useEffect, createContext } from "react";
import {  Auth } from "../api";

const authController = new Auth();

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [laoding, setLaoding] = useState(true);

    useEffect(() => {
      //
    }, [])

    const login = async (accessToken)=>{
        try {
            setToken(accessToken)
           
        } catch (error) {
           console.log(error) 
        }
    }

    const data ={
        accessToken: token,
        user,
        login,
    }


    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}