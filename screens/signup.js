import { View,Text,StyleSheet, Pressable ,TextInput,Button,Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { senddata } from "../auth";
function Signup(){
  const [email,setemail]=useState();
  const [confirmemail,setconfirmemail]=useState();
  const [password,setpassword]=useState();
  const [confirmpassword,setconfirmpassword]=useState();
    const naviagtion=useNavigation();
    function screenchange(){
        naviagtion.replace("login");
    }
  function emailhandel(email){
  setemail(email);
  }
  function confirmemailhandel(confirmemail){
    setconfirmemail(confirmemail)
  }
  function passwordhandel(password){
    setpassword(password);
  }
  function confirmpasswordhandel(confirmpassword){
    setconfirmpassword(confirmpassword)
  }
  function buttoncheck(){
    if(email===confirmemail &&password===confirmpassword&&email.includes("@")&&password.length>6){
      const userinfo={
        useremail:email,
        userpassword:password,

      }
      senddata(email,password);
      console.log(userinfo);
      setemail();
      setconfirmemail();
      setpassword();
      setconfirmpassword()
   
    }else{
      Alert.alert('invalid input ','Lenght of  Password is larger then 6 digit and email must contain  @');
    }
   
  
}
    return<View style={styles.container}>
       <View style={styles.containercontent}>
       <Text style={[styles.colortext,styles.headtext]}>Sign Up</Text>
       <View style={styles.contentbox }>
        <View  style={styles.inputborder}>
        <TextInput style={styles.inputtext} value={email} placeholder="Email" placeholderTextColor="#adb5bd" onChangeText={emailhandel}/>
        </View>
        <View style={styles.inputborder}>
        <TextInput style={styles.inputtext}  value={confirmemail}  placeholder="Confirm Email"  placeholderTextColor="#adb5bd" onChangeText={confirmemailhandel}/>
        </View>
      <View style={styles.inputborder}  >
      <TextInput  style={styles.inputtext}  value={password} placeholder="Password" placeholderTextColor="#adb5bd"onChangeText={passwordhandel}/>
      </View>
         <View  style={styles.inputborder} >
         <TextInput style={styles.inputtext} value={confirmpassword} placeholder="Confirm Password" placeholderTextColor="#adb5bd" onChangeText={confirmpasswordhandel} />
         </View>
      
       </View>
       
        <View style={styles.bttonstyle}>
      <Pressable onPress={buttoncheck}>
        <Text style={styles.buttontext}>Sign Up</Text>
      </Pressable>
        </View>
        <View style={styles.signuptext}>
            <Text style={styles.colortext}>Already have an account?<Pressable onPress={screenchange}><Text style={styles.Signin}>Sign In</Text>
            </Pressable></Text>
                </View>
       </View>
    </View>
}
export default Signup;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000B21"
    },
    colortext:{
        color:"white"
    },
    Signin:{
        color:"#fa5252",
        fontSize:16,
    },
    inputborder:{
        borderColor:"#fa5252",
        borderWidth:0.8,
        borderRadius:12,
        color:"white",
        width:"85%",
        marginBottom:28,
        marginLeft:22,
        height:40,
        
     } 
    ,
    containercontent:{
        marginTop:64
        
    },
    containercontent:{
        marginTop:150   
    },
 contentbox:{
        marginTop:48
        
    },
    headtext:{
      fontSize:32,
      marginLeft:120,
      fontWeight:"600",
    },
  bttonstyle:{
    backgroundColor:"#f03e3e",
    width:"85%",
    marginLeft:22,
    fontWeight:"600",
    borderRadius:8,
    height:35,
    marginTop:8
  },
  signuptext:{
    marginTop:30,
    alignItems:"center"
  },
 inputtext:{
    marginLeft:8,
    marginTop:5,
    color:"white"
 },
 buttontext:{
  color:"white",
  fontSize:18,
  textAlign:"center",
  marginTop:5
 }
})