import axios from "axios";
const Api='AIzaSyC9p-XJhZEVNJ2nI54y9b_afFoRZptm7bc';
export async function senddata(email,password){
    const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+Api,
        {
            email:email,
            password:password,
            returnSecureToken:true
        }
    );
    const token=response.data.idToken;
    
    return token;
    }
  export async  function checkdata(email,password){
     const response=  await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+Api,
            {
              email:email,
              password:password,
              returnSecureToken:true
            }
        );
        const token=response.data.idToken;
        return token
    }

