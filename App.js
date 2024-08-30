import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Home from './screens/home';
import Signup from './screens/signup';
import Authcontextprovider from './store/Authcontext';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Authcontext } from './store/Authcontext';
import { useContext } from 'react';
import Notification from './screens/notification';
import About from './screens/about';
const stack=createNativeStackNavigator();
const tab=createBottomTabNavigator();
function Authpage(){
  return(
    <stack.Navigator>
        <stack.Screen name='login' component={Login} options={{
          headerShown:false,
         
          presentation:"card",
          headerStyle:{
            backgroundColor:"#000B21",
            
          },
          headerTintColor:"white"
      
        }}/>
        <stack.Screen name='signup' component={Signup}options={{
          headerShown: false,
  
          presentation:"card",
          headerStyle:{
            backgroundColor:"#000B21",
            
          },
          headerTintColor:"white",
          
      
        }}/>
    </stack.Navigator>
  );
}
function Authenticateuser(){
  const autctx=useContext(Authcontext);
  return<tab.Navigator screenOptions={{
  }} >
     <tab.Screen name='Home' component={Home} options={{
          headerStyle:{
            backgroundColor:"#000B21",
            
          },
          headerTintColor:"white",
          tabBarActiveTintColor:"#fa5252",
          tabBarStyle:{
            backgroundColor:"#000B21"
          },
          tabBarIcon:()=>(
            <Ionicons name='home' size={24} color={"#fa5252"}/>
          ),
          headerRight:()=>(<Pressable onPress={autctx.logout}>
            <Ionicons size={24} color={"#fa5252"} name='exit' />
          </Pressable> )
      
        }}/>
    <tab.Screen name='About' component={About} options={{
      headerStyle:{
        backgroundColor:"#000B21",
        
      },
      headerShown:false,
      tabBarIcon:()=>(
        <Ionicons name='document-text' size={24} color={"#fa5252"}/>
      ),
      headerTintColor:"white",
      tabBarActiveTintColor:"#fa5252",
      tabBarStyle:{
        backgroundColor:"#000B21"
      },
    }}/>
    <tab.Screen name='Notification' component={Notification} options={{
      headerStyle:{
        backgroundColor:"#000B21",
        
      },
      tabBarIcon:()=>(
        <Ionicons name='bag-add' size={24} color={"#fa5252"}/>
      ),
      headerShown:false,
      headerTintColor:"white",
      tabBarActiveTintColor:"#fa5252",
      tabBarStyle:{
        backgroundColor:"#000B21"
      },
    }}/>
  
  </tab.Navigator>
}
// function Authenticateuser(){
//   return<stack.Navigator>
//     <stack.Screen name='bottomtab' component={Bottomtab}/>     
//   </stack.Navigator>
// }
function Displayscreen(){
  const autctx=useContext(Authcontext);
  return<NavigationContainer>
   {!autctx.isauthenticate&& <Authpage/>}
   {autctx.isauthenticate&&<Authenticateuser/>}
  </NavigationContainer>
}
export default function App() {

  return (<>
   <StatusBar style="light"/>
   <Authcontextprovider>
   <Displayscreen/>
   </Authcontextprovider>


  </>
  );
}


