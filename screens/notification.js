import { View,Text,StyleSheet } from "react-native";

function Notification(){
    return<View style={styles.container}>
      <Text style={styles.textcolor}>its Notification screen</Text>
    </View>
}
export default Notification;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000B21",
          alignItems:"center",
        justifyContent:"center"
    },
    textcolor:{
        color:"white"
    }
})