import { View,Text,StyleSheet, TextInput, Pressable, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from "react";
import { checkdata } from "../auth";
import { Authcontext } from "../store/Authcontext";
import Loadingoverlay from "../loadingspiner";
function Login(){
    const authctx=useContext(Authcontext);
    const[logincomplete,setlogincomplete]=useState(false);
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const naviagtion=useNavigation();
    function screenchange(){
        naviagtion.replace("signup");
    }
    function emailhandel(email){
        setemail(email)
    }
    function passwordhandel(password){
        setpassword(password)
    }
    
    function buttoncheck(){
       async function handellogin(email,password){
        setlogincomplete(true);
        try {
            const token=await checkdata(email,password);
        authctx.authenticate(token);
       
     
        } catch (error) {
            Alert.alert("Login fail !","Enter correct email and password")
        }
        setlogincomplete(false)
        }
       
        handellogin(email,password);
       


        // if(email&&password&&email.includes("@")&&password.length>6){
        //     const loginuser={
        //         loginemail:email,
        //         loginpassword:password,
        //     }
        //     async function loginhandel({email,password}){
        //         const token=await checkdata(email,password);
        //         authctx.authenticate(token)
        //     }
        //    loginhandel(email,password);
        //     console.log(loginuser);
        //     setemail();
        //     setpassword();
        // }else{
        //     Alert.alert("Login fail !","Enter correct email and password")
        // }  
    }
    return<View style={styles.container}>
        <View style={styles.containercontent}>
        <Text style={[styles.colortext,styles.headtext]}>Log In</Text>
        <View  style={styles.contentbox }>
        <View style={styles.inputborder}>
        <TextInput style={styles.inputtext} value={email} placeholder="Email" placeholderTextColor="#adb5bd" onChangeText={emailhandel}/>
        </View>
        <View style={styles.inputborder}>
        <TextInput  style={styles.inputtext} value={password} placeholder="Password" placeholderTextColor="#adb5bd" onChangeText={passwordhandel}/>
        </View>

        
        <View style={styles.bttonstyle}>
      <Pressable onPress={buttoncheck}>
        <Text style={styles.buttontext}>Log In</Text>
      </Pressable>
        </View>
        <View style={styles.signuptext}>
            <Pressable >
            <Text style={styles.colortext}>Don't have an account ?<Pressable onPress={screenchange}>
            <Text style={styles.Signup} >Sign up</Text>
                </Pressable> </Text>
            </Pressable>
        </View>
        </View>
        </View>
    </View>
}
export default Login;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000B21",
     
        
    },
    containercontent:{
        marginTop:150
        
    },
    headtext:{
        fontSize:32,
        marginLeft:125,
        fontWeight:"600",
    },
    colortext:{
        color:"white"
    },
    Signup:{
        color:"#fa5252",
        marginTop:5
    },
    inputborder:{
        borderColor:"#fa5252",
        borderWidth:1,
         borderRadius:12 ,
         width:"85%",
        marginBottom:28,
        marginLeft:22,
        height:40,  
 },
 bttonstyle:{
    backgroundColor:"#f03e3e",
    color:"white",
    width:"85%",
    marginLeft:22,
    fontSize:18,
    fontWeight:"600",
    textAlign:"center",
    borderRadius:12,
    height:35,
    marginTop:10
},
signuptext:{
    marginTop:30,
    alignItems:"center"
  },
contentbox:{
    marginTop:48
    
},
inputtext:{
    marginLeft:8,
    marginTop:5,
    color:"white",
    fontSize:16
 },
 buttontext:{
    color:"white",
    fontSize:18,
    textAlign:"center",
    marginTop:5,
   },
   validtext:{
    color:"white"
   }
})
