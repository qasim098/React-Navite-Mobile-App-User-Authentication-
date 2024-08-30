import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Authcontext=createContext({
    token:'',
    isauthenticate:false,
    authenticate:()=>{},
    logout:()=>{}
})
function Authcontextprovider({children}){
const [authtoken,setauthtoken]=useState();
useEffect(()=>{
    async function fetchtoken(){
        const storetoken= await AsyncStorage.getItem('token');
        if(storetoken){
            setauthtoken(storetoken);
        }
    }
    fetchtoken();
},[])
function authenticate(token){
    setauthtoken(token);
    AsyncStorage.setItem('token' ,token);
}
function logout(){
    setauthtoken(null);
    AsyncStorage.removeItem('token');
}

const value={
    token:authtoken,
    isauthenticate:!!authtoken,
    authenticate:authenticate,
    logout:logout
}
return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
}
export default Authcontextprovider;