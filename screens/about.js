import { View,Text,StyleSheet } from "react-native";

function About(){
    return<View style={styles.container}>
      <Text style={styles.textcolor}>its About screen</Text>
    </View>
}
export default About;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000B21",
        alignItems:"center",
        justifyContent:"center"
    },
    textcolor:{
        color:"white",
        
    }
})