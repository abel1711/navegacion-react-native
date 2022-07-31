import React, { useReducer } from 'react';
import { createContext } from "react";
import { authReducer } from './authReducer';

/*Definir como luce o que informacion tendre aquí dentro del context*/
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
};

/** * Estado inicial*/
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

/**Lo usaremos para desirle a React como luce y que exponel context */
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    addIcon: (icon: string)=> void;
    addUser: (user: string)=> void;
}

/*** Crear el context, este es el que luego usaremos con el useContext */
export const AuthContext = createContext({} as AuthContextProps);
//tipado de las props
interface AuthProviderProps {
    children: JSX.Element | JSX.Element[];
}
//Componente proveedor del estado
export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'login' });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const addIcon = ( iconName: string ) =>{
        dispatch({type:'addIcon', payload: iconName});
    }

    const addUser = ( user: string )=>{
        dispatch({type:'addUser', payload: user});
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logout,
                addIcon,
                addUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};