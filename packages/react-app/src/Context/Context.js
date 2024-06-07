import {createContext, useState} from "react";

export const AuthenticationContext = createContext();

export function useAuthState(){
    return useState({
        isAuthenticated : false,
        username :"",
        roles :[],
        token : "",
        "errorMessage":undefined
    });
}